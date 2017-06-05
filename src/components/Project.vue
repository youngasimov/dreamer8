<template>
  <div class="row project" :class="direction">
    <div class="col-xs-12 col-md-7 col-lg-6 col-xl-5 project-image">
      <img :src="image" class="img-fluid img-thumbnail">
    </div>
    <div class="col-xs-12 col-md-5 col-lg-6 col-xl-7 project-content">
      <h2>{{ title }}</h2>
      <div>
        <span v-for="tag in tags" class="badge badge-default">{{ tag }}</span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'project',
    props: {
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      direction: {
        type: String,
        default: 'left',
      },
      tags: {
        type: Array,
      },
    },
  };
</script>

<style lang='scss' scoped>

  @import '../assets/main';

  .project {
    //color: $brand-primary;
    padding: 30px;

    //box-shadow: 0 0 10px 1px darken($brand-primary, 30%);
    margin-bottom: 30px;

    .badge {
      background-color: $green;
      margin: 4px;
    }
    &.left {
      border-left: 5px solid darken($green, 10%);
      text-align: left;
      .project-image{
        order: 1;
      }
      .project-content{
        order: 2;
      }
    }
    &.right {
      border-right: 5px solid darken($green, 10%);
      text-align: right;
      .project-image{
        order: 2;
      }
      .project-content{
        order: 1;
      }
    }
  }

</style>
