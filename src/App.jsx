import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { FiSend } from "react-icons/fi"

import UseForm from './Components/UseForm'
import ReviewForm from './Components/ReviewForm'
import Thanks from './Components/Thanks'
import Steps from './Components/Steps'

import './App.css'

import { useForm } from "./hooks/UseHookForm"
import { useState } from 'react'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {

  const [data, setData] = useState(formTemplate);
  
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UseForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
     <Thanks data={data}/>]
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
    <div className='app'>

      <div className="header">
        <h2>Faça sua avalição</h2>
        <p>Ficamos felizes  com sua compra, deixe a avaliação do produto!</p>
      </div>

      <div className="formContainer">
        <Steps currentStep={currentStep} />

        <form onSubmit={(e) => { changeStep(currentStep, e) }}>

          <div className="InputContainer">
            {currentComponent}
          </div>

          <div className="action">

            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}> <GrFormPrevious /> <span>Voltar</span></button>
            )}

            {isLastStep ? (
              <button><span>Enviar</span>  <FiSend />  </button>
            ) : (
              <button onClick={() => changeStep(currentStep + 1)}><span>Avançar</span>  <GrFormNext />  </button>
            )}

          </div>
        </form>

      </div>

    </div>

  )
}

export default App
