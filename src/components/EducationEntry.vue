<template>
  <div class="experience" :class="direction">
    <h2>{{ title }}
      <small>{{ company }}</small>
    </h2>
    <p>{{ initDate }} to {{ endDate }}</p>
    <div>
      <span v-for="tag in tags" class="badge">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'education-entry',
    props: {
      direction: {
        type: String,
        default: 'left',
      },
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      initDate: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
        required: true,
      },
      tags: {
        type: Array,
      },
    },
  };
</script>

<style lang='scss' scoped>
  @import '../assets/main';

  .experience {
    //color: $brand-primary;
    padding: 30px;

    //box-shadow: 0 0 10px 1px darken($brand-primary, 30%);
    margin-bottom: 30px;

    .badge {
      background-color: $purple;
      margin: 4px;
    }
    &.left {
      border-left: 5px solid darken($purple, 10%);
      text-align: left;
    }
    &.right {
      border-right: 5px solid darken($purple, 10%);
      text-align: right;
    }
  }
</style>
