import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {deleteSet} from '../features/sets/setSlice'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function SetItem({ set }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () => {
    console.log(set._id)
    dispatch(deleteSet(set._id))
      .then((response) => {
        console.log(response)
        toast.success('Set Deleted Successfully');
        window.location.reload()
        navigate('/sets')
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }
  return (
    <div className='ticket'>
      <div>{new Date(set.createdAt).toLocaleString('en-US')}</div>
      <div>{set.setName}</div>
      <div className='button-container'>
        <Link to={`/set/${set._id}`} className='btn btn-reverse btn-sm'>
          View
        </Link>
        <Link to={`/updateSet/${set._id}`} className='btn btn-reverse btn-sm' style={{backgroundColor:'green'}}>
          Edit
        </Link>
      
        <button onClick={handleClick} className="btn btn-sm btn-danger mx-3">Delete</button>
        <Link to={`/updateSet/${set._id}`} className='btn btn-reverse btn-sm' style={{backgroundColor:'green'}}>
          Edit
        </Link>
      </div>
    </div>
  )
}

export default SetItem