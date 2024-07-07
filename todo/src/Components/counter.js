import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render () {
        return <div>
        <h1>Hello Counter</h1>
        <h2>Count: {this.state.count}</h2>
        </div>
    }
}

export default Counter;