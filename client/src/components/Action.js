import React, {useState} from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

export default function Action({name, description}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className="action-header" onClick={() => setIsOpen(!isOpen)}>
                <p className="action-name">{name}</p>
                {isOpen ? <FaCaretUp className="action-header-btn" />
                : <FaCaretDown className="action-header-btn" />}
                
            </div>
            
            {isOpen ?
                <div className="action-description">
                    {description}
                </div>
            : null}

        </div>
    )
}
