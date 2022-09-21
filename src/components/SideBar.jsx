import React, { useState } from 'react'
import ModalConfig from './ModalConfig'
import ToastComp from './ToastComp'
import useMarkdown from '../customHooks/useMarkdown'
import useFilename from '../customHooks/useFilename'
import { setLocalStorage } from '../helper/helper'

const SideBar = () => {
  const [modal, setModal] = useState(false)
  const [toastSaveContent, setToastSaveContent] = useState(false)
  const [toastErrorFileExtension, setToastErrorFileExtension] = useState(false)
  const { name, setName } = useFilename()
  const { text, setValue } = useMarkdown()

  const handleSave = () => {
    setToastSaveContent(!toastSaveContent)
    setLocalStorage('Markdown', text)
    setLocalStorage('filename', name)
    setTimeout(() => {
      setToastSaveContent(false)
    }, 4000)
  }

  const handleFileChange = e => {
    const [file] = e.target.files
    const [name, extension] = file.name.split('.')
    if (extension !== 'md') {
      setToastErrorFileExtension(true)
      return setTimeout(() => {
        setToastErrorFileExtension(false)
      }, 4000)
    }

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
          <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(text)}`} download={`${name || 'README'}.md`} className='buttons-sidebar' id='button-download'>
            <i className='fa-sharp fa-solid fa-download' />
          </a>
          <label htmlFor="upload-file" className='buttons-sidebar' id='button-upload' >
            <i className='fa-sharp fa-solid fa-upload' />
            <input type="file" accept='.md' onChange={handleFileChange} id='upload-file' />
          </label>
        </header>
        <footer>
          <button onClick={handleSave} className='buttons-sidebar' id='button-save'>
            <i className='fa-sharp fa-solid fa-floppy-disk' />
          </button>
          <button className='buttons-sidebar' onClick={() => setModal(!modal)} id='button-config'>
            <i className='fa-solid fa-sliders' />
          </button>
        </footer>
      </div>

      <ModalConfig isOpen={modal} toggle={() => setModal(!modal)} />

      <ToastComp
        isOpen={toastSaveContent}
        icon='success'
        header='Contenido guardado...'
        body='Tu contenido ha sido guardado en el local Storage' />

      <ToastComp
        isOpen={toastErrorFileExtension}
        icon='danger'
        header='Error con el archivo cargado...'
        body='Solo es soportado los archivos con extensión .md' />
    </>
  )
}

export default SideBar