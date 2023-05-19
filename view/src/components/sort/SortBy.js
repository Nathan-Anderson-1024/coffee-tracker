import React, { useEffect, useState } from 'react'
//import { handleClick } from './utils'
export default function SortBy({products, setProductList}) {
  const [optionState, setOptionState] = useState(null)
  
  

  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value)
    switch(value) {
      case "Price (High to low)":
        highToLow();
        setOptionState('Price (High to low)');
        break;
      case "Price (Low to high)":
        lowToHigh();
        setOptionState('Price (Low to high)');
        break;
      case "Alphabetical (A - Z)":
        alphabetical();
        setOptionState('Alphabetical (A - Z)');
        break;
      case "Reverse Alphabetical (Z - A)":
        reverseAlphabetical();
        setOptionState('Reverse Alphabetical (Z - A)');
        break;
      case "Most Recently Updated":
        recentlyUpdated();
        setOptionState('Most Recently Updated');
        break;
      default:
        highToLow();
    }
}
  const highToLow = () => {
    //sort products based on highest price to lowest price
    const sortedProducts = [...products].sort((a, b) => {
      return a.price_array[a.price_array.length - 1] < b.price_array[b.price_array.length - 1]
    })
    setProductList(sortedProducts)
}

  const lowToHigh = () => {
    //sort products based on lowest price to highest
    const sortedProducts = [...products].sort((a, b) => {
      return a.price_array[a.price_array.length - 1] - b.price_array[b.price_array.length - 1]
    })
    setProductList(sortedProducts)
  }
  const alphabetical = () => {
    //sort products in alphabetical order
    const sortedProducts = [...products].sort((a, b) => {
      return a.name > b.name
    })
    setProductList(sortedProducts)
  }
  const reverseAlphabetical = () => {
    //sort products in reverse alphabetical order
    const sortedProducts = [...products].sort((a, b) => {
      return a.name < b.name
    })
    setProductList(sortedProducts)
  }
  
  const recentlyUpdated = () => {
    //sort products by most recently updated
    const sortedProducts = [...products].sort((a, b) => {
      return a.added_array[a.added_array.length - 1] < b.added_array[b.added_array.length - 1]
    })
    console.log(sortedProducts)
    setProductList(sortedProducts)
  }

  return (
    <div className='text-left m-2'>
        <label htmlFor="sort" className='me-5 font-bold'>Sort Data:</label>
        <select name="sortData" id ="sort" className='px-2 py-1'>
            <option value="Price (High to low)" onClick={handleClick}>Price (High to low)</option>
            <option value="Price (Low to high)" onClick={handleClick}>Price (Low to high)</option>
            <option value="Alphabetical (A - Z)" onClick={handleClick}>Alphabetical (A - Z)</option>
            <option value="Reverse Alphabetical (Z - A)" onClick={handleClick}>Reverse Alphabetical (Z - A)</option>
            <option value="Most Recently Updated" onClick={handleClick}>Most Recently Updated</option>
        </select>
    </div>
  )
}
