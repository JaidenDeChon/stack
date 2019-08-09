
export const update = {
	computed: {
		todos: {
			get: function() {
				let todosString = localStorage.getItem("todos");
				let todosObject = JSON.parse(todosString)
				return todosObject
			},
			set: function() {}
		}
	},
}
