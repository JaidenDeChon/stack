<template lang="pug">

	div(class="new-todo-container")

		div(class="inputs")

			input(v-model="newToDo" v-on:keyup.enter="appendToStorage(newToDo)" class="fade" id="input" type="text" placeholder="Enter a new task...")
			button(@click="appendToStorage(newToDo)" class="shadow fade")
				i(class="fas fa-plus")

</template>

<script>

	export default {

		name: 'newTodo',

		data: function() {
			return {
				newToDo: ''
			}
		},

		methods: {
			appendToStorage(newEntry) {

				let todos = localStorage.getItem("todos");
				let todosObject = JSON.parse(todos);

				todosObject.push([newEntry, "active"])

				let newList = JSON.stringify(todosObject)
				localStorage.setItem("todos", newList)
			}

		},

		mounted: function() {

			let field = $('input.fade')
			let submitButton = $('button.shadow')

			// Define function to clear input field
			function clearField() {
				document.getElementById('input').value = ''
			}

			// Call clearField function on submit click
			submitButton.click(function() {
				clearField()
			})

			// call clearField function on enter-press inside input
			document.getElementById('input').onkeypress = function(e){
				if (!e) e = window.event;
				if (e.keyCode == '13'){
					clearField()
				return false;
				}
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

		height: 5vh

		.inputs

			width: 85%
			margin: 0 auto

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

				// Move to desktop
				&:hover

					background: #42B983
					color: #e8e8e8

</style>
