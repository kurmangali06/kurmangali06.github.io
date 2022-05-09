import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id:1,
          title: 'Стул белый',
          img: 'while.webp',
          desc: "lorem ipsum dolor sit amet, consecteur adipisisicng",
          category: 'chairs',
          price: '49.99'
        },
        {
          id:2,
          title: 'стол',
          img: 'table.jpg',
          desc: "lorem ipsum dolor sit amet, consecteur adipisisicng",
          category: 'chairs',
          price: '149.99'
        },
        {
          id:3,
          title: 'диван',
          img: 'диван.jpg',
          desc: "lorem ipsum dolor sit amet, consecteur adipisisicng",
          category: 'chairs',
          price: '89.99'
        },
        {
          id:4,
          title: 'лампа',
          img: '-.jpg',
          desc: "lorem ipsum dolor sit amet, consecteur adipisisicng",
          category: 'chairs',
          price: '99.99'
        },
        {
          id:5,
          title: 'стул серый',
          img: 'stul.jpeg',
          desc: "lorem ipsum dolor sit amet, consecteur adipisisicng",
          category: 'chairs',
          price: '39.99'
        }
      ]
    }
    this.addToOrder= this.addToOrder.bind(this)
    this.deleteOrder= this.deleteOrder.bind(this)
  }
  render(){
    return (
    <div className="wrapper">
      <Header orders={this.state.orders}  onDelete ={this.deleteOrder}/>
      <Items items= {this.state.items} onAdd={this.addToOrder}/>
      <Footer/>
    </div>
  )
  }

  deleteOrder (id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id=== item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders:[...this.state.orders, item]})
  }
}

export default App;
