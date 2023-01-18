import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Api } from '../api/Api'

export type LoadType = 'idle' | 'succeed' | 'failed' | 'loading'

type Error = null | string

export type LoadStateType = {
  loading: LoadType
  ErrorMessage: Error
  isInitialize: boolean
}

export const InitializeAppTC = createAsyncThunk<{}, undefined, { rejectValue: { error: Error } }>(
  'APP/INITIALIZE-APP',
  async (arg, { rejectWithValue }) => {
    try {
      return await Api.getAppStatus()
    } catch (reason) {
      return rejectWithValue(reason as { error: Error })
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
    builder.addCase(InitializeAppTC.rejected, (state, action) => {
      state.isInitialize = true
      if (action.payload) {
        state.ErrorMessage = action.payload.error
      } else {
        state.ErrorMessage = 'Something Wrong'
      }
    })
  },
})

export const appReducer = slice.reducer

export const { PreloaderAC, ErrorAC } = slice.actions
