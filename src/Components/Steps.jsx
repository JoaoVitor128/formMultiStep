import './Steps.css'

import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

const steps = ({currentStep, data, updatefIllHandle}) => {
  return (
    <div className='steps'>
      <div className={`step ${currentStep >= 0 ? "active" : ""}`}>
        <AiOutlineUser />
        <p>Indentificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  )
}

export default steps
