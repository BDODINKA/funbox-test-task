import React from 'react'

import { Wrapper } from '../../common/wrapper/Wrapper'

import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.header}>
      <Wrapper>
        <h1 className={style.title}>Ты сегодня покормил кота?</h1>
      </Wrapper>
    </header>
  )
}
