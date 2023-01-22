import React from 'react'

import { someError } from '../../common/constants/error'
import { Wrapper } from '../../common/wrapper/Wrapper'

import style from './Crash.module.scss'

type PropsType = {
  errorMessage: string | null
}

export const Crash = (props: PropsType) => {
  return (
    <div className={style.main}>
      <Wrapper>
        <div className={style.content}>
          <div className={style.error}>{props.errorMessage ? props.errorMessage : someError}</div>
          <div className={style.item}>
            <div className={style.item_img} />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
