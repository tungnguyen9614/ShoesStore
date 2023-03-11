import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {shoe,viewDetail,addCart} = this.props;

    return (
      <div className='col-3 mb-3'>
        <div className="card">
          <img className="card-img-top" src={shoe.image} alt={shoe.image} />
          <div className="card-body">
            <h4 className="card-title">{shoe.name}</h4>
            <p style={{fontSize:20,color:"red",fontWeight:500}} className="card-text">Price: {shoe.price}$</p>
            <button className="btn btn-info mx-5" data-bs-toggle="modal" data-bs-target="#modalDetail" onClick={()=>{viewDetail(shoe)}}>Detail</button>
            <button className="btn btn-success" onClick={()=>{addCart(shoe)}}>Add Cart</button>
          </div>
        </div>
      </div>
    )
  }
}
