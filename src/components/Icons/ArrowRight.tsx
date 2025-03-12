import React from "react"

const ArrowRight: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      focusable="false"
      height="1.5em"
      width="1.5em"
      strokeWidth="1.5"
      stroke="currentColor"
      style={{ display: "flex", marginInlineEnd: "0.6em" }}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  )
}

export default ArrowRight
