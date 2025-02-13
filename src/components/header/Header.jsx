import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Header() {

const [text,setText] = useState("")
const navigate = useNavigate()

const handleKeyDown = (e) => {

  if(e.keyCode == 13) {
    navigate(`/search/${text}`)
    setText("")
  }


}



  return (
    <div className='header'>
     <nav className='nav container'>
        <img src="https://www.themealdb.com/images/logo-small.png" alt="" />
        <div className="nav-right">
           <Link to="/">
            <button className='home-btn'>Home</button>
           </Link>
            <button className='api-btn'>API</button>
            <input onChange={(e) => setText(e.target.value)} type="text" placeholder='search...' onKeyDown={handleKeyDown} value={text}/>
        </div>

        <div className="burger">
        <IoIosMenu className='icon' size={50}/>
        </div>
     </nav>
    </div>
  )
}

export default Header
