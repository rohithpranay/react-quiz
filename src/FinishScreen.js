function FinishScreen({ points, maxPoints, highscore, onDispatch }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 0) {
    emoji = "🤦";
  } else if (percentage > 0 && percentage <= 50) {
    emoji = "😕";
  } else if (percentage > 50 && percentage <= 80) {
    emoji = "🙃";
  } else if (percentage > 80 && percentage < 100) {
    emoji = "🎉";
  } else if (percentage === 100) {
    emoji = "🥇";
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage) + "%"})
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => onDispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
