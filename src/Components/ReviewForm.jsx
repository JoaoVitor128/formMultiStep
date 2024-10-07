import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="reviewForm">
      <div className="formControl scoreContainer">
        <label className="radioContainer">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            required
            chacked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radioContainer">
          <input
            type="radio"
            value="neutral"
            name="review"
            chacked={data.review === "n"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radioContainer">
          <input
            type="radio"
            value="satisfied"
            name="review"
            chacked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radioContainer">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            chacked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="formControl">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="coment"
          id="comment"
          placeholder="Conte como foi a sua experiência com o produto..."
          value={data.comment || ""}
          required
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;