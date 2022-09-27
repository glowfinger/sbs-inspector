const PROTOCOL = 'http'
const DOMAIN = 'localhost:3000'



function get() {
  return fetch(`${PROTOCOL}://${DOMAIN}/sites`)
}

export {
  get
}


