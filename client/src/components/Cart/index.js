import React from 'react'
import { Table } from 'reactstrap';
import {useSelector, useDispatch } from "react-redux";
import * as action from "actions"
import "./index.css";
export default function Index() {
  const dataInCart = useSelector((state) => state.Product);
  const printData = dataInCart.addItems;
  const dispatch = useDispatch()
  const increment = (id) => {
    dispatch(action.addQuantityProduct(id));
    
  }
  const decrement = (id) => {
    dispatch(action.subQuantityProduct(id));
  }
  const remove = (id) => {
    dispatch(action.removeProduct(id));
  }
  return (
    <div className="cart_area">
       <Table>
        <thead>
          <tr>
            <th>Mã hàng</th>
            <th>Tên</th>
            <th>Số lượn</th>
            <th>Tiền</th>
            <th>Tổng</th>
          </tr>
        </thead>
        <tbody>
          {printData.map((item, key) => (
            <tr key={key}>
              <th scope="row">{item._id}
                <span href="a" onClick={() => remove(item._id)} className="remove-item">X</span>
              </th>
              <td>{item.nameProduct}</td>
              <td>
                <div className="product_count">
                  <input className="input-number" type="text" value={item.quantity}/>
                  <div className="icon-dec-plus">
                    <button className="input-number-increment" onClick={() => increment(item._id)}>
                      <i className="ti-angle-up"></i>
                    </button>
                    <button className="input-number-decrement" onClick={() => decrement(item._id)}>
                      <i className="ti-angle-down"></i>
                    </button>
                  </div>
                </div>
              </td>
              <td>{item.princeProduct}</td>
              <td>{item.sunPro}</td>
          </tr>))}
          <tr>
            <td>
              <h3>Tổng tiền: {dataInCart.total }</h3>
            </td>
          </tr>
        </tbody>
      </Table> 
    </div>
  )
}
