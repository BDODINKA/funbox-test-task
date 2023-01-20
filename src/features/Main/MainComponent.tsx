import { useEffect } from 'react'

import { Card } from '../../common/card/Card'
import { Loader } from '../../common/loader/Loader'
import { selectorAnimalData } from '../../common/selectors/selectorsAll'
import { Wrapper } from '../../common/wrapper/Wrapper'
import { useAppDispatch } from '../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../utils/hooks/useAppSelector'

import style from './MainComponent.module.scss'
import { SetDataAppTC } from './mainReducer'

export const MainComponent = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectorAnimalData)

  useEffect(() => {
    dispatch(SetDataAppTC())
  }, [])

  if (!data.cats) return <Loader />

  return (
    <main className={style.main}>
      <section>
        <Wrapper>
          {data.cats && data.cats['Royal Canin'].map(item => <Card card={item} key={item.id} />)}
        </Wrapper>
      </section>
    </main>
  )
}
