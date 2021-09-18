import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Action from './Action'

export default function Popup({isOpen, onClose, actionlist, name}) {
    if (!isOpen) return null

    return (
        <div className="popup">
            <div className="popup-header">
                

                <h2 className="popup-header">{name}</h2>
                <div className="close" onClick={onClose}>
                    <FaTimes />
                </div>
            </div>
            

            <div className="popup-container">
                <div className="popup-img-container popup-column-1">
                    <div className="popup-img"></div>
                </div>

                <div className="popup-column-2">
                {actionlist.map((action) => (
                    <Action 
                        key = {action.id}
                        name = {action.name}
                        description = {action.description}
                        />
                    ))}
                </div>
            </div>

            
            
        </div>
    )
}
