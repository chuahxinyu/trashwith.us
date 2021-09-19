import React, { useState } from 'react'
import Item from './Item'
import { FaSearch } from 'react-icons/fa'
import { FaPlusCircle, FaCircle } from 'react-icons/fa';
import AddItem from './AddItem';

export default function ItemList() {
    const [isBlurred, setIsBlurred] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [isAddOpen, setIsAddOpen] = useState(false)

    const items = [
        {
            "id": 1, 
            "name": "Aerosol Cans",
            "imgSrc": "https://images.pexels.com/photos/7117027/pexels-photo-7117027.jpeg?cs=srgb&dl=pexels-cottonbro-7117027.jpg&fm=jpg",
            "actionList": [1, 2, 3]
        },
        {
            "id": 2,
            "name": "Adhesive Strips (Band Aids)", 
            "imgSrc": "placeholder-img.png",
            "actionList": [1, 2]
        },
        {
            "id": 3,
            "name": "Aluminium Cans", 
            "imgSrc": "https://images.pexels.com/photos/404178/pexels-photo-404178.jpeg?cs=srgb&dl=pexels-jonathan-petersson-404178.jpg&fm=jpg",
            "actionList": [2, 3]
        },
        {
            "id": 4,
            "name": "Alumninuim Foil", 
            "imgSrc": "https://images.pexels.com/photos/7232656/pexels-photo-7232656.jpeg?cs=srgb&dl=pexels-artem-podrez-7232656.jpg&fm=jpg",
            "actionList": [1, 3]
        },
        {
            "id": 5,
            "name": "Aluminium Trays", 
            "imgSrc": "placeholder-img.png",
            "actionList": [2]
        }
    ]

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
                        items = {items}
                    />
                ))}
            </div>

            <div className="add-btn-in-popup-container" onClick={() => {setIsAddOpen(true)}}>
                <FaCircle className="add-btn-back"/>
                <FaPlusCircle className="add-btn-front"/>
            </div>

            <AddItem 
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
            />
          
            {isBlurred ?
                <div className="blur"></div>
            : null}
        </div>
    )
}
