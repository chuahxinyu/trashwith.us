import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function AddAction({isOpen, onClose}) {
    if (!isOpen) return null

    return (
        <div className="popup">
            <div className="popup-header">
                <h2 className="popup-header">Add an action</h2>
                <div className="close" onClick={onClose}>
                    <FaTimes />
                </div>
            </div>
            
            <div>

            </div>

        </div>
    )
}
