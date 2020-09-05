import * as React from 'react'

function SvgLists(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M17.75 20H2.25C1.01 20 0 18.99 0 17.75V2.25C0 1.01 1.01 0 2.25 0h15.5C18.99 0 20 1.01 20 2.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM2.25 1.5a.75.75 0 00-.75.75v15.5c0 .413.336.75.75.75h15.5a.75.75 0 00.75-.75V2.25a.75.75 0 00-.75-.75H2.25z"
        fill="currentColor"
      />
      <path
        d="M15 6.64H5a.75.75 0 010-1.5h10a.75.75 0 110 1.5zm0 4.11H5a.75.75 0 010-1.5h10a.75.75 0 010 1.5zm-5 4.11H5a.75.75 0 110-1.5h5a.75.75 0 010 1.5z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgLists
