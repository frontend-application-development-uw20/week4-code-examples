import React from 'react';
import PropTypes from 'prop-types';

class TodoItems extends React.Component {
    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                isComplete: PropTypes.bool.isRequired
            })
        ).isRequired,
        markComplete: PropTypes.func.isRequired
    }

    render() {
        const { todos, markComplete } = this.props;

        return (
            <ul>
                {todos.map((todo, idx) => (
                    <li
                        // className={todo.isComplete ? 'todo-done' : ''}
                        // className={todo.isComplete && 'todo-done'}
                        style={{
                            textDecoration: todo.isComplete ? 'line-through': 'inherit',
                            cursor: 'pointer'
                        }}
                        onClick={markComplete(idx)}
                        key={idx}
                    >{todo.name}</li>
                ))}
            </ul>
        )
    }
}

export default TodoItems;