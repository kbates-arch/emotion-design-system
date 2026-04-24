import React from 'react'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'tertiary' | 'link'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  children?: React.ReactNode
  label?: string
  href?: string
  onClick?: () => void
  variant?: Variant
  size?: Size
  disabled?: boolean
  full?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  full = false,
  type = 'button',
}: Props) {
  const className = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    full ? 'btn--full' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const content = children ?? <span className="btn__label">{label}</span>

  if (href) {
    return (
      <a
        className={className}
        href={href}
        onClick={onClick}
        aria-disabled={disabled}
        role="button"
      >
        {content}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled} type={type}>
      {content}
    </button>
  )
}
