import React from "react"

const Splitter: React.FC<IconProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      strokeLinecap="round"
      stroke="rgb(161 161 170 / 50%)"
      height="20px"
      width="110px"
      style={{ display: "block", marginInline: "auto", marginBlock: "5rem 2rem" }}
      {...props}
    >
      <line x1="5" y1="5" x2="25" y2="15"></line>
      <line x1="25" y1="5" x2="45" y2="15"></line>
      <line x1="45" y1="5" x2="65" y2="15"></line>
      <line x1="65" y1="5" x2="85" y2="15"></line>
      <line x1="85" y1="5" x2="105" y2="15"></line>
    </svg>
  )
}

export default Splitter
