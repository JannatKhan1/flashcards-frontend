import axios from 'axios'

const API_URL = '/api/sets/'

// Create new set
const createSet = async (setData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, setData, config)

  return response.data
}

// Get user sets
const getSets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Get user set
const getSet = async (setId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + setId, config)

  return response.data
}



// Delete sets
const deleteSet = async (setId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + setId, config)

  return response.data
}

// Update sets
const updateSet = async (setId,setData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.put(API_URL +'updateSet/'+ setId,setData, config)

  return response.data
}



const setService = {
  createSet,
  getSets,
  getSet,
  deleteSet,
  updateSet,
}

export default setService