
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
		mounted: function () {

			let cardCloseButton = $('.fa-times')
			let cardToggleButton = $('.fa-check')

			// When close button is checked
				
				// Define this card's index

				// get localStorage
				// convert todo to object

				// for item in todos

					// if item index == cards index

						// delete this item

				// convert object back into string
				// set localStorage

				// rerun fillList()

			// ___________________________________________________________________

			// When toggle button is checked

				// Define this card's index

				// get todo from localStorage
				// convert todo to object

				// for item in todos

					// if item index == cards index

						// if item[1] == "active"

							// item[1] == "inactive"

						// if item[1] == "inactive"

							// item[1] == "active"

				// convert object back into string
				// set localStorage

				// rerun fillList()

			// Populate cards-container with entries from LocalStorage
			function fillList() {

				// Find and remove all current cards
				$(".list-item").remove();

				// Define parent for housing cards
				let cardsParent = $(".cards-container")

				// Get todo contents form localStorage, convert to object
				let todos = localStorage.getItem("todos")
				let todosObject = JSON.parse(todos)

				// Define function for creating cards
				function makeCards (content, status, toDoIndex) {

					// Define card attributes
					let cardContent = content 
					let cardStatus = status

					// Create li to house card, append to parent
					let li = document.createElement("li")
					li.classList.add("list-item")
					cardsParent.append(li)

					// Create card element
					let card = document.createElement("div")
					card.classList.add("card", "fade", "shadow")
					if (status != "active") {            // if status variable is not 'active', 
						card.classList.add("done")       // apply class "done" to card to change styling
					}
					li.append(card)

					// Create p element for content, append to card
					let p = document.createElement("p")
					let pContent = document.createTextNode(content)
					p.appendChild(pContent)
					card.append(p)

					// Create and append card's close-button
					let times = document.createElement("i")
					times.classList.add("fas", "fa-times", "fade", "shadow")
					card.append(times)

					// Create and append card's check-button
					let check = document.createElement("i")
					check.classList.add("fas", "fa-check", "fade", "shadow")
					card.append(check)

					// Set index so that "status" (active/inactive) variable can be changed
					// ... and saved so it persists between page reloads
					card.setAttribute('data-index', toDoIndex)

				}

				if (todos) {

					// // For todo in todos...
					for (var index = 0; index < todosObject.length; index++) {

						console.log(index)

						// Create variable out of todo
						let entry = todosObject[index]

						let content = entry[0]
						let status = entry[1]
						let toDoIndex = index

						makeCards(content, status, toDoIndex)

					}

				}

			}
			fillList()

		}
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

			padding: 20px 80px 20px 40px
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
