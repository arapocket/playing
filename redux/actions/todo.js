export default addTodoAction = (text) => {
    const action = {
        type: ADD_TODO,
        text
    }
    dispatch(action)
}