import React from 'react'
import Button from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
}

export const Primary = () => <Button variant="primary" size="md">Primary</Button>
export const Secondary = () => <Button variant="secondary" size="md">Secondary</Button>
export const Ghost = () => <Button variant="ghost" size="md">Ghost</Button>
export const Danger = () => <Button variant="danger" size="md">Delete</Button>

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12 }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
)

export const FullWidth = () => <Button full size="md">Full width</Button>
export const Outline = () => <Button variant="outline">Outline</Button>
export const Tertiary = () => <Button variant="tertiary">Tertiary</Button>
export const Link = () => <Button variant="link">Link style</Button>
