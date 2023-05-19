import React from 'react'

export default function SortBy() {
  return (
    <div className='text-left m-2'>
        <label for="sort" className='me-5 font-bold'>Sort Data:</label>
        <select name="sortData" id ="sort" className='px-2 py-1'>
            <option>Price (High to low)</option>
            <option>Price (Low to high)</option>
            <option>Alphabetical (A - Z)</option>
            <option>Reverse Alphabetical (Z - A)</option>
            <option>Most Recently Updated</option>
        </select>
    </div>
  )
}
