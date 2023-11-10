import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
const Cart = () => {
  const img1 =
    "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
  const img2 =
    "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
const dispatch=useDispatch();
    const inchandler=(id)=>
{
  dispatch
  ({
    type:"addToCart",
    payload:{id},
  });
  dispatch
  (
    {
      type:"calculateprice"
    }
  )
}
const dechandler=(id)=>
{
    dispatch
    (
      {
        type:"decrement",
        payload:id
      }
    );
    dispatch
    (
      {
        type:"calculateprice"
      }
    )
}
const deletehandler=(id)=>
{
  dispatch
  (
    {
      type:"delete",
      payload:id
    }
  );
  dispatch
  (
    {
      type:"calculateprice"
    }
  )
  
}

  const { cartItems,shipping,subTotal,total,tax} = useSelector((state) => state.cart);

  return (
    <div className='cart'>
      <main>
        {
          cartItems.length > 0 ? cartItems.map(i =>
          (
            <Cartitem
              imagesrc={i.imgsrc} name={i.name} price={i.price} qty={i.quantity} id={i.id} key={i.id} decrement={dechandler} increment={inchandler} deletehandler={deletehandler} />

          )) : <h1>NO ITEMS YET</h1>
        }
      </main>
      <aside>
        <h2>Subtotal:${subTotal}</h2>
        <h2>Shipping:${shipping}</h2>
        <h2>Tax:${tax}</h2>
        <h2>Total:${total}</h2>

      </aside></div>
  )
}

const Cartitem = ({ imagesrc, name, price, qty, decrement, increment, deletehandler, id }) =>
(
  <div className="cartitem">
    <img src={imagesrc} alt="" srcset="" />
    <article>
      <h3>{name}</h3>
      <p>{qty}</p>
      <p>${price}</p>
    </article>
    <div> <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button></div>
    <AiFillDelete onClick={() => deletehandler(id)} />
  </div>

)
export default Cart;