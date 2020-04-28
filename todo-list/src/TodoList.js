import React from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

// todos: [{
//     name: 'Walk the dog',
//     isComplete: true
// }]

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // todos: ['Walk the dog', 'Get groceries'],
            todos: [
                { name: 'Walk the dog', isComplete: false },
                { name: 'Get groceries', isComplete: true }
            ],
            newTodoItem: {
                name: '',
                isComplete: false
            }
        }
    }

    addTodo = (e) => {
        e.preventDefault();
        // add todo
        this.setState({
            todos: [...this.state.todos, this.state.newTodoItem],
            newTodoItem: {
                name: '',
                isComplete: false
            }
        })
    }

    markTodoComplete = (idx) => {
        return (e) => {
            const newTodos = this.state.todos.map((todo, todoIdx) => {
                if (idx === todoIdx) {
                    return {
                        ...todo,
                        isComplete: true
                    };
                } else {
                    return todo;
                }
            });
            this.setState({ todos: newTodos });
        }
    }

    handleInputChange = (e) => {
        this.setState({
            newTodoItem: {
                ...this.state.newTodoItem,
                name: e.target.value
            }
        })
    }

    clearTodos = (e) => {
        e.preventDefault();
        this.setState({ todos: [] });

        // this.setState({ todos: [...this.state.todos, {name: 'second set state'}] });
        // this.setState({ todos: [...this.state.todos, {name: 'third set state'}] });

        // this.setState((state) => {
        //     return { todos: [] };
        // });
        // this.setState(state => {
        //     return { todos: [...state.todos, {name: 'second set state'}] }
        // });
        // this.setState(state => {
        //     return { todos: [...state.todos, {name: 'third set state'}] }
        // });
    }

    render() {
        console.log(this.state);
        return (
            <div className="Todo-List">
                <h1>Todo List</h1>
                <form onSubmit={this.addTodo}>
                    <input
                        value={this.state.newTodoItem.name}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">
                        Add Item
                    </button>
                    <button onClick={this.clearTodos}>Clear</button>
                </form>
                <TodoItems
                    markComplete={this.markTodoComplete}
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default TodoList;
