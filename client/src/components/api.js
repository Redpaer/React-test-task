export const getTodo = (id) => fetch(`http://localhost:5000/${id}`).then(res => res.json())

export const updateTodo = (todo, id) => fetch(`http://localhost:5000/${id}`, {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(todo)
})