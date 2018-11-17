const badges = () =>
  import(/* webpackChunkName: "badges" */ './badges/badges.component.vue')

const button = () =>
  import(/* webpackChunkName: "button" */ './button/button.component.vue')

const checkbox = () =>
  import(/* webpackChunkName: "checkbox" */ './checkbox/checkbox.component.vue')

const divider = () =>
  import(/* webpackChunkName: "divider" */ './divider/divider.component.vue')

const icon = () =>
  import(/* webpackChunkName: "icon" */ './icon/icon.component.vue')

const image = () =>
  import(/* webpackChunkName: "image" */ './image/image.component.vue')

const irfan = () =>
  import(/* webpackChunkName: "general" */ './irfan/irfan.component.vue')

const loading = () =>
  import(/* webpackChunkName: "loading" */ './loading/loading.component.vue')

const radioButton = () =>
  import(/* webpackChunkName: "radio-button" */ './radio-button/radio-button.component.vue')

const ramlicomp = () =>
  import(/* webpackChunkName: "general-component" */ './ramlicomp/ramlicomp.component.vue')

const textfield = () =>
  import(/* webpackChunkName: "textfield" */ './textfield/textfield.component.vue')

const tooltip = () =>
  import(/* webpackChunkName: "tooltip" */ './tooltip/tooltip.component.vue')

export default [
  {
    component: badges,
    name: 'ui-atomic-badges'
  },
  {
    component: button,
    name: 'ui-atomic-button'
  },
  {
    component: checkbox,
    name: 'ui-atomic-checkbox'
  },
  {
    component: divider,
    name: 'ui-atomic-divider'
  },
  {
    component: icon,
    name: 'ui-atomic-icon'
  },
  {
    component: image,
    name: 'ui-atomic-image'
  },
  {
    component: irfan,
    name: 'ui-atomic-irfan'
  },
  {
    component: loading,
    name: 'ui-atomic-loading'
  },
  {
    component: radioButton,
    name: 'ui-atomic-radio-button'
  },
  {
    component: ramlicomp,
    name: 'ui-atomic-ramlicomp'
  },
  {
    component: textfield,
    name: 'ui-atomic-textfield'
  },
  {
    component: tooltip,
    name: 'ui-atomic-tooltip'
  }
]
