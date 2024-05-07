
import './Game.css';
import React from 'react';
const questions = [
  {
    title: 'Как называется крупная порода пушистых кошек с кисточками на ушах?',
    variants: ['Мейн-кун', 'Персидская кошка', 'Русская голубая кошка'],
    correct: 0,
  },
  {
    title: 'Как называется наука о кошках? ',
    variants: ['Кинология', 'Фелинология', 'Иппология'],
    correct: 1,
  },
  {
    title: 'На гербе какой страны была изображена кошка, как символ независимости?',
    variants: [
      'Франция',
      'Испания',
      'Голландия',
    ],
    correct: 2,
  },
  {
    title: 'В какой стране из древних цивилизаций поклонялись кошкам, считая их символом плодородия?',
    variants: [
      'Месопотамия',
      'Древний Египет',
      'Китай',
    ],
    correct: 1,
  },
  {
    title: 'Какая кошка из домашних самая крупная?',
    variants: [
      'Саванна',
      'Британская кошка',
      'Шартрез',
    ],
    correct: 0,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <div href='/Game' className='batton'><a href='/Game' className='again'> Попробовать снова </a></div> 
    </div>
  );
}

function Game({step, question, onClickVariant}) {
    const percentage = Math.round((step / questions.length) * 100)
    
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
            <li onClick={() => {onClickVariant(index)}} key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function Game_app() {
    const [step, setState] = React.useState(0)
    const [correct, setCorrect] = React.useState(0)
    const question = questions [step]

    const onClickVariant = (index) => {
        console.log(step, index)
        setState(step + 1)

        if (index === question.correct){
            setCorrect(correct + 1)
        }
        };

  return (
    <div className='bodyGame'>
        <div className="Game">
        {
            step != questions.length ? 
            (<Game step={step}  question={question} onClickVariant={onClickVariant} />
        ) : (
            <Result correct={correct}/>
        )
        }
         
        </div> 
    </div>
    
  );
}

export {Game_app};