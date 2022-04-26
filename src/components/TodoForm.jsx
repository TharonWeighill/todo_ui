import React, {Component, useState} from 'react'
import axios from "axios";

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listName: '',
            listBody: ''
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:9900/api/lists', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {console.log(error)
            })
    }
    render () {
        const { listName, listBody } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="listName" value={listName} placeholder="List Name" onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="listBody" value={listBody} placeholder="List Body" onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Create Todo List</button>
                </form>
            </div>
        )
    }
}