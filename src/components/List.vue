
<template lang="pug">
	div(class="list-container")

		p(class="hint") Double-tap to activate. Swipe to remove. 

		ul(class="cards-container")

			li(class="list-item")
				div(class="card fade shadow")
					p This is an item on the to-do list. 
					i(class="fas fa-times fade shadow")
					i(class="fas fa-check fade shadow")

			li(class="list-item")
				div(class="card fade shadow")
					p This is another item, but it's a little longer. The text should just wrap around and stretch the card. 
					i(class="fas fa-times fade shadow")
					i(class="fas fa-check fade shadow")

			li(class="list-item")
				div(class="card fade shadow done")
					p This task is finished, which is why it looks like this. 
					i(class="fas fa-times fade shadow")
					i(class="fas fa-check fade shadow")

			li(class="list-item")
				div(class="card fade shadow")
					p Here's another task that still has yet to be done. Maybe it'll get done soon?
					i(class="fas fa-times fade shadow")
					i(class="fas fa-check fade shadow")

</template>

<script>

	export default {
		name: 'List',
		mounted () {}
	}
</script>

<style lang="sass">

	.list-container

		// border: solid #fff
		box-sizing: border-box

		margin: 0

		padding: 0

		min-height: 75vh

		.cards-container

			width: 85%

			margin: 0 auto

			list-style-type: none
			list-style: none
			padding: 0

		.hint

			color: #888888
			font-size: 13px
			width: 100%
			text-align: center

			margin: 0
			padding: 40px 0 0 0

		.card

			padding: 20px 60px 20px 40px
			margin:  20px 0

			color: #e8e8e8
			text-align: left

			background-color: #42B983
			border-radius: 20px
			user-select: none

			position: relative

			display: flex
			align-items: center
			justify-content: center

			&.done

				color: rgba(136, 136, 136, 0.6)
				background-color: #e8e8e8
				font-style: italic
				text-decoration: line-through

				.fa-times, .fa-check

					&:hover

						background-color: #888888
						color: #e8e8e8

				&:hover

					box-shadow: none !important		

			p

				width: 100%

			.fa-times, .fa-check

				width: 30px
				height: 30px
				border-radius: 15px

				margin: 0
				padding: 0

				// text-align: center
				// line-height: 30px

				display: flex
				align-items: center
				justify-content: center

				position: absolute
				bottom: 15px

				cursor: pointer

				&:hover

					background-color: #e8e8e8
					color: #888888

			.fa-times

				right: 50px

			.fa-check

				right: 15px


</style>
