const nameReg = /([a-z0-9]+)\./i
const demos = require.context('./views/', true, /[a-z0-9]+\.(jsx?|vue)$/i)

export default demos.keys().map(key => {
  const name = key.match(nameReg)[1]
  return {
    path: `${name.toLowerCase()}`,
    name: `${name.toLowerCase()}`,
    component: demos(key).default,
    meta: {
      label: name,
    },
  }
})
