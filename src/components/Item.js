import React, {useState} from 'react'
import Popup from './Popup'

export default function Item({name, actionlist, setIsBlurred}) {
    const [isOpen, setOpenPopup] = useState(false)

    return (
        <div>
            <div className="item" onClick={() => {setOpenPopup(true); setIsBlurred(true)}}>
                <div className="item-img-container">
                    <div className="item-img"></div>
                </div>
                <p className="item-name">{name}</p>
            </div>
            
            <Popup 
                isOpen = {isOpen}
                actionlist = {actionlist}
                onClose = {() => {setOpenPopup(false); setIsBlurred(false)}}
                name = {name}
            />
        </div>
    )
}
