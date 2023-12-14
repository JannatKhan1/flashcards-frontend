import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import { createSet } from '../features/sets/setSlice'

function NewSet() {
  const { user } = useSelector((state) => state.auth)
  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [setName, setSetName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createSet({ setName }))
      .unwrap()
      .then(() => {
        // We got a good response so navigate the user
        navigate('/sets')
        toast.success('New set created!')
      })
      .catch(toast.error)
  }

  return (
    <>
      <Header/>
      <BackButton url='/' />
      <section className='heading'>
        <h1>Create New Set</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
 
  
        <div className='form-group'>
          <label htmlFor='name'>User Name</label>
          <input type='text' className='form-control' value={name} disabled />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>User Email</label>
          <input type='text' className='form-control' value={email} disabled />
        </div>
        <form onSubmit={onSubmit}> 
          
          <div className='form-group'>
            <label htmlFor='setName'>What would you like to name your set?</label>
            <textarea
              name='setName'
              id='setName'
              className='form-control'
              placeholder='Name of the Set'
              value={setName}
              onChange={(e) => setSetName(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}
 
export default NewSet