import React from 'react'

type PropsType = {
  errorMessage: string | null
}

export const Crash = (props: PropsType) => {
  return <div>{props.errorMessage}</div>
}
