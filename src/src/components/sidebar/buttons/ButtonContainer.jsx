import React from "react"

export default function ButtonContainer({ ...props }) {
  return (
    <button
      {...props}
      className="flex items-center gap-3 rounded p-3 transition-colors hover:bg-gray-500/10"
    />
  )
}
