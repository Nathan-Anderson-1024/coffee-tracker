import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product({products}) {
  const {id} = useParams();
  const findProduct = products.find((product, index) => index === parseInt(id));

  return (
    <div>
      <div className="text-center">
        <h1>{findProduct.name}</h1>
        <h2>Current Price: ${findProduct.price_array[findProduct.price_array.length - 1]}</h2>
        <h3>Last Updated: {findProduct.added_array[findProduct.added_array.length - 1]}</h3>
      </div>
      <div></div>
    </div>
  )
}
