import React from 'react'

export default function Products({products}) {
  return (
    <div>
      {products.map((product) => {
        return (
          <div className='flex' key={product.id}>
            <h2>{product.name}</h2>
          </div>
        )
      })}
    </div>
    
  )
}
