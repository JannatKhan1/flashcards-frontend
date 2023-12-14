import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { FaNoteSticky } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'



function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    navigate('/')
  }
 
  return (
    <header className='header' >
     <div className='logo' style={{ color: '#550073', fontWeight: 'bold' }}>
 
  <Link to='/'>FlashCards</Link>
 
</div>
      <ul>
    {user ? (
          <li>
            <button className='btn btn-reverse' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
            <li>
              <Link to='/about'>
                <FcAbout /> About
              </Link>
            </li>
            <li>
              <Link to='/tutorial'>
                <FaNoteSticky /> Tutorial
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header