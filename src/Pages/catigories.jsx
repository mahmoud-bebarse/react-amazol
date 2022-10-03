import React,{useReducer} from 'react';
import { Products } from '../Data/products';
import Navbar from '../navbar';
import WrappedText from '../components/WrappedText';
import "./home.css";
import { useParams } from "react-router-dom";
import { CartReducer, initCartState } from "../reducers/cartReducer";


function Categories() {
    const [cart, dispatch] = useReducer(CartReducer, initCartState);

    const handleAddItem = (item) => {
      dispatch({ type: "ADD", item });
    };
    const { id } = useParams();
        const product = Products;
        const res = product.filter(c => c.catId ===(id));
        return (
            <>
                <Navbar/>
                <div className='container'>
                    {
                          res.map(prod => (
                            <div key={prod.id} className="product">
                                    <div className='desc'>
                                        <img className='img' src={require(`../images/${prod.src}`)} alt={prod.dis} />
                                        <WrappedText text={prod.dis} limit={60} />
                                    </div>
                                    <button type="button"onClick={()=> handleAddItem(prod)} className="btn btn-dark add">Add To Cart</button>
                                </div>
                        ))
                    }
                </div>
            </>
        );
    }
 
export default Categories;