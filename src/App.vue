<template>
  <div id="app">
    <v-wiki></v-wiki>
  </div>
</template>

<script>
import vWiki from './components/v-wiki';

export default {
  name: 'App',
  components: {
    vWiki
  },
  data() {
    return {
      title: 'vue start'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 40px;
  width: 100%;
}
</style>
