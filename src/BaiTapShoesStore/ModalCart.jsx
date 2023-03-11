import React, { Component } from 'react'

export default class ModalCart extends Component {
  render() {
    const {cartArr,onDelete,changeQuantity,clearCart,onBuy} = this.props;

    return (
        <div
        className="modal fade"
        id="modalCart"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ maxWidth: 800, width: 800 }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartArr.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <img style={{ width: 100 }} src={item.image} />
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <button
                            style={{
                              border: "1px solid black",
                              borderRadius: "50%",
                              background: "#8080802b",
                              width: "20px",
                              height: "20px",
                              lineHeight: "0px",
                              marginRight: "3px",
                              fontSize: 20
                            }}
                            onClick={()=>{changeQuantity(item.id, true)}}
                          >
                            +
                          </button>
                          {item.quantity}
                          <button
                            style={{
                              border: "1px solid black",
                              borderRadius: "50%",
                              background: "#8080802b",
                              width: "20px",
                              height: "20px",
                              lineHeight: "0px",
                              marginLeft: "3px",
                              fontSize: 20
                            }}
                            onClick={()=>{changeQuantity(item.id, false)}}
                          >
                            -
                          </button>
                        </td>
                        <td>{item.price.toLocaleString()}$</td>
                        <td>{(item.price * item.quantity).toLocaleString()}$</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              onDelete(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4"></td>
                    <td>Total:</td>
                    <td>
                    {
                        this.props.cartArr.reduce((total,item,index)=>{
                          return total += item.quantity*item.price;                        
                        },0).toLocaleString()
                      }
                      $</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={()=>{onBuy()}}
              >
                Buy
              </button>
              <button type="button" className="btn btn-danger" 
              onClick={()=>{clearCart()}}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
