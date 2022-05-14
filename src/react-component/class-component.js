import { render } from '@testing-library/react';
import React, { component } from 'react'
import { Component } from 'react/cjs/react.production.min'


const mystyle = {
  backgroundColor: '#222',
  color: '#fff',
  marginTop: '50px',
  padding: '10px',
  heightL: '500px'
};


export class ClassComponent extends Component {
  render() {
    return (
      <h2 style={mystyle}>Class Component</h2>
    )
  }
}

export class ClassComponent1 extends Component {
  render() {
    return (
      <div style={mystyle}>
        <h2>{this.props.massage}</h2>
        <p>setionNumber :{this.props.setion}</p>
      </div>
    )
  }
}

export class ClassComponent2 extends Component {
  constructor() {
    super()

    this.state = {
      conter: 0
    }

    this.incrementHandler = this.incrementHandler.bind(this)
  }
  incrementHandler() {
    this.setState({ counter: this.state.conter++ })
    console.log(this.state.conter)
  }
  decrementHandler = () => {
    this.setState({ cunter: this.state.conter-- })
  }
  render() {
    return (
      <div style={mystyle}>
        <h2>{this.props.massage}</h2>
        <p>counter :{this.state.conter}</p>
        <button onClick={this.incrementHandler}>+</button>
        <button onClick={this.decrementHandler}>-</button>

      </div>
    )
  }
}


export class ClassComponent4 extends Component {
  constructor() {
    super()

    this.state = {
      visibleWidthStyle: true,
      visibleWidthDom: true,
      cont: true
    }
  }

  toggleShowHandler = () => {
    
    this.setState = ({ ...this.state, visibleWidthStyle: !this.state.visibleWidthStyle });
    console.log(this.state.visibleWidthStyle, this.state.cont);
  };

  toggleShowDomHandler = () => {
    console.log(this.state.visibleWidthDom);
    this.setState = ({ ...this.state, visibleWidthDom: !this.state.visibleWidthDom });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShowHandler}>Toggle</button>
        <button onClick={this.toggleShowDomHandler}>Toggle width dom</button>
        <div style={{ display: this.state.visibleWidthStyle ? 'block' : 'none' }}>
          {
            this.state.visibleWidthDom ? (
              <ClassComponent2 massage='test toggle show' />
            )
              : null}
        </div>
      </div>
    )
  }
}

