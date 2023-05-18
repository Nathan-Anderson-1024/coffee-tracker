import React from 'react'

export default function Products({products}) {
  return (
    <div className='grid lg:grid-cols-4 gap-6 m-2 md:grid-cols-3 sm-grid-cols-2 justify-items-center content-center'>
      {products.map((product, index) => {
        return (
          <div key={index} className='border-2 border-gray-200 pb-1'>
            <div>
              <a href={`/products/${index}`}>
                <h2 className='font-bold'>{product.name}</h2>
                <p className='text-green-700 font-bold'>${product.price_array[product.price_array.length - 1]}</p>
              </a>
            </div>
            <button className='mt-1 border rounded-full px-4 py-1 text-sm text-blue-700 font-semibold border-blue-700 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'><a href={`/products/${index}`}>More Info</a></button>
          </div>
        )
      })}
    </div>
    
  )
}
