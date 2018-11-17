const accordion = () =>
  import(/* webpackChunkName: "accordion" */ './accordion/accordion.component.vue')

const alert = () =>
  import(/* webpackChunkName: "alert" */ './alert/alert.component.vue')

const avatar = () =>
  import(/* webpackChunkName: "avatar" */ './avatar/avatar.component.vue')

const blurImages = () =>
  import(/* webpackChunkName: "blur-images" */ './blur-images/blur-images.component.vue')

const breadcrumbs = () =>
  import(/* webpackChunkName: "breadcrumbs" */ './breadcrumbs/breadcrumbs.component.vue')

const card = () =>
  import(/* webpackChunkName: "card" */ './card/card.component.vue')

const carousels = () =>
  import(/* webpackChunkName: "carousels" */ './carousels/carousels.component.vue')

const combobox = () =>
  import(/* webpackChunkName: "combobox" */ './combobox/combobox.component.vue')

const datePicker = () =>
  import(/* webpackChunkName: "date-picker" */ './date-picker/date-picker.component.vue')

const dialog = () =>
  import(/* webpackChunkName: "dialog" */ './dialog/dialog.component.vue')

const dropdown = () =>
  import(/* webpackChunkName: "dropdown" */ './dropdown/dropdown.component.vue')

const snackbars = () =>
  import(/* webpackChunkName: "snackbars" */ './snackbars/snackbars.component.vue')

const tab = () =>
  import(/* webpackChunkName: "tab" */ './tab/tab.component.vue')

const table = () =>
  import(/* webpackChunkName: "table" */ './table/table.component.vue')

const toast = () =>
  import(/* webpackChunkName: "toast" */ './toast/toast.component.vue')

export default [
  {
    component: accordion,
    name: 'ui-molecules-accordion'
  },
  {
    component: alert,
    name: 'ui-molecules-alert'
  },
  {
    component: avatar,
    name: 'ui-molecules-avatar'
  },
  {
    component: blurImages,
    name: 'ui-molecules-blur-images'
  },
  {
    component: breadcrumbs,
    name: 'ui-molecules-breadcrumbs'
  },
  {
    component: card,
    name: 'ui-molecules-card'
  },
  {
    component: carousels,
    name: 'ui-molecules-carousels'
  },
  {
    component: combobox,
    name: 'ui-molecules-combobox'
  },
  {
    component: datePicker,
    name: 'ui-molecules-datepicker'
  },
  {
    component: dialog,
    name: 'ui-molecules-dialog'
  },
  {
    component: dropdown,
    name: 'ui-molecules-dropdown'
  },
  {
    component: snackbars,
    name: 'ui-molecules-snackbars'
  },
  {
    component: tab,
    name: 'ui-molecules-tab'
  },
  {
    component: table,
    name: 'ui-molecules-table'
  },
  {
    component: toast,
    name: 'ui-molecules-toast'
  }
]
