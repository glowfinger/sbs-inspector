const PROTOCOL = 'https'
const DOMAIN = 'sbs-bkdyn.ondigitalocean.app'

function get() {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site`)
}

function getMySites() {
  return fetch(`${PROTOCOL}://${DOMAIN}/api/site`)
    .then((x) => x.json())
}

export {
  get,
  getMySites
}


