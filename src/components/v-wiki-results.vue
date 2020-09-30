<template>
  <div class="results">
    <p>results:</p>
      <div v-if="getCurrentResultsLength" class="results-container">
        <div
          v-for="item in getCurrentResults" 
          :key="item.id"
          class="result-row"
        >
          <p>
            <a :href="'http://en.wikipedia.org/wiki/' + item.title">{{ item.title }}</a>
          </p>
          <p v-html="item.snippet"></p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    computed: {
        getCurrentResults() {
            if (this.getCurrentResultsLength) {
              console.log(this.$store.getters.GET_RESULTS);
                return this.$store.getters.GET_RESULTS;
            } else {
                return 'nothing yet'
            }
        },
        getCurrentResultsLength() {
          return this.$store.getters.GET_RESULTS.length;
        }
    }
}
</script>

<style>
  .result-row {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #cccccc;
  }
</style>