import React from 'react'
import Button from '../button/Button'
import './DownloadButton.css'

type Props = {
  label?: string
  filename?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'tertiary' | 'link'
}

export default function DownloadButton({
  label = 'Download',
  filename = 'file.txt',
  href,
  size = 'md',
  variant = 'primary',
}: Props) {
  const handleClick = () => {
    if (href) {
      const a = document.createElement('a')
      a.href = href
      a.download = filename
      a.rel = 'noreferrer'
      document.body.appendChild(a)
      a.click()
      a.remove()
      return
    }

    const blob = new Blob(['Hello from the design system'], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <Button variant={variant} size={size} onClick={handleClick}>
      <span className="download-button__label">{label}</span>
    </Button>
  )
}
