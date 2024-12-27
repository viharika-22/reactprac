import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';

function Products() {
  const [product,setProduct]=useState(0);
  useEffect(()=>{
   const fetchProducts = async() =>{
    await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setProduct(data))
   };
   fetchProducts();
  },[])
  return (
    <>
    {product.map((item,index)=>(
      <ProductItem />
    ))}
    </>
  )
}

export default Products