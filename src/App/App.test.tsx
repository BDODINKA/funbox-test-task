import React from 'react'

import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from './App'
import { InitializeAppTC } from './appReducer'
import { store } from './store'

describe('App ', () => {
  it('render App', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(container.children[0]).toHaveClass('spinner')
  })
})

describe('initialize App', () => {
  beforeEach(async () => {
    await store.dispatch(InitializeAppTC())
  })

  it('App isWorking ', () => {
    const isErr = store.getState().app.ErrorMessage

    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(isErr).toBeNull()
  })
})
