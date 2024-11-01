const quize = [
  {
    question:'Halloweenは次のうちいつ？',
    answers: [
  '10月28日',
  '10月31日',
  '11月11日',
  '12月25日'
],
    correct: '10月31日',
},{
  question:'クリスマスは次のうちいつ？',
  answers: [
'12月28日',
'12月31日',
'12月11日',
'12月25日'
],
  correct: '12月25日',
},{
  question:'お正月は次のうちいつ？',
  answers: [
'1月28日',
'1月31日',
'1月11日',
'1月1日'
],
  correct: '1月1日',
}

];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//定数の文字列をHTMLに反映される
const $button = document.getElementsByTagName('button')
let buttonLength = $button.length;
let buttonIndex = 0;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  while (buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
  }
}

setupQuiz ();




//ボタンをクリックしたら正誤判定




const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else {
    window.alert('終了!あなたの正解数は’ + score + '/' + quizeLength + 'です') ;

  }
};


let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);

  });
  handlerIndex++;
}

handlerIndex();




















