import React from 'react'
import Button from './Button'

type Props = Omit<React.ComponentProps<typeof Button>, 'variant'>

export default function GhostButton(props: Props) {
  return <Button {...props} variant="ghost" />
}
