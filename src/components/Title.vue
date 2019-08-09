<template lang="pug">

	div(class="title-container")

		div(class="title-flex")

			h1 Stack

</template>

<script>

export default {
  name: 'Title'
}

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

				height: 10vh
				width: 100%

				margin: 0
				padding: 0

</style>
