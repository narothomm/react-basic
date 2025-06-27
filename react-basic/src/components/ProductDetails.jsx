import React, { useEffect, useState } from 'react';
import ProductCart from './ProductCart';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [productData, setProductData] = useState([]);
   const navigate=useNavigate()
   useEffect(() => { 
    const fetchData=async()=>{
    try{
      const res=await fetch('data.json')
      const data=await res.json()
      setProductData(data)
      setLoading(false)
    }
    catch(error){
      setError(error)
      setLoading(false)
    }
    }
  fetchData()
  
  }, [])

  const handleAddToCart = (name) => {
    //alert(`${name} is added to cart`);
    navigate("/cart");
  };

  if (loading) {
    return(
       <h2 className='text-center font-bold text-xl'>Loading...</h2>)
  }

  if (error) {
    return( 
    <h2 className='text-center font-bold text-xl'>Error fetching data</h2>)
  }


  return (
    <div>
      <h2 className='text-center text-2xl font-semibold text-red-500'>ProductDetails</h2>
      <button onClick={()=>navigate(1)}>forward</button>

       {/* 
      <ProductCart name={productData1.name} price={productData1.price} isAvailable={productData1.inStock} onAddToCart={handleAddToCart}/>
      <ProductCart name={productData2.name} price={productData2.price} isAvailable={productData2.inStock} onAddToCart={handleAddToCart}/>
      <ConditionalRendering></ConditionalRendering>
      <Counter></Counter> 
      */}
         
      {
        productData.map((product, idx) => (
          <ProductCart
            key={idx}
            name={product.name}
            price={product.price}
            isAvailable={product.inStock}
            description={product.description}
            onAddToCart={handleAddToCart}>  </ProductCart>
        ))
      }
    </div>
  )
}

export default ProductDetails