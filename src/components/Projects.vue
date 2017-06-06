<template>
  <div class="container-fluid">
    <h2 class="h4 my-5 projects-title" id="projects">#Projects</h2>
    <project image="./static/taiko.png" title="Taiko.fi" :tags="['AngularJS','Laravel','Bootstrap','Wordpress','E-Commerce']" direction="left"></project>
    <project image="./static/5aera.png" title="dimnet.5aera.com" :tags="['AngularJS','Laravel','Material','Business Tools']" direction="right"></project>
    <project image="./static/lobby.png" title="Chilean Lobby Law portal" :tags="['AngularJS','Bootstrap','Laravel','Goberment']" direction="left"></project>
    <project image="./static/tracking.png" title="Tacking Simce" :tags="['AngularJS','GWT','Bootstrap','RESTEasy','Hibernate','Logistic Tools']" direction="right"></project>
  </div>
</template>

<script>
  import Project from './Project';

  export default {
    components: { Project },
    name: 'projects',
  };
</script>

<style lang='scss'>
  @import '../assets/main';

  .projects-title{
    color: $green;
  }

</style>
