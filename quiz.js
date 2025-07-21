function checkAnswers() {
  const answers = {
    q1: "Valencia Meal",
    q2: "Behr Herbs",
    q3: "Elixir of Draining"
  };

  let score = 0;
  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  document.getElementById("result").textContent = `You scored ${score} out of 3.`;
}
