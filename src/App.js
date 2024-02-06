import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  render() {
    const { loading, msg } = this.state

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Add to Cart"}</button>
        <br />
        <br />
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Register"}</button>
        <br />
        <span>{msg}</span>
        <br />
        <br />
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Add to Cart"}</button>
        <br />
        <button onClick={href="https://www.outbrain.com"}>{loading ? "Loading..." : "Same URL as register"}</button>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            sivana dot com is mine.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
