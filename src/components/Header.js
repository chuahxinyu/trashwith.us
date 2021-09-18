import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
    return (
        <div className="header">
            {/* <div className="header-wave"></div> */}
            <h1 className="logo">wtdwyc</h1>
            <div className="header-icons-container">
                <a href="https://github.com/Jaee-C" target="_blank" rel="noreferrer"> <FaGithub className="github-btn" /> </a>
                <a href="https://github.com/chuahxinyu" target="_blank" rel="noreferrer"><FaGithub className="github-btn" /> </a>
            </div>
            
        </div>
    )
}
