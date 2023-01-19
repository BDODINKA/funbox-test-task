import React from 'react'

import { PackType } from '../../api/data'

type PropsType = {
  card: PackType
}
export const Card = (props: PropsType) => {
  const { title, brand, filler, portion, description, gift, weight } = props.card

  return (
    <>
      <div className={'wrapper'}>
        <div className={'card'}>
          <div className={'content'}>
            <p className={'title'}>{title}</p>
            <h3 className={'brand'}>{brand}</h3>
            <h5 className={'filler'}>{filler}</h5>
            <p className={'portion'}>{portion}</p>
            <p className={'gift'}>{gift}</p>
            <div className={'circle'}>
              <p className={'weight'}>{weight}</p>
              <p className={'units'}>кг</p>
            </div>
          </div>
        </div>
      </div>
      <p className={'description'}>{description}</p>
    </>
  )
}
