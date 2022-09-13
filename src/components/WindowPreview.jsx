import React, { useState } from 'react'
import useMarkdown from '../customHooks/useMarkdown'

const WindowPreview = () => {
  const { markdown } = useMarkdown()
  const [maxWidth, setMaxWidth] = useState(false)
  const maxWindow = () => setMaxWidth(!maxWidth)
  return (
    <div className={`container-preview ${maxWidth ? 'maximize-window' : ''}`}>
      <div className='buttons-window'>
        <button onClick={maxWindow} className='button-maximize'><i className='fa-solid fa-maximize' /></button>
      </div>
      <div className='preview-markdown' dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  )
}

export default WindowPreview