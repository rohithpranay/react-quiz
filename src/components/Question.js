import Options from "./Options";

function Question({ question, onDispatch, answer }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} onDispatch={onDispatch} answer={answer} />
    </div>
  );
}

export default Question;
