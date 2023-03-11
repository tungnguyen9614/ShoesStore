import React, { Component } from "react";
import data from "./../data/shoe.json";
import ModalCart from "./ModalCart";
import ModalDetail from "./ModalDetail";
import ProductList from "./ProductList";

export default class ShoesStore extends Component {
  state = {
    shoeData: {},
    cartArr: [],
  };

  addCart = (chosenShoe) => {
    let cartItem = {
      id: chosenShoe.id,
      name: chosenShoe.name,
      price: chosenShoe.price,
      image: chosenShoe.image,
      quantity: 1,
    };

    var cartArrClone = [...this.state.cartArr];
    let index = cartArrClone.findIndex((item) => item.id === chosenShoe.id);
    if (index !== -1) {
      cartArrClone[index].quantity += 1;
    } else {
      cartArrClone.push(cartItem);
    }

    this.setState({
      cartArr: cartArrClone,
    });
  };

  handleDelete = (id) => {
    var cartArrClone = this.state.cartArr.filter((item) => item.id !== id);

    this.setState({
      cartArr: cartArrClone,
    });
  };

  changeQuantity = (id, change) => {
    var cartArrClone = this.state.cartArr;
    let index = cartArrClone.findIndex((item) => item.id === id);
    if (change) {
      cartArrClone[index].quantity += 1;
    } else if (cartArrClone[index].quantity > 1) {
      cartArrClone[index].quantity -= 1;
    }

    this.setState({
      cartArr: cartArrClone,
    });
  };

  clearCart = () => {
    this.setState({
      cartArr: [],
    });
  };

  handleBuy = () => {
    this.setState({
      cartArr: [],
    });
    alert("Order successfully !");
  };

  viewDetail = (shoe) => {
    this.setState({
      shoeData: shoe,
    });
  };

  render() {
    let total = this.state.cartArr.reduce((sum, item) => {
      return (sum += item.quantity);
    }, 0);

    return (
      <div className="container">
        <h3 className="text-center text-success">Shoes shop</h3>
        <ModalCart
          cartArr={this.state.cartArr}
          onDelete={this.handleDelete}
          changeQuantity={this.changeQuantity}
          clearCart={this.clearCart}
          onBuy={this.handleBuy}
        />
        <div style={{ textAlign: "right" }} onBuy={this.handleBuy}>
          <span
            style={{ cursor: "pointer", color: "green" }}
            data-bs-toggle="modal"
            data-bs-target="#modalCart"
          >
            <i
              style={{ fontSize: 30 }}
              className="fa-solid fa-cart-shopping"
            ></i>{" "}
            ({total})
          </span>
        </div>
        <ProductList
          data={data}
          viewDetail={this.viewDetail}
          addCart={this.addCart}
        />
        <ModalDetail shoe={this.state.shoeData} />
      </div>
    );
  }
}
