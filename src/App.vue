
<template lang=pug>

  div(id="app")

    Navbar

    router-view

    Title
    newTodo
    List
    Footer

</template>

<script>

import Navbar from './components/navBar.vue';
import Title from './components/title.vue';
import newTodo from './components/newTodo.vue';
import List from './components/list.vue';
import Footer from './components/footer.vue';

global.jQuery = require('jquery');

const $ = global.jQuery;
window.$ = $;

export default {
  name: 'app',

  components: {
    Navbar,
    Title,
    newTodo,
    List,
    Footer
  },

};

</script>

<style lang="sass">

@import './assets/css/hamburgers.css'

html, body

  margin: 0
  padding: 0

body
  // height: 200vh
  position: relative
  padding-bottom: 80px

#app

  font-family: 'Open Sans', 'Chonburi', cursive, sans-serif

  width: 100%

  margin: 0 auto
  padding: 0

  .global-width-class

    width: 85%
    max-width: 850px
    margin: 0 auto

  *

    box-sizing: border-box

  .fade

    transition: all 0.15s cubic-bezier(.25,.8,.25,1)

// smartphones, portrait iPhone, portrait 480x320 phones (Android)
// @media (min-width: 280px)

// Landscape iPhones
// @media (min-width: 568px)

// Portrait iPad
// @media (min-width: 750px)

// Landscape standard tablets, lo-res laptops and desktops
// @media (min-width: 801px)

  // For laptops and desktops, and landscape big tablets
  @media (min-width: 1000px)
    #app
      .shadow
        &:hover
          box-shadow: 0 0 20px rgba(0,0,0,0.25), 0 0 20px rgba(0,0,0,0.25)

// For strange new 1440p laptops
@media (min-width: 1440px)
  body
    padding-left: 350px !important
    max-width: calc(100vw-350px) !important
    min-width: calc(100vw-350px) !important

// Full HD laptops & desktops, big tablets
@media (min-width: 1920px)
  body
    padding-left: 400px !important
    max-width: calc(100vw-400px) !important
    min-width: calc(100vw-400px) !important

// 4K screens
// @media (min-width: 1400px)

</style>
