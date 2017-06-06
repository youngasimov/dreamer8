<template>
  <div>
    <div class="header-container hidden-print">
      <big-header></big-header>
    </div>
    <div class="container-fluid aboutme">
      <div class="row">
        <div class="col-xs-12 col-md-4 side">
          <div class="card card-inverse card-primary text-center mx-auto imageme">
            <img src="../assets/me.jpg" class="card-img-top img-fluid" alt="Responsive image">
            <div class="card-block clearfix">
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
          <div class="my-5 mx-auto text-center hidden-print" style="width: 300px">
            <a href="https://www.linkedin.com/in/camiloveracortes/?locale=en_US" target="_blank" class="btn btn-link"
               style="color: dodgerblue">
              <icon name="linkedin-square" scale="1"></icon>
            </a>
            <a href="https://plus.google.com/+CamiloVeraCortes" target="_blank" class="btn btn-link"
               style="color: darkred">
              <icon name="google-plus-square" scale="1"></icon>
            </a>
            <a href="https://github.com/youngasimov" target="_blank" class="btn btn-link" style="color: black">
              <icon name="github" scale="1"></icon>
            </a>
            <a href="https://open.spotify.com/user/12124216741" target="_blank" class="btn btn-link"
               style="color: darkgreen">
              <icon name="spotify" scale="1"></icon>
            </a>
            <a href="./static/camilo-vera-cortes-resume.pdf" target="_blank" class="btn btn-link" style="color: #b71c1c">
                <icon name="file-pdf-o" scale="1"></icon>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-md-8 content">
          <div class="page-break"></div>

          <projects></projects>
          <div class="page-break"></div>
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
    methods: {
      print() {
        window.print();
      },
    },
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

    .side{
      order:2;
    }
    .content{
      order:1;
      border-bottom: 2px dashed $brand-primary;
    }
    @media screen and (min-width: map-get($grid-breakpoints,'md')) {
      .side{
        order:1;
      }
      .content{
        order:2;
        border-bottom: none;
      }
    }

    .imageme {
      box-shadow: 0 0 10px 1px darken($brand-primary, 30%);
      display: block;
      width: 100%;
      max-width: 300px;
      margin-top: 10px;
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
