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
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            <span>1.2k Views</span>
          </div>
          <div className="metric-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>48 Downloads</span>
          </div>
        </div>
        {footer && <div className="card__footer">{footer}</div>}
      </div>
    </div>
  )
}
