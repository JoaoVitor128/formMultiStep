import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs'

import './Thanks.css'

const emojiData = {
  unsatisfield:< BsFillEmojiFrownFill/>,
  neutral:< BsFillEmojiNeutralFill/>,
  satisfield:< BsFillEmojiSmileFill/>,
  very_satisfied:< BsFillEmojiHeartEyesFill/>,
}

const Thanks = ({data}) => {

  const review = data.review

  return (
    <div className='thanksContainer'>
      <h2>Falta Pouco...</h2>
      <p>A sua opnião é muito importante, em breve você receberá um cupom de 10% de desconto para sua próxima compra</p>
      <p>Para concluir sua avaliação clique no botão de Enviar a baixo.</p>
      <h3>Aqui está um resumo da avaliação de {data.name} com o produto:</h3>

      <div className="reviewData">
        <p>Sua Satisficidade: {emojiData[data.review]}</p>
        <p>Seu Comentário: {data.comment}</p>

      </div>
    </div>
  )
}

export default Thanks
