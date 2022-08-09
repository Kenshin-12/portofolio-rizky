import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillFile} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
      <nav>
        <ul> 
          <li><Link to="/"><AiFillHome className='n-icon'/> Home</Link></li>
          <li><Link to="/about"><FaUserAlt className='n-icon'/> About</Link></li>
          <li><Link to="/experience"><BiBook className='n-icon'/> Experiences</Link></li>
          <li><Link to="/portofolio"><AiFillFile className='n-icon'/> Project</Link></li>
          <li><Link to="/contact"><BsFillTelephoneFill className='n-icon'/> Contact</Link></li>
        </ul>
      </nav>
      
  )
}

export default Nav