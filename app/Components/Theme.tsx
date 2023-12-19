import React from 'react'

export default function Theme() {
  return (
    <div>
      <select defaultValue={"-Theme-"} className="p-2">
        <option  disabled>-Theme-</option>
        <option>Default</option>
        <option>Merchant</option>
      </select>
    </div>
  )
}
