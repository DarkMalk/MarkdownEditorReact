import React, { useState } from 'react'
import ModalConfig from './ModalConfig'
import useMarkdown from '../customHooks/useMarkdown'
import useFilename from '../customHooks/useFilename'

const SideBar = () => {
  const [modal, setModal] = useState(false)
  const { name } = useFilename()
  const { setValue, text } = useMarkdown()

  const handleSave = () => {
    localStorage.setItem('Markdown', JSON.stringify(text))
    localStorage.setItem('filename', JSON.stringify(name))
  }

  const handleFileChange = e => {
    const [ file ] = e.target.files
    
    const newReader = new FileReader()
    newReader.addEventListener('load', e => {
      const resultFile = e.target.result
      setValue(resultFile)
    })
    newReader.readAsText(file)
  }

  return (
    <div className='side-bar'>
      <header>
        <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(text)}`} download={`${name || 'README'}.md`} className='buttons-sidebar'><i className='fa-sharp fa-solid fa-download' /></a>
        <label htmlFor="upload-file" className='buttons-sidebar'>
          <i className='fa-sharp fa-solid fa-upload' />
          <input type="file" accept='.md' onChange={handleFileChange} id='upload-file' />
        </label>
      </header>
      <footer className='d-flex flex-column gap-2 align-items-center'>
        <button onClick={handleSave} className='buttons-sidebar'>
          <i className='fa-sharp fa-solid fa-floppy-disk' />
        </button>
        <button className='buttons-sidebar' onClick={() => setModal(!modal)}>
          <i className='fa-solid fa-sliders' />
        </button>
        <ModalConfig isOpen={modal} toggle={() => setModal(!modal)}/>
      </footer>
    </div>
  )
}

export default SideBar