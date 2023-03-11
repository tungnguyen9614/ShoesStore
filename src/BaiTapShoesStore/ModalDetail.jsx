import React, { Component } from 'react'

export default class ModalDetail extends Component {
  render() {
    const {shoe} = this.props

    return (
        <div>
        <div>
          {/* <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#modalDetail"
          >
            Launch demo modal
          </button> */}
          <div
            className="modal fade"
            id="modalDetail"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content" style={{width:"170%"}}>
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    {shoe.name}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>

                <div className="modal-body">
                  <div className="row">
                    <div className="col-5">
                      <img style={{ width: "100%" }} src={shoe.image} />
                    </div>
                    <div className="col-7">
                      <h3>Product Detail</h3>
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Name:</th>
                            <th>{shoe.name}</th>
                          </tr>
                          <tr>
                            <th>Price:</th>
                            <th style={{color:"red"}}>{shoe.price}$</th>
                          </tr>
                          <tr>
                            <th>Description:</th>
                            <th>{shoe.description}</th>
                          </tr>
                          <tr>
                            <th>Short Description:</th>
                            <th>{shoe.shortDescription}</th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
