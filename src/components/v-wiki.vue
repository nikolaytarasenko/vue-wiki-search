<template>
  <div class="container">
    <v-wiki-header></v-wiki-header>
    <v-wiki-searchform></v-wiki-searchform>
    <v-wiki-results></v-wiki-results>
  </div>
</template>

<script>
import vWikiHeader from '@/components/v-wiki-header';
import vWikiSearchform from '@/components/v-wiki-searchform';
import vWikiResults from '@/components/v-wiki-results';

export default {
  components: {
    vWikiHeader,
    vWikiSearchform,
    vWikiResults
  }
}
</script>

<style>
  .container {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
</style>