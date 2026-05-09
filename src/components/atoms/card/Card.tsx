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
        <div className="card__metrics">
          <div className="metric-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"></path></svg>
            <span>1.2k Loves</span>
          </div>
          <div className="metric-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart"><path d="M6 6h15l-1.5 9h-13z"></path><circle cx="9" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle></svg>
            <span>48 Sold</span>
          </div>
        </div>
        {footer && <div className="card__footer">{footer}</div>}
      </div>
    </div>
  )
}
