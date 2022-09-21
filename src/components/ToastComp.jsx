import React from 'react'
import propTypes from 'prop-types'
import { Toast, ToastHeader, ToastBody } from 'reactstrap'

const ToastComp = ({ isOpen, icon, header, body }) => {
  return (
    <Toast className='toast-save-content' isOpen={isOpen}>
      <ToastHeader icon={icon}>
        { header }
      </ToastHeader>
      <ToastBody>
        { body }
      </ToastBody>
    </Toast>
  )
}

ToastComp.propTypes = {
  isOpen: propTypes.bool,
  icon: propTypes.string,
  header: propTypes.string,
  body: propTypes.string
}

export default ToastComp