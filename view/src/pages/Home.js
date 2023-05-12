import React from 'react'
import Products from '../components/Products'

export default function Home({products}) {
  return (
    <div className='text-center'>
      <Products products={products}></Products>
    </div>
  )
}
