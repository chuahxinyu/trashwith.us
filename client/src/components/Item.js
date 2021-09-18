import React, {useState} from 'react'
import Popup from './Popup'

export default function Item({name, imgSrc, actionlist, setIsBlurred}) {
    const [isOpen, setOpenPopup] = useState(false)
    return (
        <div>
            <div className="item" onClick={() => {setOpenPopup(true); setIsBlurred(true)}}>
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
            />
        </div>
    )
}
