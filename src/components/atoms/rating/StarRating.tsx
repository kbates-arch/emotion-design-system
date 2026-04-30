import React, { useState, useEffect, useRef } from 'react'

type Props = {
  value?: number
  onChange?: (value: number) => void
  size?: number
  readOnly?: boolean
  className?: string
}

function clamp(v: number, a = 0, b = 5) {
  return Math.max(a, Math.min(b, v))
}

export default function StarRating({ value = 0, onChange, size = 28, readOnly = false, className = '' }: Props) {
  const [internal, setInternal] = useState<number>(value)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => setInternal(value), [value])



  const handleClick = (e: React.MouseEvent, index: number) => {
    if (readOnly) return
    const target = e.currentTarget as HTMLDivElement
    const rect = target.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const v = percent < 0.5 ? index - 0.5 : index
    const newVal = clamp(v)
    setInternal(newVal)
    onChange?.(newVal)
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (readOnly) return
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      const next = clamp(internal - 0.5)
      setInternal(next)
      onChange?.(next)
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      const next = clamp(internal + 0.5)
      setInternal(next)
      onChange?.(next)
    }
  }

  const display = internal

  return (
    <div
      ref={rootRef}
      style={{ background: 'var(--color-rating-bg)', padding: 8, borderRadius: 8, display: 'inline-block' }}
      onKeyDown={handleKey}
      tabIndex={readOnly ? -1 : 0}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={5}
      aria-valuenow={display}
      className={className}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {Array.from({ length: 5 }).map((_, i) => {
          const index = i + 1
          const fill = Math.max(0, Math.min(1, display - (index - 1)))
          const pct = Math.round(fill * 100)

          return (
            <div
              key={index}
              style={{ width: size, height: size, position: 'relative', display: 'inline-block', cursor: readOnly ? 'default' : 'pointer' }}
              onClick={(e) => handleClick(e, index)}
            >
              {/* Outline star (purple) */}
              <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.5} style={{ display: 'block', color: 'var(--color-star-fill)' }}>
                <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.8 24 12 19.897 4.2 24l1.98-8.694L.48 9.75l7.732-1.732L12 .587z" />
              </svg>

              {/* Filled star clipped by percentage (light slate/white) */}
              <div style={{ width: `${pct}%`, overflow: 'hidden', position: 'absolute', left: 0, top: 0, height: size }}>
                <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ display: 'block', color: 'var(--color-star-fill)' }}>
                  <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.556L19.8 24 12 19.897 4.2 24l1.98-8.694L.48 9.75l7.732-1.732L12 .587z" />
                </svg>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
