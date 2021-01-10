import * as React from "react"

function Search(props) {
  return (
    <svg
      viewBox="0 0 640 640"
      width={24}
      height={24}
      {...props}
    >
      <defs>
        <path
          d="M523.59 275.11c0 125.67-98.39 227.7-219.59 227.7S84.41 400.78 84.41 275.11c0-125.67 98.39-227.7 219.59-227.7s219.59 102.03 219.59 227.7z"
          id="prefix__a"
        />
        <path d="M512.52 627l-97.03-159.32" id="prefix__b" />
      </defs>
      <use xlinkHref="#prefix__a" fill="#03d2f8" fillOpacity={0} />
      <use
        xlinkHref="#prefix__a"
        fillOpacity={0}
        stroke="#43443f"
        strokeWidth={13}
      />
      <g>
        <use
          xlinkHref="#prefix__b"
          fillOpacity={0}
          stroke="#43443f"
          strokeWidth={14}
        />
      </g>
    </svg>
  )
}

export default Search