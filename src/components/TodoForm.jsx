import React, {useState} from 'react';

function TodoForm() {
    const [input, setState] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
    };

    return (
        <form classname='todo-form' onsubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                value={input} name="text"
                className="todo-input"
            />
            <button className='todo-button'>Add todo</button>
        </form>
    )
}
export default TodoForm