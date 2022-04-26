import React from 'react';

export default class FetchTodoLists extends React.Component {

    state = {
        loading: true,
        todolist: null
    }
    async componentDidMount() {
        const url = "http://localhost:9900/api/lists/";
        const response = await fetch(url, {});
        const data = await response.json();
        this.setState({todolist: data, loading: false});
        console.log(data);
    }
    render() {
        return (
            <div>
                {this.state.loading  || !this.state.todolist ? (
                    <div>NOT WORKING</div>
                ) : (
                    <div>
                        <div>{this.state.todolist.listName}</div>
                        <div>{this.state.todolist.listBody}</div>
                    </div>
                )}
            </div>
        )
    }
}