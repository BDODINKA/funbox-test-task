import React from 'react'

type PropsType = {
  styles: Record<string, string>
  selected: boolean
  count: number
  filler: string
  description: string
  onClick: () => void
}

export const NoticeCard = (props: PropsType) => {
  const { styles, selected, count, description, filler, onClick } = props

  if (count < 1)
    return (
      <p className={`${styles.description} ${styles.description_disabled}`}>
        {`Печалька, ${filler} закончился`}
      </p>
    )

  if (!selected)
    return (
      <p className={styles.description}>
        {'Чего сидишь? Порадуй котэ'}
        <a className={styles.link} onClick={onClick}>
          купи
        </a>
        {','}
      </p>
    )

  return <p className={styles.description}>{description}</p>
}
