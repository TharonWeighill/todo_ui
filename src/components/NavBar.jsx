import React from 'react';



const logo = require('../images/gray-orange-logo-with-tagline.png');
const logo2 = require('../images/cleanspeak-horizontal.png')

export default class NavBar extends React.Component {
    render() {
        return (
            <ul className="navMenu">
                <a href='http://localhost:3000/home'>Home</a>
                <a href='http://localhost:9011/oauth2/authorize?client_id=a7f398aa-8337-4112-94a0-f99bc29a8136&response_type=code&redirect_uri=http://localhost:3000/home'>Login</a>
                <a href='http://localhost:9011/oauth2/logout?client_id=a7f398aa-8337-4112-94a0-f99bc29a8136'>Logout</a>
                <a href='http://localhost:3000/new_todo'>New Todo</a>
                <a href='http://localhost:3000/todo_lists'>My Todos</a>
            </ul>
        )
    }
}