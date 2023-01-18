import React, { useEffect } from 'react'

import './App.css'
import { selectorErrorMessage, selectorIsInitialize } from '../common/selectors/selectorsAll'
import { useAppDispatch } from '../utils/hooks/useAppDispatch'
import { useAppSelector } from '../utils/hooks/useAppSelector'

import { InitializeAppTC } from './appReducer'

function App() {
  const dispatch = useAppDispatch()
  const initializeApp = useAppSelector(selectorIsInitialize)
  const errorInitMessage = useAppSelector(selectorErrorMessage)

  useEffect(() => {
    dispatch(InitializeAppTC())
  }, [])

  if (initializeApp && errorInitMessage) return <>{errorInitMessage}</>

  return (
    <div className="App">
      <header className="App-header">learn react</header>
    </div>
  )
}

export default App
