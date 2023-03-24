<script lang="ts">
  import {navigate} from "svelte-routing";
  import siteLocationSchema from "../../lib/schemas/SiteLocationSchema";
  import {
    createSiteLocation,
    getSiteLocation,
    updateSiteLocation,
  } from "../../lib/apiServices/SiteLocationApiService";
  import validationErrorHandler from "../../lib/ValidationErrorHandler";
  import {onMount} from "svelte";
  import TextInput from "../forms/inputs/TextInput.svelte";
  import type Location from "../../lib/types/Location";
  import DropDownBox from "../helpers/DropDownBox.svelte";

  export let siteId;
  export let jobId;
  export let visitId;
  export let locationId: number;

  let loading = false;

  let location: Location = {
    area: "",
    floor: "",
    id: 0,
    name: "",
    siteId: 0,
    type: ""
  };

  let errors = {
    floor: null,
    area: null,
    type: null,
    name: null,
  };

  function submit() {
    errors.floor = null;
    errors.area = null;
    errors.type = null;
    errors.name = null;

    siteLocationSchema
      .validate(location, {abortEarly: false})
      .then(handleValid)
      .catch(handleInvalid);

    function handleValid() {
      loading = true;

      let promise;
      if (locationId) {
        promise = updateSiteLocation(location, siteId, locationId);
      } else {
        promise = createSiteLocation(location, siteId);
      }

      promise
        .then((location: Location) => {
          if (visitId) {
            navigate(`/site/${siteId}/job/${jobId}/visit/${visitId}`);
          } else {
            navigate(`/site/${siteId}`);
          }
        })
        .catch(() => {
          loading = false;
        });
    }

    function handleInvalid(failures: any) {
      errors = validationErrorHandler(failures);
    }
  }

  onMount(() => {
    if (siteId && locationId) {
      getSiteLocation(siteId, locationId).then((r: Location) => (location = r));
    }
  });
</script>

<form on:submit|preventDefault={submit}>
    <div class=" sm:overflow-hidden sm:rounded-md">
        <div class="space-y-6 bg-white py-6 px-1 sm:p-6">
            <div>
                <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Location Information
                </h3>
            </div>
            <div class="grid grid-cols-6 gap-6">
                <TextInput
                        bind:value={location.floor}
                        id="site-location-floor"
                        error={errors.floor}
                        name="Floor"
                        loading={loading}
                />
                <TextInput
                        bind:value={location.area}
                        id="site-location-area"
                        error={errors.area}
                        name="Area"
                        loading={loading}
                />
                <TextInput
                        bind:value={location.type}
                        id="site-location-type"
                        error={errors.type}
                        name="Type"
                        loading={loading}
                />
                <TextInput
                        bind:value={location.name}
                        id="site-location-name"
                        error={errors.name}
                        name="Name"
                        loading={loading}
                />
                <DropDownBox/>
            </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
                    type="submit"
                    disabled={loading}
                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
            >
                Save
            </button>
        </div>
    </div>
</form>
