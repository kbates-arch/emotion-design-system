import React from 'react'
import DownloadButton from './DownloadButton'

export default {
  title: 'Atoms/DownloadButton',
  component: DownloadButton,
}

export const Default = () => <DownloadButton label="Download sample" />

export const WithHref = () => (
  <DownloadButton label="Download file" href="/assets/hero.png" filename="hero.png" />
)
