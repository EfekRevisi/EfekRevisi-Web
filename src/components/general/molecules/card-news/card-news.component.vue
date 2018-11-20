<template>
  <div
    class="ef-card-news"
  >
    <ui-image
      class="ef-card-news__image"
      height="200px"
      width="100%"
      src="https://images.unsplash.com/photo-1494498902093-87f291949d17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc45a906096bd3d1a8ff018e75d4f43a&auto=format&fit=crop&w=1500&q=80"
      placeholder="https://images.unsplash.com/photo-1494498902093-87f291949d17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc45a906096bd3d1a8ff018e75d4f43a&auto=format&fit=crop&w=500&q=60"
    />
    <div class="ef-card-news__container">
      <h3>{{ title }}</h3>
      <div class="ef-card-news__action flex">
        <ui-avatar
          :date="date"
          :name="name"
        />
        <div class="ef-card-news__button-fav">
          <ui-icon
            type="material-icons"
          >
            favorite_border
          </ui-icon>
        </div>
      </div>
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
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>
