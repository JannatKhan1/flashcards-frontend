import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { getSet } from '../features/sets/setSlice'
import { useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'


function ViewSet() {
  
  const { set } = useSelector((state) => state.sets)

  const dispatch = useDispatch()
  const { setId } = useParams()

  useEffect(() => {
    dispatch(getSet(setId)).unwrap().catch(toast.error)
  }, [setId, dispatch])



  if (!set) {
    return <Spinner />
  }

  return (
    <div className='ticket-page'>
      <header className='ticket-header'>
        <BackButton url='/sets' />
        <h2>
          Set ID: {set._id}
        </h2>
        <h3>
          Date Submitted: {new Date(set.createdAt).toLocaleString('en-US')}
        </h3>
        <h3>Set Name: {set.setName}</h3>
        <hr />
      </header>
    </div>
  )
}

export default ViewSet