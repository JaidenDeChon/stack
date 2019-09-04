
<template lang="pug">
	div(class="list-container")

		div(v-if="this.todos.length != 0" class="if-container")

			p(class="hint")
				i(class="fas fa-check")
				| to mark finished.
				i(class="fas fa-times")
				| to remove.

			div(class="cards-container global-width-class")

				div(v-for="(todo, index) in todos" class="list-item")
					div(
						class="card"
						:class="{ done: todo.completedStatus == true }"
					)
						p {{ todo.content }}
						i(@click="remove(index)" class="fas fa-times shadow")
						i(@click="toggle(index)" class="fas fa-check shadow")
						i(class="fas fa-pen shadow")

		div(v-else-if="this.todos.length == 0" class="if-container with-flex")

			div(class="no-cards-container")

				div(class="svg-container")

					img(src="../assets/undraw.svg")

				p Nothing here yet.

</template>

<script>

export default {

  name: 'List',

  methods: {

    remove(index) {
      // Delete the todo at the index (passed by template)
      this.$delete(this.todos, index);
    },

    toggle(index) {
      // Get completion status
      const status = this.todos[index].completedStatus;

      // If true, then make false
      if (status === false) {
        this.todos[index].completedStatus = true;

        // If false, then make true
      } else {
        this.todos[index].completedStatus = false;
      }
    },
  },

  mounted() {},
};
</script>

<style lang="sass">

@import '../assets/css/themes.sass'

.list-container

	// border: solid red
	box-sizing: border-box	

	margin: 0

	padding: 0

	// 100vh - combined heights of Title(80px), newToDo(50px), and Footer(80px)
	min-height: calc(100vh - 170px)
	flex-grow: 1

	.if-container

		height: auto
		width: auto

		margin: 0
		padding: 0

		&.with-flex

			display: flex
			align-items: center
			justify-content: center
			flex-direction: column

			min-height: calc(100vh - 210px)

		.no-cards-container

			width: 85%
			min-height: 100%

			margin: 0 auto

			display: flex
			align-items: center
			justify-content: center
			flex-direction: column

			.svg-container

				width: 250px
				height: 250px

				background-color: $dark-3

				display: flex
				align-items: center
				justify-content: center

				border-radius: 250px
				box-sizing: border-box
				// border: 3px solid #42B983

				img

					width: 75%
					height: 75%

			p

				color: $dark-text-1

		.hint

			color: $dark-text-1
			font-size: 13px
			width: 100%
			text-align: center

			margin: 0
			padding: 40px 0 0 0

			i

				margin: 0 4px

		.cards-container

			margin: 0 auto

			min-height: 100%

			padding: 0

			.card

				padding: 20px 145px 20px 40px
				margin:  20px 0

				color: $dark-text-1
				text-align: left
				font-size: 15px

				background-color: $dark-2
				border-radius: 3px
				user-select: none

				position: relative

				overflow-wrap: break-word
				word-wrap: break-word
				hyphens: auto

				display: flex
				align-items: center
				justify-content: center

				transition: all .15s ease-in-out

				&.hide

					// width: 0
					height: 0
					margin: 0
					padding: 0
					opacity: 0

					.fas

						border: solid red

				&.done

					color: rgba(136, 136, 136, 0.6)
					background-color: $dark-3
					font-style: italic
					text-decoration: line-through

				p

					width: 100%

				.fas

					transition: all .15s ease-in-out
					overflow: none

					width: 30px
					height: 30px
					border-radius: 3px

					margin: 0
					padding: 0

					display: flex
					align-items: center
					justify-content: center

					position: absolute
					bottom: 15px

					cursor: pointer

					background-color: $dark-4

				.fa-pen

					right: 85px

				.fa-times

					right: 50px

				.fa-check

					right: 15px

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
	.list-container
		.cards-container
			.card
				&:hover
					background-color: $dark-2-special-2
					.fas
						background-color: $green
						color: #fff
				&.done
					&:hover
						.fas
							background-color: $dark-4
							color: $dark-text-1
							&:hover
								background-color: $dark-2

				.fas
					&:hover
						background-color: $green-light
						color: #fff

// For strange new 1440p laptops
// @media (min-width: 1440px)

// Full HD laptops & desktops, big tablets
// @media (min-width: 1920px)

// 4K screens
// @media (min-width: 1400px)


</style>
