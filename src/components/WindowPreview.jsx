import React, { useState } from 'react'
import useMarkdown from '../customHooks/useMarkdown'
import useChangeView from '../customHooks/useChangeView'

const WindowPreview = () => {
  const [maxWidth, setMaxWidth] = useState(false)
  const { markdown } = useMarkdown()
  const { changeView, setChangeView } = useChangeView()

  return (
    <div className={`container-preview ${maxWidth ? 'maximize-window' : ''}`} style={changeView ? { zIndex: 2 } : null}>
      <div className='buttons-window'>
        <div className='button-mobile'>
          <button onClick={setChangeView}>Toggle editor</button>
        </div>
        <button onClick={() => setMaxWidth(!maxWidth)} className='button-maximize'><i className='fa-solid fa-maximize' /></button>
      </div>
      <div className='preview-markdown' dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  )
}

export default WindowPreview