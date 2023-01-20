import React from 'react'

import { PackType } from '../../api/data'

import style from './Card.module.scss'

type PropsType = {
  card: PackType
}
export const Card = (props: PropsType) => {
  const { title, brand, filler, portion, description, gift, weight } = props.card

  return (
    <div className={style.item}>
      <div className={style.wrapper}>
        <div className={style.card}>
          <div className={style.content}>
            <p className={style.title}>{title}</p>
            <h3 className={style.brand}>{brand}</h3>
            <h5 className={style.filler}>{filler}</h5>
            <p className={style.portion}>{portion}</p>
            <p className={style.gift}>{`${gift} мышь в подарок`}</p>
            <div className={style.circle}>
              <p className={style.weight}>{weight}</p>
              <p className={style.units}>кг</p>
            </div>
          </div>
        </div>
      </div>
      <p className={style.description}>
        {description},
        <a href="#" className={style.link}>
          купи
        </a>
      </p>
    </div>
  )
}
