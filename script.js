document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var subject = document.getElementById('subject').value;
  var quizType = document.getElementById('quizType').value;
  
  // Check the type of quiz and redirect accordingly
  if (quizType === 'mcqs') {
    window.location.href = 'createQuiz.html?subject=' + encodeURIComponent(subject) + '&quizType=' + encodeURIComponent(quizType);
  } else if (quizType === 'singleLine') {
    window.location.href = 'short-question.html?subject=' + encodeURIComponent(subject) + '&quizType=' + encodeURIComponent(quizType);
  }
  // Add more conditions here if there are more quiz types
});