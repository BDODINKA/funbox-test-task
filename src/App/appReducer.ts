import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LoadType = 'idle' | 'succeed' | 'failed' | 'loading'

type Error = null | string

export type LoadStateType = {
  loading: LoadType
  ErrorMessage: Error
  isInitialize: boolean
}

export const InitializeAppTC = createAsyncThunk(
  'APP/INITIALIZE-APP',
  async (arg, { dispatch, rejectWithValue }) => {
    try {
      // const res = await
    } catch (reason) {
      return rejectWithValue(reason)
    }
  }
)

const slice = createSlice({
  name: 'APP',
  initialState: {
    loading: 'idle',
    ErrorMessage: null,
    isInitialize: false,
  } as LoadStateType,
  reducers: {
    PreloaderAC: (state, action: PayloadAction<{ status: LoadType }>) => {
      state.loading = action.payload.status
    },

    ErrorAC: (state, action: PayloadAction<{ error: Error }>) => {
      state.loading = 'failed'
      state.ErrorMessage = action.payload.error
    },
  },
  extraReducers: builder => {
    builder.addCase(InitializeAppTC.fulfilled, state => {
      state.isInitialize = true
    })
  },
})

export const appReducer = slice.reducer

export const { PreloaderAC, ErrorAC } = slice.actions
