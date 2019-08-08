<template lang=pug>

  div(id="app")
    Nav
    Title
    newTodo
    List
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
    },

    mounted: function() {

      // Function for finding types of objects
      function typeOf(obj) {
        return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
      }

      // Create localStorage item if there isn't one already
      if (localStorage.getItem('todos') == null) {
        let newList = []
        let newListStringified = JSON.stringify(newList)
        localStorage.setItem('todos', newListStringified)
      }

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

    *

      box-sizing: border-box

    .fade

      transition: all 0.3s cubic-bezier(.25,.8,.25,1)

    .shadow

      &:hover, &:focus

        box-shadow: 0 0 20px rgba(0,0,0,0.15), 0 0 20px rgba(0,0,0,0.15)

</style>
