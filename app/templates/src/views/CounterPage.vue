<style lang="css" src="../style/counterpage.css"></style>

<template lang="html">
  <div>
    <Counter :count='count' :increase-count='increaseCount' :decrease-count='decreaseCount'></Counter>
	</div>
</template>

<script>
  import Counter from '../components/Counter.vue';
  import { mapGetters } from 'vuex';  //use to get data from store

  export default {
    components: {
      Counter
    },
    computed: {
      ...mapGetters([
        'count'
      ])
    },
    methods: {
      increaseCount () {
        this.$store.dispatch('increaseCount');  //dispatch the name of the action function name
      },
      decreaseCount () {
        this.$store.dispatch('decreaseCount');
      }
    }
  };
</script>
