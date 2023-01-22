import { useEffect } from 'react'

import { Loader } from '../../common/loader/Loader'
import { selectorAnimalData } from '../../common/selectors/selectorsAll'
import { Wrapper } from '../../common/wrapper/Wrapper'
import { useAppDispatch } from '../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../utils/hooks/useAppSelector'

import { Card } from './Card/Card'
import style from './MainComponent.module.scss'
import { SetDataAppTC } from './mainReducer'

export const MainComponent = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectorAnimalData)
  const cats = data.cats

  useEffect(() => {
    dispatch(SetDataAppTC())
  }, [])

  const mappedCats = cats && cats['Нямушка'].map(item => <Card card={item} key={item.id} />)

  return (
    <main className={style.main}>
      {!cats && <Loader />}
      <section className={style.section}>
        <Wrapper>{cats && <div className={style.content}>{mappedCats}</div>}</Wrapper>
      </section>
    </main>
  )
}
