import React, { useState } from 'react'

import { Wrapper } from '../../common/wrapper/Wrapper'

import style from './Crash.module.scss'

type PropsType = {
  errorMessage: string | null
}

export const Crash = (props: PropsType) => {
  const [showError, setShowError] = useState<boolean>(false)

  const onFocusMouseHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event && setShowError(true)
  }
  const onLeaveMouseHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event && setShowError(false)
  }

  return (
    <div className={style.main}>
      <Wrapper>
        <div className={style.content}>
          <div className={style.item}></div>
          <div className={style.item_cats}></div>
          <div
            className={style.error}
            onMouseEnter={onFocusMouseHandler}
            onMouseLeave={onLeaveMouseHandler}
          >
            {showError && 'ssssss'}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
