import React from 'react'

import style from './wrapper.module.scss'

type PropsType = {
  children?: React.ReactNode
}

export const Wrapper = (props: PropsType) => {
  return <div className={style.wrapper}>{props.children}</div>
}
