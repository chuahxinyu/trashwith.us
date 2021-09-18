import React, { useState, useEffect } from 'react'
import Item from './Item'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'

export default function ItemList() {
    const [isBlurred, setIsBlurred] = useState(false)
    const [items, setItems] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const actionlist = [
        {
            id: 1,
            name: "Recycle",
            description: "recycle at a local recycling centre"
        },
        {
            id: 2,
            name: "Landfill",
            description: "place in your landfill bin"
        },
        {
            id: 3,
            name: "Donate",
            description: "donate it to a local donation centre"
        }
    ]

    useEffect(() => {
        axios
            .get("http://localhost:3001/api/items")
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
                        name = {item.name}
                        imgSrc = {item.imgSrc}
                        actionlist = {actionlist}
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
