import React from "react"
import TodoItemData from "./TodoItemData"
import TodoItem from "./TodoItem"

class TodoApp extends React.Component {
    constructor(){
        super()
        this.state={
            todos: TodoItemData
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id){
        this.setState(previousState =>{
            const newTodos = previousState.todos.map(previousTodo =>{
                if(previousTodo.id === id){
                    previousTodo.completed = !previousTodo.completed
                }
                return previousTodo
            })
            return{
                todos: newTodos
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item =>
        <TodoItem 
            key={item.id}
            item={item}
            completed={item.completed}
            description={item.description}
            handleClick={this.handleClick}
        />)
        
        return(
            <div className="todoList">
                {todoItems}
            </div>
        )
    }
}

export default TodoApp