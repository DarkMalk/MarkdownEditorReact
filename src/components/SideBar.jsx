import React, { useState } from 'react'
import ModalConfig from './ModalConfig'
import useMarkdown from '../customHooks/useMarkdown'
import useFilename from '../customHooks/useFilename'
import { setLocalStorage } from '../helper/helper'
import { Toast, ToastHeader, ToastBody } from 'reactstrap'

const SideBar = () => {
  const [modal, setModal] = useState(false)
  const [toast, setToast] = useState(false)
  const { name, setName } = useFilename()
  const { text, setValue } = useMarkdown()

  const handleSave = () => {
    setTimeout(() => {
      setToast(!toast)
      setLocalStorage('Markdown', text)
      setLocalStorage('filename', name)
    }, 1500)
    setToast(!toast)
  }

  const handleFileChange = e => {
    const [file] = e.target.files
    const name = file.name.split('.')[0]
    setName(name)

    const newReader = new FileReader()
    newReader.addEventListener('load', e => {
      const resultFile = e.target.result
      setValue(resultFile)
    })
    newReader.readAsText(file)
  }

  return (
    <>
      <div className='side-bar'>
        <header>
          <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(text)}`} download={`${name || 'README'}.md`} className='buttons-sidebar'><i className='fa-sharp fa-solid fa-download' /></a>
          <label htmlFor="upload-file" className='buttons-sidebar'>
            <i className='fa-sharp fa-solid fa-upload' />
            <input type="file" accept='.md' onChange={handleFileChange} id='upload-file' />
          </label>
        </header>
        <footer>
          <button onClick={handleSave} className='buttons-sidebar'>
            <i className='fa-sharp fa-solid fa-floppy-disk' />
          </button>
          <button className='buttons-sidebar' onClick={() => setModal(!modal)}>
            <i className='fa-solid fa-sliders' />
          </button>
          <ModalConfig isOpen={modal} toggle={() => setModal(!modal)} />
        </footer>
      </div>
      <Toast className='toast-save-content' isOpen={toast}>
        <ToastHeader icon='success'>
          Save content
        </ToastHeader>
        <ToastBody>
          Your content has been saved to local storage...
        </ToastBody>
      </Toast>
    </>
  )
}

export default SideBar