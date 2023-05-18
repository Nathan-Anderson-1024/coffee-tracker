import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product({products}) {
  const {id} = useParams();
  const findProduct = products.find((product, index) => index === parseInt(id));

  return (
    <div>
      {findProduct.name}
    </div>
  )
}
