import React, { Component } from 'react'
import { BasePage } from '../../../BasePage'



const mystyle = {
    with: '100%',
    height: '300px',
    border: '1px solid #eee',
    textAlign: 'center',
    margin: '20px',
    padding: '20px',
}

export default class ComponentLifecycle extends Component {
    constructor() {
        super()

        this.state = {
            toggle: true,
            massage: 'React Class Component Lifecycle',
            counter: 0
        }
    }
    toggleClickHandler = () => {
        this.setState({ ...this.state, toggle: !this.state.toggle })
    }

    changMassageHandler = () => {
        this.setState({ ...this.state, massage: this.state.massage + ' , Another massage' })
    }

    increment = () => {
        this.setState({ ...this.state, counter: this.state.counter + 1 })
    }

    decrement = () => {
        this.setState({ ...this.state, counter: this.state.counter - 1 })
    }

    render() {
        return (
           
            <BasePage Title={'Component Lifecycle'}>
                <div>
                    <p>welcome to component lifecycle</p>
                    <button onClick={this.toggleClickHandler}>Toggle show</button>
                    <button onClick={this.changMassageHandler}>change massage</button>
                    <button onClick={()=>{console.clear()}}>clear console</button>
                    {this.state.toggle ? (
                        <div style={mystyle}>
                            <h3>{this.state.massage}</h3>
                            <button onClick={this.increment}>+</button>
                            <button onClick={this.decrement}>-</button>
                            <p>counter : {this.state.counter}</p>
                        </div>
                    ) : null
                    }
                </div>
            </BasePage>
        )
    }
}
