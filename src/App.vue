<template>
  <scroll-between-container id="app">
    <scroll-between :max="350" transition="slide">
    <b-navbar fixed="top" type="inverse" toggleable toggle-breakpoint="sm" class="hidden-print">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item href="#projects" target="_self">Projects</b-nav-item>
          <b-nav-item href="#experiences" target="_self">Experience</b-nav-item>
          <b-nav-item href="#education" target="_self">Education</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
    </scroll-between>
    <scroll-between :min="350" transition="slide">
      <b-navbar fixed="top" variant="primary" toggleable toggle-breakpoint="sm" class="hidden-print">
        <b-nav-toggle target="nav_collapse"></b-nav-toggle>
        <b-link class="navbar-brand" to="#">
          <img src="./assets/logo.svg" class=" navbar-brand logo">
        </b-link>
        <b-collapse is-nav id="nav_collapse">
          <b-nav is-nav-bar class="ml-auto">
            <b-nav-item href="#projects" target="_self">Projects</b-nav-item>
            <b-nav-item href="#experiences" target="_self">Experience</b-nav-item>
            <b-nav-item href="#education" target="_self">Education</b-nav-item>
          </b-nav>
        </b-collapse>
      </b-navbar>
    </scroll-between>
    <router-view></router-view>
    <div class="container-fluid contact">

    </div>
  </scroll-between-container>
</template>

<script>
  /* eslint-disable spaced-comment */

  export default {
    name: 'app',
  };
</script>

<style lang="scss">
  @import "assets/main";
  .logo {
    height: 45px;
    width: auto;
  }
  .navbar{
    height: 60px;
  }
</style>
