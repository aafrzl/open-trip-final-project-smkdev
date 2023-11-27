import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function layoutLogin({ children }: Props) {
  return (
    <main className='min-h-full w-full'>{children}</main>
  )
}
