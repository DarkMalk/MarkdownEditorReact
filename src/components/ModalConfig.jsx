import React, { useState } from 'react'
import propTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button } from 'reactstrap'
import { useConfigEditor } from '../customHooks/useConfigEditor'
import { convertTextToBool, setLocalStorage } from '../helper/helper'
import ToastComp from './ToastComp'

const ModalConfig = ({ isOpen, toggle }) => {
  const [showToast, setShowToast] = useState(false)
  const { config, setConfig } = useConfigEditor()

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowToast(true)
    const [fontSize, lineNumbers, minimap, wordWrap, fontLigatures, theme] = e.target
    const newConfig = {
      fontSize: Number(fontSize.value),
      lineNumbers: lineNumbers.value,
      minimap: { enabled: convertTextToBool(minimap.value) },
      wordWrap: wordWrap.value,
      fontLigatures: convertTextToBool(fontLigatures.value),
      theme: theme.value
    }
    setConfig(newConfig)
    const newConfigEditor = Object.assign({}, config, newConfig)
    setLocalStorage('config', newConfigEditor)
    setTimeout(() => setShowToast(false), 4000)
  }
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle} centered={true} className='modal'>
        <ModalHeader toggle={toggle}>Configuraciones del editor</ModalHeader>
        <ModalBody>
          <form className='form-config-editor' onSubmit={handleSubmit}>
            <label>
              Font Size
              <Input type="number" min='1' placeholder='Inserta tamaño de fuente...' defaultValue={config.fontSize} />
            </label>
            <label>
              Line Numbers
              <Input type='select' defaultValue={config.lineNumbers}>
                <option disabled>Elige una opción...</option>
                <option value="on">Activado</option>
                <option value="off">Desactivado</option>
              </Input>
            </label>
            <label>
              Minimap
              <Input type='select' defaultValue={config.minimap.enabled}>
                <option disabled>Elige una opción...</option>
                <option value="true">Activado</option>
                <option value="false">Desactivado</option>
              </Input>
            </label>
            <label>
              Word Wrap
              <Input type='select' defaultValue={config.wordWrap}>
                <option disabled>Elige una opción...</option>
                <option value="on">Activado</option>
                <option value="off">Desactivado</option>
              </Input>
            </label>
            <label>
              Font Ligatures
              <Input type='select' defaultValue={config.fontLigatures}>
                <option disabled>Elige una opción...</option>
                <option value="true">Activado</option>
                <option value="false">Desactivado</option>
              </Input>
            </label>
            <label>
              Theme Editor
              <Input type='select' defaultValue={config.theme}>
                <option disabled>Elige una opción...</option>
                <option value="vs">vs-light</option>
                <option value="vs-dark">vs-dark</option>
                <option value="hc-black">hc-black</option>
              </Input>
            </label>
            <ModalFooter>
              <Button color='primary' type='submit'>Save</Button>
              <Button color='danger' type='button' onClick={toggle}>Close</Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
      <ToastComp 
        isOpen={showToast}
        icon='success'
        header='Configuraciones guardadas'
        body='Tus configuraciones han sido guardadas en el local Storage' />
    </>
  )
}

ModalConfig.propTypes = {
  isOpen: propTypes.bool,
  toggle: propTypes.func
}

export default ModalConfig