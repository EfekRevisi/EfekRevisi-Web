<template>
  <div class="ramli-component">
    <h1 class="ramli-component__title">
      {{ title }}
    </h1>
    <p class="ramli-component__subtitle">
      {{ subTitle }}
    </p>
    <span>{{ rating }}</span>
  </div>
</template>

<style lang="scss">
@import 'style.scss';
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      default: 'This is subtitle'
    },
    rating: {
      type: Number,
      default: 0
    }
  }
}
</script>
