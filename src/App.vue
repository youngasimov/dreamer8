<template>
  <div id="app">
    <b-navbar fixed="top" toggleable toggle-breakpoint="sm">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <scroll-spy :min="250">
        <b-link class="navbar-brand" to="#">
          <img src="./assets/logo.svg" class=" navbar-brand logo">
        </b-link>
      </scroll-spy>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item>Support</b-nav-item>
          <b-nav-item>Docs</b-nav-item>
          <b-nav-item>Contact Us</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  /* eslint-disable spaced-comment */

  import { ScrollSpyContainer, ScrollSpy } from './components/scrollspy/ScrollSpyModule';

  export default {
    components: { ScrollSpy },
    mixins: [ScrollSpyContainer],
    name: 'app',
  };
</script>

<style lang="scss">
  @import "assets/main";

  .logo {
    height: 50px;
    width: auto;
  }
</style>
