import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {
  render() {
    const {data,viewDetail,addCart} = this.props;

    return (
      <div className='container'>
        <div className="row">
            {data.map((item)=>{
                return <ProductItem key={item.id} shoe={item} viewDetail={viewDetail} addCart={addCart}/>
            })}
        </div>
      </div>
    )
  }
}
