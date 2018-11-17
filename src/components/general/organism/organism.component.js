const footer = () =>
  import(/* webpackChunkName: "footer" */ './footer/footer.component.vue')

const header = () =>
  import(/* webpackChunkName: "header" */ './header/header.component.vue')

export default [
  {
    component: footer,
    name: 'ui-organism-footer'
  },
  {
    component: header,
    name: 'ui-organism-header'
  }
]
