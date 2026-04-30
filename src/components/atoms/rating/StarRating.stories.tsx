import React, { useState } from 'react'
import StarRating from './StarRating'

export default {
  title: 'Atoms/StarRating',
  component: StarRating,
}

export const Interactive = () => {
  const [value, setValue] = useState(2.5)
  return (
    <div style={{ maxWidth: 420 }}>
      <StarRating value={value} onChange={(v) => setValue(v)} />
      <div style={{ marginTop: 12 }} className="text-gray-800">Current: {value}</div>
    </div>
  )
}
