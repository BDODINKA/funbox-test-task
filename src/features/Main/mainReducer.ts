import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Api } from '../../api/Api'
import { AnimalType } from '../../api/data'
import { LoadType } from '../../App/appReducer'

type Error = null | string

export type StateType = {
  loading: LoadType
  animalData: AnimalType
  ErrorMessage: string | null
}

type ResponseDataType = {
  status: number
  data: AnimalType
  error?: string
}

export const SetDataAppTC = createAsyncThunk<
  ResponseDataType,
  undefined,
  { rejectValue: { error: Error } }
>('MAIN/MAIN-APP', async (arg, { dispatch, rejectWithValue }) => {
  dispatch(PreloaderAC({ status: 'loading' }))
  try {
    const res = await Api.getGoods()

    return res as ResponseDataType
  } catch (reason) {
    return rejectWithValue(reason as { error: Error })
  } finally {
    dispatch(PreloaderAC({ status: 'succeed' }))
  }
})

const slice = createSlice({
  name: 'MAIN',
  initialState: {
    loading: 'idle',
    ErrorMessage: null,
    animalData: {},
  } as StateType,

  reducers: {
    PreloaderAC: (state, action: PayloadAction<{ status: LoadType }>) => {
      state.loading = action.payload.status
    },
  },
  extraReducers: builder => {
    builder.addCase(SetDataAppTC.fulfilled, (state, action) => {
      state.animalData = action.payload.data
    })
    builder.addCase(SetDataAppTC.rejected, (state, action) => {
      if (action.payload) {
        state.ErrorMessage = action.payload.error
      } else {
        state.ErrorMessage = 'Something Wrong'
      }
    })
  },
})

export const mainReducer = slice.reducer

export const { PreloaderAC } = slice.actions
