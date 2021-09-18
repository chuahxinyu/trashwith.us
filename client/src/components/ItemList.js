import React, { useState, useEffect } from 'react'
import Item from './Item'
import axios from 'axios'

export default function ItemList() {
    const [isBlurred, setIsBlurred] = useState(false)
    const [items, setItems] = useState([])

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
        console.log("effect")
        axios
            .get("http://localhost:30001/api/items")
            .then(response => {
                console.log("promise fulfilled")
                setItems(response.data)
            })
    }, [])

    return (
        <div>
            <div className="item-list">
                {items.map((item) => (
                    <Item 
                        key = {item.id}
                        name = {item.itemName}
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
