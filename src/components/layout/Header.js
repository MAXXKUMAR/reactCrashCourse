import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1> My Todo List </h1>
            <Link className='lnk' style={linkStyle} to='/'>Home</Link> | <Link className='lnk' style={linkStyle} to='/about'>About</Link>
        </header>
    )
}
const headerStyle ={
    background: '#000',
    color: '#fff',
    textAlign: 'center',
    padding:'10px'
}
const linkStyle={
    color:'#fff',
}