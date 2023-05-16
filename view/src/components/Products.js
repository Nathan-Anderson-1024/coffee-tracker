import React from 'react'

export default function Products({products}) {
  return (
    <div className='grid grid-cols-4 gap-4 mt-2'>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <div>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
            
          </div>
        )
      })}
    </div>
    
  )
}
