import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Searchbar() {
    return (
        <div className="search">
            <input className="searchbar" type="text" placeholder="search..."></input>

            <button type="submit" className="search-btn">
                <FaSearch />
            </button>
        </div>
    )
}
