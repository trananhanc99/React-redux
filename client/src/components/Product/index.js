import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
import {addProduct} from "actions"
import { useDispatch } from 'react-redux'

const Index = (props) => {
    const dispatch = useDispatch()
    const handleClick = (id) => {
        dispatch(addProduct(id))
    }
    return (
        <div>
            <div className="single_product_item">
                <img src={props.img} alt={props.alt}/>
                <div className="single_product_text">
                    <h4>{props.name}</h4>
                    <h3>${props.price}</h3>
                    <div className="add_cart">
                        <Link to="" onClick={() => {
                            handleClick(props.id)
                        }}>+ Thêm vào giỏ hàng</Link>
                        <Link to=""><i className="ti-heart"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Index;

