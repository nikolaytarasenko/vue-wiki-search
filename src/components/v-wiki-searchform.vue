<template>
  <form @submit.prevent="fetchQuery">
    <input type="text" v-model="query">
    <input type="submit" value="search">
  </form>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    fetchQuery() {
      this.$store.dispatch('FETCH_SEARCH_DATA', this.query);
    }
  }
}
</script>

<style>

</style>