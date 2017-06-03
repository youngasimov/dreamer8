<template>
  <div>
    <div class="header-container">
      <big-header></big-header>
    </div>
    <div style="width: 100%; height: 5000px">.</div>
  </div>


</template>

<script>
  import BigHeader from './BigHeader';

  export default {
    components: { BigHeader },
    name: 'home',
  };
</script>

<style lang='scss'>

  .header-container {
    height: 95vh;
    width: 100%;
  }

</style>
