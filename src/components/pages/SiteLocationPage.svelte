<script lang="ts">
  import { Link, navigate } from 'svelte-routing';
  import siteLocationSchema from '../../lib/schemas/SiteLocationSchema';
  import {
    createSiteLocation,
    getSiteLocation,
    updateSiteLocation,
  } from '../../lib/apiServices/SiteLocationApiService';
  import validationErrorHandler from '../../lib/ValidationErrorHandler';
  import { onMount } from 'svelte';
  import TextInput from '../forms/inputs/TextInput.svelte';
  import type Location from '../../lib/types/Location';
  import BreadcrumbFirstLink from '../links/BreadcrumbFirstLink.svelte';
  import PageHeader from '../PageHeader.svelte';
  import SubmitButton from '../buttons/SubmitButton.svelte';
  import VisitHeader from '../layout/headers/VisitHeader.svelte';
  import { getVisitById } from '../../lib/apiServices/VisitApiService';
  import { getJobById } from '../../lib/apiServices/job/JobApiService';
  import { getSiteById } from '../../lib/apiServices/SiteApiService';
  import type Site from '../../lib/types/Site';
  import type Visit from '../../lib/types/Visit';
  import type Job from '../../lib/types/Job';

  export let siteId: number;
  export let jobId: number;
  export let visitId: number;
  export let locationId: number;
  export let locationType: string;

  let site: Site;
  let job: Job;
  let visit: Visit;

  let loading = false;
  let loaded = false;

  let location: Location = {
    area: '',
    floor: '',
    id: 0,
    name: '',
    siteId: 0,
    type: locationType,
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
    errors.name = null;

    siteLocationSchema
      .validate(location, { abortEarly: false })
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
        .then(() => {
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

  onMount(async () => {
    [visit, job, site] = await Promise.all([
      getVisitById(visitId),
      getJobById(jobId),
      getSiteById(siteId),
    ]);

    loaded = true;

    if (siteId && locationId) {
      getSiteLocation(siteId, locationId).then((r: Location) => (location = r));
    }
  });
</script>

<nav aria-label="Breadcrumb" class="mb-2 ">
  <div class="items-start">
    <BreadcrumbFirstLink
      to={`/site/${siteId}/job/${jobId}/visit/${visitId}`}
      text="Visit" />
  </div>
</nav>

{#if loaded}
  <VisitHeader site={site} job={job} />
  <PageHeader text="Add Location" />
  <form on:submit|preventDefault={submit} class="space-y-4 pt-0">
    <TextInput
      bind:value={location.floor}
      id="site-location-floor"
      error={errors.floor}
      name="Floor"
      loading={loading} />
    <TextInput
      bind:value={location.area}
      id="site-location-area"
      error={errors.area}
      name="Area"
      loading={loading} />
    <TextInput
      bind:value={location.name}
      id="site-location-name"
      error={errors.name}
      name="Name"
      loading={loading} />
    <input
      id="site-location-type"
      type="hidden"
      name="type"
      bind:value={location.type} />

    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-zinc-300" />
      </div>
      <div class="relative flex justify-start">
        <span class="bg-white pr-2 text-sm " />
      </div>
    </div>

    <div class="mt-4 flex flex-col gap-2 sm:mt-4 sm:flex sm:flex-row sm:pl-4">
      <Link
        to={`/site/${siteId}/job/${jobId}/visit/${visitId}`}
        class="inline-flex items-center justify-center border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600">
        Back
      </Link>
      <SubmitButton disabled={loading} />
    </div>
  </form>
{/if}
