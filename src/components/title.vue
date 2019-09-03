<template lang="pug">

	div(class="title-container")

		div(class="title-flex global-width-class")

			h1 Stackr

</template>

<script>

export default {
  name: 'Title',
};

</script>

<style scoped lang="sass">

.title-container

	// border: solid blue
	box-sizing: border-box

	width: 100%
	height: 80px
	min-height: 80px
	max-height: 80px

	.title-flex

		width: 85%
		height: 100%

		margin: 0 auto
		padding: 0

		h1

			color: #42B983
			font-family: 'Chonburi'
			text-align: right
			line-height: 80px

			position: absolute
			top: 0
			right: 7.5vw
			z-index: 101

			height: 10vh
			// width: 100%

			margin: 0
			padding: 0

			z-index: 101

			mix-blend-mode: luminosity

// smartphones, portrait iPhone, portrait 480x320 phones (Android)
// @media (min-width: 280px)

// Landscape iPhones
// @media (min-width: 568px)

// Portrait iPad
// @media (min-width: 750px)

// Landscape standard tablets, lo-res laptops and desktops
// @media (min-width: 801px)

// For laptops and desktops, and landscape big tablets
// @media (min-width: 1000px)

// For strange new 1440p laptops
// @media (min-width: 1440px)

// Full HD laptops & desktops, big tablets
// @media (min-width: 1920px)

// 4K screens
// @media (min-width: 1400px)

</style>
