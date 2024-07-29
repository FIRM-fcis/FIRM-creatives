import React from 'react'
import './SearchList.css'
const SearchList = ({results}) => {
  return (
    <div className={'search-list'} >
        <ul>
            {results.map((result,index)=>(
                <li key={index}>{result.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default SearchList