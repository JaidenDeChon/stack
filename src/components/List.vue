
<template lang="pug">
	div(class="list-container")

		p(class="hint") 
			i(class="fas fa-check") 
			| to mark finished.  
			i(class="fas fa-times") 
			| to remove. 

		ul(class="cards-container")

			li(v-for="(todo, index) in todos" class="list-item")
				div(
					class="card shadow" 
					:class="{ done: todo.completedStatus == true }"
				)
					p {{ todo.content }}
					i(@click="remove(index)" class="fas fa-times shadow")
					i(@click="toggle(index)" class="fas fa-check shadow")

</template>

<script>

	export default {

		name: 'List',

		methods: {

			remove: function(index) {
				
				// Delete the todo at the index (passed by template)
				this.$delete(this.todos, index)
			},

			toggle: function(index) {

				// Get completion status
				let status = this.todos[index].completedStatus

				// If true, then false. If false, then true
				if (status === false) {
					this.todos[index].completedStatus = true
				} else {
					this.todos[index].completedStatus = false
				}

			},

			// remove: function(theElementClicked) {
			// 	let thisElement = theElementClicked.target.parentNode
			// 	let thisCardsContent = theElementClicked.target.parentElement.children[0].innerHTML
			// 	for (let todo in this.todos) {
			// 		let currentTodo = this.todos[todo]
			// 		if (thisCardsContent == currentTodo[0]) {
			// 			this.todos.splice(currentTodo[0], 1)
			// 		}
			// 	}
			// },

			// toggle: function(theElementClicked) {
			// 	let thisElement = theElementClicked.target.parentNode
			// 	let thisCardsContent = theElementClicked.target.parentElement.children[0].innerHTML
			// 	for (let i in this.todos) {
					// let currentTodo = this.todos[i]
					// if (thisCardsContent == currentTodo[0]) {
					// 	let newStatus = "inactive"
					// 	currentTodo[1] = newStatus
					// 	let newTodo = currentTodo
					// 	this.todos[i] = newTodo
					// }
			// }

			// 	let newtodolist = this.todos
			// 	this.todos = ''
			// 	this.todos = newtodolist
			// }
		},

		mounted: function () {}
	}
</script>

<style lang="sass">

	.list-container

		// border: solid orange
		box-sizing: border-box

		margin: 0

		padding: 0

		// 100vh - combined heights of Title(80px), newToDo(50px), and Footer(80px)
		min-height: calc(100vh - 210px)

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

			i

				margin: 0 4px

		.card

			padding: 20px 80px 20px 40px
			margin:  20px 0

			color: #e8e8e8
			text-align: left
			font-size: 15px

			background-color: #42B983
			border-radius: 20px
			user-select: none

			position: relative

			overflow-wrap: break-word
			word-wrap: break-word
			hyphens: auto

			display: flex
			align-items: center
			justify-content: center

			transition: all .3s ease-in-out

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

			.fas

				transition: all .3s ease-in-out
				overflow: none

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
