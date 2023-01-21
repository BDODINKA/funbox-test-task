import { useEffect } from 'react'

import { Loader } from '../../common/loader/Loader'
import { selectorAnimalData } from '../../common/selectors/selectorsAll'
import { Wrapper } from '../../common/wrapper/Wrapper'
import { useAppDispatch } from '../../utils/hooks/useAppDispatch'
import { useAppSelector } from '../../utils/hooks/useAppSelector'

import { Card } from './card/Card'
import style from './MainComponent.module.scss'
import { SetDataAppTC } from './mainReducer'

export const MainComponent = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectorAnimalData)

  useEffect(() => {
    dispatch(SetDataAppTC())
  }, [])

  return (
    <main className={style.main}>
      {!data.cats && <Loader />}
      <section className={style.section}>
        <Wrapper>
          {data.cats && (
            <div className={style.content}>
              {data.cats['Royal Canin'].map(item => (
                <Card card={item} key={item.id} />
              ))}
            </div>
          )}
        </Wrapper>
      </section>
    </main>
  )
}
