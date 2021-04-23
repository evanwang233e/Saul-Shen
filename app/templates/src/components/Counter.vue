<style lang="css">
  .btn {
    width: 30px;
    height: 20px;
    background-color: gray;
    margin: 5px;
    border-radius: 3px;
  }
</style>

<template>
  <div>
    <div>{{count}}</div>
    <div>
      <button class='btn' @click='increaseCount'> +1 </button>
      <button class='btn' @click='decreaseCount'> -1 </button>
    </div>
  </div>
</template>

<script>
  export default{
    props: {
      count: Number,
      increaseCount: Function,
      decreaseCount: Function
    }
  };
</script>
