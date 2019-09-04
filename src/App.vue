
<template lang=pug>

  div(id="app" class="dark")

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

@import './assets/css/themes.sass'
@import './assets/css/hamburgers.css'

html, body

  margin: 0
  padding: 0

html
  overflow: hidden
  width: 100%

body

  // For preventing URL bar from closing
  height: 100%
  position: fixed
  overflow-y: scroll
  -webkit-overflow-scrolling: touch
  width: 100%

  // For sticking footer to bottom
  // position: relative
  // padding-bottom: 40px 

  background-color: $dark-4

  &.no-scroll

    overflow: hidden

#app

  font-family: 'Open Sans', 'Chonburi', cursive, sans-serif

  width: 100%

  margin: 0 auto
  padding: 0

  .global-width-class

    width: 85% !important
    max-width: 850px !important
    margin: 0 auto !important

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
    padding-left: 175px !important

// Full HD laptops & desktops, big tablets
@media (min-width: 1920px)
  body
    padding-left: 200px !important

// 4K screens
// @media (min-width: 1400px)

</style>
