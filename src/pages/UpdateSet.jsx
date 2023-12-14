import { updateSet } from "../features/sets/setSlice"
import { useSelector, useDispatch } from "react-redux"
import BackButton from "../components/BackButton"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom" 
import {toast} from 'react-toastify'


function UpdateSet() {
  const { set } = useSelector((state) => state.sets)
  const [setName, setSetName] = useState(set.setName);
  const { setId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()



  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(updateSet({ setId:setId, setData:{setName:setName} }))
      .unwrap()
      .then(() => {
        console.log(setName)
        // We got a good response so navigate the user
        navigate('/sets')
        toast.success('Set Updated')
      })
      .catch(toast.error)
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
      <hr />
        <div className='form-group'style={{marginTop:"20px"}}>
        <label htmlFor='setName'>Set Name</label>
        <textarea
          name='setName'
          id='setName'
          className='form-control'
          placeholder='Set Name'
          value= {setName}
          onChange={(e) => setSetName(e.target.value)}
        ></textarea>
      </div>  
    </header>

        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <button className='btn btn-block' style={{ backgroundColor: 'blue', color: 'white' }}>Save</button>
          </div>
        </form>
    
    </div>
   
  )
}

export default UpdateSet