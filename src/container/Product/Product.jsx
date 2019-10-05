import React, { Component, Fragment } from 'react';
import "./Product.css";
import CardProduct from '../CardProduct/CardProduct'
class Product extends Component {
  state = {
    order: 4
  }

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue
    })
  }

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo"></div>
          <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" />
        </div>
        <div className="troley">
          <img src="https://etanee.id/img/icon/ic_cart_white.svg" />
        </div>
        <div className="count">{this.state.order}</div>
        {/*Child Component*/}
        {/*<CardProduct onCounterChange={this.handleCounterChange} />*/}
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default Product;
