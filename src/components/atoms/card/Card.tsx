import React from 'react'
import './Card.css'

type Props = {
  title?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
  className?: string
  thumbnail?: string
  horizontal?: boolean
}

export default function Card({ title, children, footer, className, thumbnail, horizontal }: Props) {
  const classes = ['card', className, horizontal ? 'card--horizontal' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {thumbnail && (
        <div className="card__media">
          <img src={thumbnail} alt={typeof title === 'string' ? title : 'card image'} />
        </div>
      )}

      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}
        <div className="card__body">{children}</div>
        {footer && <div className="card__footer">{footer}</div>}
      </div>
    </div>
  )
}
