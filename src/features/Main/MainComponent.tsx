import { useEffect } from 'react'

import { selectorAnimalData } from '../../common/selectors/selectorsAll'
import { Wrapper } from '../../common/wrapper/Wrapper'
import { useAppDispatch } from '../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../utils/hooks/useAppSelector'

import { SetDataAppTC } from './mainReducer'

export const MainComponent = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectorAnimalData)

  useEffect(() => {
    dispatch(SetDataAppTC())
  }, [])
  console.log(data.cats)
  if (data.cats) {
    const date = data.cats['Royal Canin'].map(i => i)

    console.log(date)
  }

  if (!data) return <div>Render</div>

  return (
    <main title="main">
      <Wrapper>
        {data.cats &&
          data.cats['Royal Canin'].map(i => (
            <div key={i.gift}>
              <div>{i.brand}</div>
            </div>
          ))}
      </Wrapper>
    </main>
  )
}
