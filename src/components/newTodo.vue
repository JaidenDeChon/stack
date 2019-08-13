<template lang="pug">

	div(class="new-todo-container")

		div(class="inputs global-width-class")

			input(required v-model="txtInput" v-on:keyup.enter="addToTodos" class="fade" id="input" type="text" placeholder="Enter a new task...")
			button(@click="addToTodos" class="shadow fade")
				i(class="fas fa-plus")

</template>

<script>

	export default {

		name: 'newTodo',

		data: function() {
			return {
				txtInput: ''
			}
		},

		methods: {

			// Add the input content to the [todos] object
			addToTodos: function(e) {

				// Prevent form submit
				e.preventDefault();

				// If the field contains something
				if (this.txtInput != '') {

					// Define content variable to pass to [todos]
					let todoContent = this.txtInput;

					// Push content, completion status (initially false) of todo to [todos] 
					this.todos.push({
						"content" : todoContent, 
						"completedStatus" : false, 
					});

					// Clear the field of any text
					this.txtInput = '';
				};
			}
		}


	}

</script>

<style scoped lang="sass">

	.new-todo-container

		// border: solid red
		// background: rgba(255, 0, 0, 0.3)
		box-sizing: border-box

		margin: 0

		width: 100%

		display: flex
		align-items: center

		height: 50px

		.inputs

			display: flex
			justify-content: space-between

			// border: solid blue

			input, button

				height: 40px
				min-width: 40px

				margin: 0
				padding: 0

				outline: none
				border: none
				border-radius: 20px

				background: #e8e8e8

				color: #888888

			input

				width: calc(85% - 20px)
				padding-left: 20px

				&::placeholder

					color: #888888
					font-size: 15px

				&:focus

					box-shadow: 0 0 20px rgba(0,0,0,0.15), 0 0 20px rgba(0,0,0,0.15)
					background: #42B983
					color: #e8e8e8

					&::placeholder

						color: #e8e8e8

			button

				cursor: pointer

				// box-shadow: 0 0 10px #1e573d

				// Move to desktop
				&:active
					box-shadow: inset 0 0 10px #1e573d
					color: #42B983

	// smartphones, portrait iPhone, portrait 480x320 phones (Android)
	// @media (min-width: 280px)

	// Landscape iPhones
	// @media (min-width: 568px)

	// Portrait iPad
	@media (min-width: 750px)
		.new-todo-container
			.inputs
				input
					width: 90%
				button
					&:hover
						background: #42B983
						color: #e8e8e8

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
