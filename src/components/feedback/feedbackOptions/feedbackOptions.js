import s from './feedbackOption.module.css';

export default function FeedbackOption({ state, onLeaveFeedback }) {
  const { good, neutral, bad } = onLeaveFeedback;
  return (
    <div>
      <button className={s.button} type="button" onClick={good}>
        Good
      </button>
      <button className={s.button} type="button" onClick={neutral}>
        Neutral
      </button>
      <button className={s.button} type="button" onClick={bad}>
        Bad
      </button>
    </div>
  );
}
