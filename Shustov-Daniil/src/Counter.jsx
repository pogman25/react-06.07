import React, { PureComponent } from 'react'

class Counter extends PureComponent {
    state = {
        count: 0,
    }

    onChange = ({ target }) => {
        const { change } = target.dataset;
        this.setState(({count}) => ({count: change === 'increment' ? count + 1 : count - 1}))
    }   
    
    render() {
        const { count } = this.state;

        return (
            <div>
                <p>{ count }</p>
                <button onClick = {this.onChange} data-change = 'decrement'>decrement</button>
                <button onClick = {this.onChange} data-change = 'increment'>increment</button>                
            </div>
        )
    }
}

export default Counter