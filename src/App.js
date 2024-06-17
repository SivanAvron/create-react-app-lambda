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
       
        <div>
          <a href="https://www.outbrain.com">
            <button>Click Here</button>
          </a>
          <br />
          <a href="https://www.outbrain.com">
            <button>Click Here same url</button>
          </a>
        </div>
        <p>
        Soufflé carrot cake caramels cheesecake dessert dessert. Liquorice biscuit biscuit lollipop bear claw brownie. Bear claw danish sweet tiramisu croissant dragée. Powder topping cake liquorice gingerbread pudding cake danish sweet. Topping chupa chups pudding jelly donut chocolate bar. Jujubes donut chocolate bar gummies bear claw sesame snaps tootsie roll. Marshmallow biscuit gummi bears candy pudding sweet sweet roll sesame snaps marzipan. Chocolate cake topping pastry carrot cake gummies liquorice tootsie roll cake. Tart donut jelly wafer lemon drops marzipan. Carrot cake sesame snaps danish cake sesame snaps pie. Liquorice sweet roll apple pie sugar plum caramels croissant jelly beans danish ice cream. Croissant gummi bears cookie bear claw dragée carrot cake.
Jujubes chocolate bar danish jelly-o pudding. Topping oat cake pudding chocolate bar sweet roll jelly-o. Fruitcake chocolate tootsie roll caramels pudding. Caramels sesame snaps caramels sweet roll croissant. Soufflé jelly-o cupcake marzipan dragée cotton candy lemon drops. Toffee sweet powder lollipop icing candy canes chocolate. Brownie candy donut pie gingerbread. Candy canes carrot cake chupa chups liquorice liquorice. Cookie marzipan tootsie roll carrot cake ice cream apple pie jujubes. Ice cream lemon drops tiramisu bonbon bonbon. Donut donut liquorice cake oat cake. Carrot cake croissant jujubes lemon drops gummies jelly. Pie sweet roll cheesecake topping brownie. Lemon drops pie muffin jelly-o tart.
Marzipan wafer bear claw macaroon halvah gummies tiramisu cake. Jelly-o oat cake jelly donut muffin powder wafer pudding. Pudding topping oat cake gummies macaroon chocolate. Cupcake soufflé chocolate cake lollipop gummies caramels. Danish liquorice apple pie chupa chups bear claw. Gummies croissant ice cream sesame snaps toffee. Caramels shortbread pie biscuit sesame snaps. Cotton candy fruitcake pie shortbread candy canes. Sugar plum chocolate topping croissant cupcake croissant apple pie liquorice. Gummi bears carrot cake sweet roll jelly beans halvah sweet gummi bears pastry. Pie jelly-o jelly sesame snaps danish bonbon lemon drops croissant. Tiramisu chocolate bar carrot cake soufflé marshmallow cheesecake sugar plum sweet sesame snaps. Carrot cake sweet roll sweet cotton candy bear claw shortbread pastry biscuit.
Bonbon jujubes powder sweet brownie powder biscuit cake. Halvah lemon drops biscuit jelly beans dessert. Sweet chocolate bar lollipop topping sugar plum toffee topping croissant shortbread. Cake tootsie roll sesame snaps soufflé croissant pudding jelly jelly-o candy canes. Soufflé jelly-o brownie marzipan sugar plum. Jujubes pastry topping bonbon macaroon marshmallow jujubes. Tart cheesecake jelly beans sugar plum wafer. Lollipop ice cream candy canes liquorice cupcake toffee. Soufflé croissant sweet roll halvah sesame snaps tart carrot cake pastry oat cake. Powder fruitcake jelly sweet gingerbread powder. Halvah shortbread candy canes powder soufflé cake sugar plum bonbon bear claw. Shortbread cake cake jujubes chocolate bar. Icing cookie jelly-o marshmallow wafer liquorice donut marshmallow. Jelly-o brownie tootsie roll chocolate ice cream.
Cookie croissant dessert chocolate cake ice cream halvah. Lemon drops cotton candy cookie ice cream chocolate bar marshmallow cotton candy chocolate. Candy icing donut candy canes tootsie roll marshmallow tootsie roll jelly beans. Wafer dragée apple pie dessert marzipan cupcake gingerbread powder macaroon. Lollipop toffee cake chocolate bar toffee jujubes sesame snaps jujubes. Jelly-o caramels halvah marshmallow toffee dessert candy canes. Jujubes pie pie shortbread candy halvah tart cookie. Macaroon chupa chups marshmallow tiramisu marzipan fruitcake marshmallow powder chocolate cake. Apple pie liquorice powder fruitcake jelly candy canes jujubes sweet gummi bears. Bonbon donut cake pastry tiramisu bonbon fruitcake. Ice cream candy muffin caramels dragée. Topping tootsie roll marshmallow marzipan brownie candy pie. Biscuit soufflé dragée bonbon sugar plum. Caramels marzipan candy canes apple pie cupcake jelly beans cotton candy.
        </p>
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
