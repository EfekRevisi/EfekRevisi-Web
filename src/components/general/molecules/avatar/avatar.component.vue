<template>
  <div class="ef-avatar flex">
    <img
      :src="image"
      class="ef-avatar__image"
    >
    <div class="ef-avatar__desc">
      <p class="regular">{{ name }}</p>
      <span class="light">{{ date }}</span>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/style/scss/import.scss';
@import 'style.scss';
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1533264515790-38b563064b68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=facc40ae77227d7fa3f29653eddaab8e&auto=format&fit=crop&w=1558&q=80'
    }
  }
}
</script>
