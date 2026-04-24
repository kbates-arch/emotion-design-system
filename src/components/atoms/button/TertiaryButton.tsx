import React from 'react'
import Button from './Button'

type Props = Omit<React.ComponentProps<typeof Button>, 'variant'>

export default function TertiaryButton(props: Props) {
  return <Button {...props} variant="tertiary" />
}
