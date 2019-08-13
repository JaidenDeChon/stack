<!-- To Do -->
<!-- Auto-refresh cards list every time new entry is added -->
<!-- (scaffolded) Add support for done/not-done indication on cards, stored with to-do entry in localStorage -->
<!-- (scaffolded) Add support for removing to-do items -->

<template lang=pug>

  div(id="app")

    Nav
    Title
    newTodo
    List()
    Footer

</template>

<script>

  global.jQuery = require('jquery')
  var $ = global.jQuery
  window.$ = $

  import Nav from './components/Nav.vue';
  import Title from './components/Title.vue';
  import newTodo from './components/newTodo.vue';
  import List from './components/List.vue';
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',

    components: {
      Nav,
      Title,
      newTodo,
      List,
      Footer
    }

  };

</script>

<style lang="sass">

  html, body

    margin: 0
    padding: 0

  #app

    font-family: 'Open Sans', 'Chonburi', cursive, sans-serif

    // position: relative

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

    .shadow

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
        // &:focus
        //   box-shadow: 0 0 20px rgba(0,0,0,0.25), 0 0 20px rgba(0,0,0,0.25)

  // For strange new 1440p laptops
  // @media (min-width: 1440px)

  // Full HD laptops & desktops, big tablets
  // @media (min-width: 1920px)

  // 4K screens
  // @media (min-width: 1400px)

</style>
