import React, {useState} from 'react'
import Popup from './Popup'
import axios from 'axios'


export default function Item({items, itemId, name, imgSrc, setIsBlurred}) {
    const [isOpen, setOpenPopup] = useState(false)
    const [actionlist, setActions] = useState([])

    const getActions = ({itemId}) => {
        var itemIdStr = itemId + ""

        // http://localhost:3001/api/items
        axios
            .get("https://trashwithus-api.herokuapp.com/api/items", 
            {params: {id: itemIdStr}})
            .then(response => {
                setActions(response.data)
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div 
                className="item"
                onClick={() => {
                    getActions({itemId}); setOpenPopup(true); setIsBlurred(true)
                }}>

                <div className="item-img-container">
                    <img className="item-img" src={imgSrc} alt={name}></img>
                </div>
                <p className="item-name">{name}</p>
            </div>
            
            <Popup 
                isOpen = {isOpen}
                actionlist = {actionlist}
                onClose = {() => {setOpenPopup(false); setIsBlurred(false)}}
                name = {name}
                imgSrc={imgSrc}
                items = {items}
            />
        </div>
    )
}
