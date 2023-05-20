import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product({products}) {
  const {id} = useParams();
  const findProduct = products.find((product, index) => index === parseInt(id));

  return (
    <div className='mt-12'>
      <div className="text-center">
        <div className='flex justify-center mb-6'>
          <img src={findProduct.img[0]} className="object-scale-downobject-center"></img>
        </div>
        
        <h1 className='font-bold'>{findProduct.name}</h1>
        <h2 className='font-bold'>Current Price: <span className='font-bold text-green-700'>${findProduct.price_array[findProduct.price_array.length - 1].toFixed(2)}</span></h2>
        <h3>Last Updated: {findProduct.added_array[findProduct.added_array.length - 1]} from Amazon.</h3>
      </div>
      <div className='flex justify-center mt-12'>
        <table className='table-auto w-3/6 border-solid border-2 shadow-lg'>
          <thead className=''>
            <tr>
              <th className='bg-gray-100 border py-4 text-center'>Crawl Date</th>
              <th className='bg-gray-100 border text-center py-4'>Price</th>
            </tr>
          </thead>
          
          <tbody className='text-center'>
          {findProduct.added_array.map((date, index) => {
              return (
                <tr key={index}>
                  <td className='border py-2'>{new Date(date).toISOString().split('T')[0]}</td>
                  <td className='border py-2'>{findProduct.price_array[index].toFixed(2)}</td>
                </tr>
                
              )
              
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
