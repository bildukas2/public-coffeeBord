import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
            <Link className='navbar-brand' to='/'><img src="https://lh3.googleusercontent.com/proxy/p7oM2SoJIoSvHU6gz7uC1_1IqqhX7lL14ujHR4Mq30G3ZlWIQG-87VdKLeY-yAfvtKoGInzSaRwHltdk2MCquWdSedXMTCWlUanFvPegfazf0kQoLtps" width={100}/></Link>
        </div>
    </nav>
)

export default Header
