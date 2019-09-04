
<template lang="pug">

	div(class="nav-container")

		button(class="hamburger hamburger--arrow bg-accent" type="button")
			span(class="hamburger-box")
			span(class="hamburger-inner")

		nav

			newList

			router-link(class="menu-entry" to="/") Home

			router-link(to="/" class="menu-entry") Cleaning
				span(class="buttons")
					i(class="fas fa-times shadow")

			router-link(to="/" class="is-active menu-entry") Car Maintenance
				span(class="buttons")
					i(class="fas fa-times shadow")

			router-link(to="/" class="menu-entry") Steps to learning to roller blade
				span(class="buttons")
					i(class="fas fa-times shadow")

</template>

<script>

	import Footer from '@/components/footer.vue';
	import newList from '@/components/newList.vue'

	export default {

		name: 'Navbar',

		components: {
			newList
		},

		mounted () {

			// Import jquery, lodash

				global.jQuery = require('jquery')
				var $ = global.jQuery
				window.$ = $

				global.lodash = require('lodash')
				var _ = global.lodash
				window._ = _

			// Handle viewport resizing menu on mobile

			  	// Get viewport height and multiply by 1% to get value for a vh unit
				let vh = window.innerHeight * 0.01;

				// Set the custom CSS height property (--vh) to the document root
				document.documentElement.style.setProperty('--vh', `${vh}px`);

				// Add an event listener to do the above things again on resize
				// Debounce prevents it from happening during resize. Waits X amount of ms after resize to fire (in this case, 250)
				window.addEventListener('resize', _.debounce(function() {
					let vh = window.innerHeight * 0.01;
					document.documentElement.style.setProperty('--vh', `${vh}px`)
				}, 250))

			// Handle menu entity clicks

				// Define variables to be used when menu things are clicked
				let hamburger = $('.hamburger')
				let menu = $('.nav-container')
				let entry = $('.menu-entry')
				let body = $('body')

				// Function for enabling / disabling page scrolling
				function handlecrolling() {
					if ( hamburger.hasClass('is-active') ) {
					body.addClass('no-scroll')
					} else {
					body.removeClass('no-scroll')
					}
				}

				// When hamburger is clicked
				hamburger.click(function () {

					// If hamburger is already active (if menu is open)
					if ($(this).hasClass('is-active')) {

						// Slide menu away, remove is-active class, handle scrolling
						menu.animate({ left: '-100vw' }, 250)
						$(this).removeClass('is-active')
						handlecrolling()

					// Else, if hamburger is not active
					} else {

						// Slide menu into view, add is-active class, handle scrolling
						menu.animate({ left: '0' }, 250)
						$(this).addClass('is-active')
						handlecrolling()
					}
				})

			// To be uncommented when I decide how to not close the menu upon close-button being clicked
			// Close menu upon click
			// entry.click(function () {
			// 	menu.animate({ left: '-100vw' }, 250)
			// 	hamburger.removeClass('is-active')
			// 	handlecrolling()
			// })

		}

	};

</script>

<style lang="sass">

	@import '../assets/css/themes.sass'

	.nav-container

		box-sizing: border-box

		// Position to left of screen
		position: fixed
		top: 0
		bottom: 0
		left: -100vw
		z-index: 100

		// Height is set to 100vh for browsers that don't support custom properties
		// Also for desktop browsers
		height: 100vh
		height: calc(var(--vh, 1vh) * 100)
		width: 100vw

		background-color: $dark-2

		.hamburger

			position: fixed
			top: 23px
			left: 7.5vw
			z-index: 9999999999999999999999999999999

			padding: 0

			outline: none

			mix-blend-mode: luminosity

			transition: all .15s ease-in-out

			.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after

				background-color: #42B983

			&.after-scroll

				background-color: #42B983 !important
				border-radius: 20px

				box-shadow: 0 0 20px rgba(0,0,0,0.15), 0 0 20px rgba(0,0,0,0.15)

				.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after

					background-color: #ffffff

			&.is-active
				background-color: rgba(0,0,0,0) !important
				border-radius: none
				box-shadow: none

				.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after
					background-color: #42B983

		nav

			// border: 1px solid green
			box-sizing: border-box

			margin-top: 80px

			display: flex
			flex-direction: column

			min-height: calc(100% - 160px)

			.menu-entry

				background-color: $dark-2

				color: $dark-text-1
				text-decoration: none
				font-size: 17px
				// font-weight: bold

				min-height: 60px

				padding: 25px

				display: flex
				align-items: center
				justify-content: space-between

				strong

					margin-right: 10px

				i

					margin-left: 25px

					width: 30px
					height: 30px

					border-radius: 3px

					display: flex
					align-items: center
					justify-content: center

					background-color: $dark-4

				&.is-active

					background-color: $dark-2-special-1
					color: $green

					i

						background-color: $dark-2
						color: $dark-text-1

	// smartphones, portrait iPhone, portrait 480x320 phones (Android)
	// @media (min-width: 280px)

	// Landscape iPhones
	// @media (min-width: 568px)

	// Portrait iPad
	@media (min-width: 750px)
		.nav-container
			min-width: 400px
			max-width: 400px
			overflow: hidden
			.menu-entry
				&:hover
					background-color: $dark-2-special-2
				&.is-active
					&:hover

	// Landscape standard tablets, lo-res laptops and desktops
	@media (min-width: 801px)
		.nav-container
			min-width: 350px
			max-width: 350px

	// For laptops and desktops, and landscape big tablets
	// @media (min-width: 1000px)

	// For strange new 1440p laptops
	@media (min-width: 1440px)
		.hamburger
			display: none !important
		.nav-container
			right: auto
			left: 0 !important
			nav
				margin-top: 0
				.menu-entry
					transition: all .15s ease-in-out
					span
						i
							transition: all .15s ease-in-out
					&:hover
						span
							i
								background-color: $green
								color: #fff
								&:hover
									background-color: $green-light

	// Full HD laptops & desktops, big tablets
	@media (min-width: 1920px)
		.nav-container
			min-width: 400px
			max-width: 400px

	// 4K screens
	// @media (min-width: 1400px)

</style>
