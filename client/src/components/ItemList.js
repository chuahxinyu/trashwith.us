import React, { useState, useEffect } from 'react'
import Item from './Item'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'

export default function ItemList() {
    const [isBlurred, setIsBlurred] = useState(false)
    const [items, setItems] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        axios
            .get("https://trashwithus-api.herokuapp.com/api/items")
            .then(response => {
                setItems(response.data)
            })
    }, [])

    return (
        <div>
            <div className="search">
                <input 
                    className="searchbar"
                    type="text"
                    placeholder="search..."
                    onChange={event => {setSearchTerm(event.target.value)}}>
                </input>

                <button type="submit" className="search-btn">
                    <FaSearch />
                </button>
            </div>

            <div className="item-list">
                {items.filter((val) => {
                    if (searchTerm === ""){
                        if (! items.includes(val.id)){
                            return val
                        }
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                    return null
                }).map((item) => (
                    <Item 
                        key = {item.id}
                        itemId = {item.id}
                        name = {item.name}
                        imgSrc = {item.imgSrc}
                        setIsBlurred = {setIsBlurred}
                    />
                ))}
            </div>
            
            {isBlurred ?
                <div className="blur"></div>
            : null}
        </div>
    )
}
