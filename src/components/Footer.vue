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

		width: 100%
		height: 10vh

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

</style>
