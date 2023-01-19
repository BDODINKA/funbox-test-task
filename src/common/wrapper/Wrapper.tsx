import React from 'react'

type PropsType = {
  children?: React.ReactNode
}

export const Wrapper = (props: PropsType) => {
  return (
    <>
      <section>{props.children}</section>
    </>
  )
}
