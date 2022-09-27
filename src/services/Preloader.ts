import {get} from "./SiteApiService";
import {loaded, loading, sites} from "../Store";

function preloader() {

  loading.update(array => [...array, 'SITES']);

  return () => {
    get()
      .then((response) => response.json())
      .then((data) => {
        sites.set(data);
        loading.update(array => array.filter((i) => i !== 'SITES'))
        loaded.set(true)
      })
      .catch()
  }
}

export {
  preloader
}
