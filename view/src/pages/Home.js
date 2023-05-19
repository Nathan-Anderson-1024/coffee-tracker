import React from 'react'
import Products from '../components/Products'

export default function Home({products, setProductList}) {
  return (
    <div className='text-center'>
      <Products products={products} setProductList={setProductList}></Products>
    </div>
  )
}
