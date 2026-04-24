import React from 'react'
import Button from './Button'

type Props = Omit<React.ComponentProps<typeof Button>, 'variant'>

export default function SecondaryButton(props: Props) {
  return <Button {...props} variant="secondary" />
}
