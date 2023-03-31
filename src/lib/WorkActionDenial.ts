import type WorkResult from "./types/WorkResult";

export let button;
export let results: WorkResult;
export default function workActionDenial() {
  let finalCheck = 
  setTemperature(results);
  setFailsafe(results);

  return finalCheck;
}

function setTemperature(results) {
  results.addEventListener("boolean", () => {
    if (results.temperature === 0) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
}

function setFailsafe(results) {
  results.addEventListener("boolean", () => {
    if (results.value === null) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
}
