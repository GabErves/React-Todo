const TodoList = (props) => {
    //todoList

    if(props.todoList.length === 0) {
        return <p>Awaiting the first item...</p>
    }

    return props.todoList.map(item => {
        console.log(item);
        return <p>{item.title}</p>
    });
}

export default TodoList;