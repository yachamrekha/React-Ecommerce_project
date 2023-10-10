import React from 'react'

export default function Cart({cartProducts}) {
  var total = 0
  cartProducts.map((product)=>(
    total=total + product.item.cost
  ))
  
  return (
    <div>
       <div className='container row' style={{margin:"auto"}}>
        {cartProducts.map((product)=>(

          <div className='m-2 col-5'>
            <div className='card'>

             <img className='card-img-top' style={{height:"150px", width:"250px",margin:"auto"}} src={product.item.pic}/> 
             <div className='card-body' >
                <h5 className='card-title'>{product.item.name}</h5>
                <h2>price: {product.item.cost}</h2>
                <div className='btn-group' role='group'>
                  <button type='button' className='btn btn-primary'>-</button>
                  <button type='button'className='btn btn-primary'>{product.quantity}</button>
                  <button type='button' className='btn btn-primary'>+</button>
                  
                </div>
             </div>

            </div>
        
          </div>

        ))}

       </div>
          <div className='jumbotron'>
            <h1 className='display-4'>Total cart price:{total}Rs</h1>
           <a className='btn btn-primary btn-lg' role='button'>make a payment</a>
          </div>

    </div>
  )
}
