<template lang="pug">

	div(class="footer-container")

		div(class="footer")

			div(class="copyright-container")

				p(class="copyright") &copy; Jaiden DeChon 2019

			div(class="links-container")

				a(href="https://codepen.io/JaidenDeChon/")
					i(class="fab fa-codepen")
				a(href="https://www.linkedin.com/in/jaiden-dechon/")
					i(class="fab fa-linkedin")
				a(href="https://github.com/JaidenDeChon")
					i(class="fab fa-github")


</template>

<script></script>

<style lang="sass">

.footer-container

	position: absolute
	bottom: 0
	left: 0
	right: 0

	width: 100%
	height: 80px

	margin: 0

	background-color: #42B983

	.footer

		display: flex

		width: 85%
		height: 100%
		margin: 0 auto

		.copyright-container, .links-container

			width: 50%
			height: 100%

			display: flex
			align-items: center
			flex-direction: row

			margin: 0

			color: #e8e8e8

			p, a

				margin: 0

		.copyright-container

		.links-container

			text-align: right
			font-size: 18px

			justify-content: flex-end

			a

				text-decoration: none
				color: #e8e8e8

				margin: 0 10px

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
@media (min-width: 1440px)
	.footer-container
		left: 350px
		width: calc(100% - 350px)

// Full HD laptops & desktops, big tablets
@media (min-width: 1920px)
	.footer-container
		left: 400px
		width: calc(100% - 400px)

// 4K screens
// @media (min-width: 1400px)

</style>
