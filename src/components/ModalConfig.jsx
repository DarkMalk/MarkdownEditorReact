import React from 'react'
import propTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalConfig = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        titulo
      </ModalHeader>
    </Modal>
  )
}

ModalConfig.propTypes = {
  isOpen: propTypes.func
}

export default ModalConfig