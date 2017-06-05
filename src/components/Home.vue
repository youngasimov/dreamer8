<template>
  <div>
    <div class="header-container">
      <big-header></big-header>
    </div>
    <div class="container-fluid aboutme">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <div class="card card-inverse card-primary text-center mx-auto imageme">
            <img src="../assets/me.jpg" class="card-img-top img-fluid" alt="Responsive image">
            <div class="card-block">
              <h4 class="card-title">Camilo Vera Cortés</h4>
              <p class="card-text">
                Hey! What are you looking around?
              </p>
              <p class="card-text">
                cvera@dreamer8.com
              </p>
              <!--
              <div class="row">
                <div class="col">
                  <b-tooltip content="just watching mate!" placement="bottom">
                    <button class="btn btn-primary">
                      <icon name="eye"></icon>
                    </button>
                  </b-tooltip>
                </div>
                <div class="col">
                  <b-tooltip content="a beer or coffee?" placement="bottom">
                    <button class="btn btn-primary">
                      <icon name="beer"></icon>
                    </button>
                  </b-tooltip>
                </div>
                <div class="col">
                  <b-tooltip content="frame this page in paper?" placement="bottom">
                    <button class="btn btn-primary">
                      <icon name="print"></icon>
                    </button>
                  </b-tooltip>
                </div>
              </div>
              -->
            </div>
          </div>
          <div class="my-5 mx-auto text-center" style="width: 300px">
            <a href="https://www.linkedin.com/in/camiloveracortes/?locale=en_US" target="_blank" class="btn btn-link"
               style="color: dodgerblue">
              <icon name="linkedin-square" scale="2"></icon>
            </a>
            <a href="https://plus.google.com/+CamiloVeraCortes" target="_blank" class="btn btn-link"
               style="color: darkred">
              <icon name="google-plus-square" scale="2"></icon>
            </a>
            <a href="https://github.com/youngasimov" target="_blank" class="btn btn-link" style="color: black">
              <icon name="github" scale="2"></icon>
            </a>
            <a href="https://open.spotify.com/user/12124216741" target="_blank" class="btn btn-link"
               style="color: darkgreen">
              <icon name="spotify" scale="2"></icon>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-md-8">
          <projects></projects>
          <aboutme></aboutme>

        </div>

      </div>
    </div>
  </div>


</template>

<script>
  import BigHeader from './BigHeader';
  import Aboutme from './aboutme';
  import Projects from './Projects';

  export default {
    components: {
      Projects,
      Aboutme,
      BigHeader,
    },
    name: 'home',
  };
</script>

<style lang='scss'>
  @import '../assets/main';
  .header-container {
    height: 50vh;
    width: 100%;
  }

  .aboutme {
    padding-top: 20px;
    padding-bottom: 20px;
    //background: lighten($brand-primary,50%);
    //box-shadow: inset 0 0 25px 1px darken($brand-primary, 30%);

    .imageme {
      box-shadow: 0 0 10px 1px darken($brand-primary, 30%);
      display: block;
      width: 100%;
      max-width: 300px;
      .imagemeaction {
        .visible {
          display: none;
        }
        &:hover {
          .visible {
            display: inline;
          }
        }
      }
    }
  }

</style>
