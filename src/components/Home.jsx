import React from 'react';

export default class Home extends React.Component {
    render () {
        return (
            <div>
                <h1>WELCOME!!!</h1>
                <a href="http://localhost:3000/new_todo">New Todo List</a>
                <br />
                <a href="http://localhost:3000/todo_lists">All Todo Lists</a>
            </div>
        )
    }
}