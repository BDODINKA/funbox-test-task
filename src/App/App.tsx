import React, { useEffect } from 'react'

import './App.css'
import { selectorErrorMessage, selectorIsInitialize } from '../common/selectors/selectorsAll'
import { Crash } from '../features/Crash/Crash'
import { Header } from '../features/Header/Header'
import { MainComponent } from '../features/Main/MainComponent'
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

  if (!initializeApp) return <>Render</>

  return (
    <>
      {initializeApp && errorInitMessage ? (
        <Crash errorMessage={errorInitMessage} />
      ) : (
        <>
          <Header />
          <MainComponent />
        </>
      )}
    </>
  )
}

export default App
