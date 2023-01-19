import React from 'react'

type PropsType = {
  children?: React.ReactNode
}

export const Wrapper = (props: PropsType) => {
  return (
    <>
      <div>{props.children}</div>
    </>
  )
}
