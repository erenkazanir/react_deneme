import * as React from 'react'

function SvgMessage(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 19" fill="none" {...props}>
      <path
        d="M17.25.018H2.75A2.753 2.753 0 000 2.77v12.495a2.754 2.754 0 002.75 2.753h14.5A2.754 2.754 0 0020 15.265V2.77A2.753 2.753 0 0017.25.018zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367a.81.81 0 01-.9-.002L1.5 3.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H2.75c-.69 0-1.25-.56-1.25-1.25V5.24l7.24 4.83a2.265 2.265 0 002.52.001l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25v.003z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgMessage
