import React from 'react'
import './DownloadButton.css'

type Props = {
  label?: string
  filename?: string
  href?: string
}

/**
 * I am placing this component in `atoms` because it's a single, reusable
 * UI control (a button) with no internal composition — it is an atomic element.
 */
export default function DownloadButton({
  label = 'Download',
  filename = 'file.txt',
  href,
}: Props) {
  // If href is provided, create an anchor download; otherwise trigger a blob download fallback.
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

    // Fallback: download a small text file
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
    <button
      type="button"
      className="download-button download-button--primary"
      onClick={handleClick}
      aria-label={label}
    >
      <span className="download-button__label">{label}</span>
    </button>
  )
}
