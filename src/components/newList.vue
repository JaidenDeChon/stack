
<template lang="pug">

	div(class="new-list-container")

		div(class="inputs-container")

			input(
				class="fade" id="input"
				type="text"
				placeholder="Create a new list"
			)

			button(class="shadow fade")
				i(class="fas fa-plus")

</template>

<script>
	export default {
		name: "newList"
	}
</script>

<style scoped lang="sass">

	@import '../assets/css/themes.sass'

	.new-list-container

		// box-sizing: border-box
		// border: solid red

		margin: 80px 0
		height: 40px

		display: flex
		align-items: center
		justify-content: center

		.inputs-container

			width: 80%
			height: 30px

			// border: solid white

			display: flex
			justify-content: space-between
			align-items: center

			input, button

				height: 40px
				min-width: 40px

				margin: 0
				padding: 0

				outline: none
				border: none
				border-radius: 20px

				background-color: $dark-4

				color: $dark-text-3

			input

				width: calc(85% - 20px)
				padding-left: 20px

				&::placeholder

					color: $dark-text-3
					font-size: 15px

			button

				cursor: pointer

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
		.new-list-container
			.inputs-container
				button
					&:hover
						background-color: $green
						color: #ffffff

	// For strange new 1440p laptops
	// @media (min-width: 1440px)

	// Full HD laptops & desktops, big tablets
	// @media (min-width: 1920px)

	// 4K screens
	// @media (min-width: 1400px)

</style>
