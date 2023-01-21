import React, { useState } from 'react'

import { PackType } from '../../../api/data'
import { generateClassNames } from '../../../utils/function/generateCSS'

import style from './Card.module.scss'

type PropsType = {
  card: PackType
}

export const Card = (props: PropsType) => {
  const { title, brand, filler, portion, description, gift, weight } = props.card

  const [selected, setSelected] = useState<boolean>(false)
  const [showTitle, setShowTitle] = useState<boolean>(false)

  const onSelectedHandler = () => {
    setSelected(!selected)
  }
  const onMouseFocusHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (selected && event) {
      setShowTitle(true)
    } else {
      setShowTitle(false)
    }
  }

  const onMouseLeaveHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    selected && event && setShowTitle(false)
  }

  let styles: Record<string, string>

  const finalTitle = showTitle && selected ? 'Котэ не одобряет?' : title

  if (selected) {
    styles = generateClassNames(style, true, 'selected')
  } else {
    styles = generateClassNames(style, false)
  }

  return (
    <div
      className={styles.item}
      onClick={onSelectedHandler}
      onMouseEnter={onMouseFocusHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.title}>{finalTitle}</p>
            <h3 className={styles.brand}>{brand}</h3>
            <h5 className={styles.filler}>{filler}</h5>
            <p className={styles.portion}>{portion}</p>
            <p className={styles.gift}>{`${gift} мышь в подарок`}</p>
            <div className={styles.circle}>
              <p className={styles.weight}>{weight}</p>
              <p className={styles.units}>кг</p>
            </div>
          </div>
        </div>
      </div>
      {!selected ? (
        <p className={style.description}>
          {'Чего сидишь? Порадуй котэ'}
          <a href="src/features/Main/card/Card#" className={style.link}>
            купи
          </a>
          {','}
        </p>
      ) : (
        <p className={style.description}>{description}</p>
      )}
    </div>
  )
}
