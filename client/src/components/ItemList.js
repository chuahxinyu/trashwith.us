import React, { useState, useEffect } from 'react'
import Item from './Item'
import { FaSearch } from 'react-icons/fa'
import { FaPlusCircle, FaCircle } from 'react-icons/fa';
import AddItem from './AddItem';
import ReactTooltip from 'react-tooltip';
import axios from 'axios'

export default function ItemList() {
    const [isBlurred, setIsBlurred] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        // http://localhost:3001/api/items
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
                    <FaSearch className="search-icon"/>
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
                        items = {items}
                    />
                ))}
            </div>

            <div className="add-btn-in-popup-container" onClick={() => {setIsAddOpen(true)}}>
                <FaCircle className="add-btn-back"/>
                <FaPlusCircle className="add-btn-front" data-tip data-for="addItem"/>
            </div>

            <AddItem 
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
            />
             <ReactTooltip className="tooltip" id="addItem"><p>Suggest an item</p></ReactTooltip>
          
            {isBlurred ?
                <div className="blur"></div>
            : null}
        </div>
    )
}
