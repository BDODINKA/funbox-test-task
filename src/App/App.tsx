import React, { useEffect } from 'react'

import './App.css'
import { selectorIsInitialize } from '../common/selectors/selectorsAll'
import { useAppDispatch } from '../utils/hooks/useAppDispatch'
import { useAppSelector } from '../utils/hooks/useAppSelector'

import { InitializeAppTC } from './appReducer'

function App() {
  const dispatch = useAppDispatch()
  const initializeApp = useAppSelector(selectorIsInitialize)

  useEffect(() => {
    dispatch(InitializeAppTC)
  }, [])

  if (!initializeApp) return <>Something Wrong</>

  return (
    <div className="App">
      <header className="App-header">learn react</header>
    </div>
  )
}

export default App
