import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSets } from '../features/sets/setSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import SetItem from '../components/SetItem'

function Sets() {
  const { sets } = useSelector((state) => state.sets)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSets())
  }, [dispatch])

  if (!sets) {
    return <Spinner />
  }
  
  return (
    <>
      <BackButton url='/'/>
      <h1> Your Sets</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Set Name</div>
          <div>Action</div>
        </div>
        {sets.map((set) => (
          <SetItem key={set._id} set={set} />
        ))}
      </div>
    </>
  )
}

export default Sets