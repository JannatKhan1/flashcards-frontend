import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import setService from './setService'
import { extractErrorMessage } from '../../utils'

const initialState = {
  sets: [],
  set: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new set
export const createSet = createAsyncThunk(
  'sets/create',
  async (setData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await setService.createSet(setData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user sets
export const getSets = createAsyncThunk(
  'sets/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await setService.getSets(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user set
export const getSet = createAsyncThunk(
  'sets/get',
  async (setId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await setService.getSet(setId, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()

      return thunkAPI.rejectWithValue(message)
    }
  }
)


// Delete set
export const deleteSet = createAsyncThunk(
  'sets/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await setService.deleteSet(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Update set
export const updateSet = createAsyncThunk(
  'sets/update',
  async ({setId, setData}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await setService.updateSet(setId, setData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)



export const setSlice = createSlice({
  name: 'set',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSet.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSet.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createSet.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSets.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSets.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sets = action.payload
      })
      .addCase(getSets.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSet.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSet.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.set = action.payload
      })
      .addCase(getSet.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteSet.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteSet.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sets = state.sets.filter(
          (set) => set._id !== action.payload.id
        )
      })
      .addCase(deleteSet.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateSet.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateSet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const { _id, setName } = action.payload; // Make sure to use _id
        const existingSetIndex = state.sets.findIndex((set) => set._id === _id);
      
        if (existingSetIndex !== -1) {
          // Create a new object with the updated description
          const updatedSet = { ...state.sets[existingSetIndex], setName };
      
          // Update the state with the modified set
          state.sets[existingSetIndex] = updatedSet;
        }
      })
      
      .addCase(updateSet.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = setSlice.actions
export default setSlice.reducer