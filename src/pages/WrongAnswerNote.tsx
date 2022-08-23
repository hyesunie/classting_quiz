import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { QuizInfo } from './Home';
import './WrongAnswerNote.css';

interface WrongQuizInfo extends QuizInfo {
  idx: number;
}

interface QuizLayoutProps {
  quiz: WrongQuizInfo;
}

const QuizLayout: React.FC<QuizLayoutProps> = ({
  quiz,
}: QuizLayoutProps): React.ReactElement => {
  const { question, answerIdx, answerList, userIdx, idx } = quiz;
  return (
    <li className="quiz-element">
      <div className="quiz__title-wrapper">
        <span className="quiz__title__number">{idx + 1}.</span>
        <span className="quiz__title__question">{question}</span>
      </div>
      <ul className="quiz__answer-list">
        {answerList.map((e, index) => {
          return (
            <li
              key={`${String(index)}quiz`}
              id={`${index}`}
              role="presentation"
              className="quiz__answer"
              style={
                // eslint-disable-next-line no-nested-ternary
                index === userIdx
                  ? { backgroundColor: '#ffa68d' }
                  : index === answerIdx
                  ? { backgroundColor: '#C5FFB8' }
                  : {}
              }
            >
              <span>{e}</span>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

const WrongAnswerNote: React.FC = (): React.ReactElement => {
  const [wrongQuizList, setWrongQuizList] = useState<WrongQuizInfo[]>([]);
  const { state } = useLocation();
  const quizList = state as WrongQuizInfo[];

  useEffect(() => {
    setWrongQuizList(
      quizList
        .map((e, idx) => {
          e.idx = idx;
          return e;
        })
        .filter((e) => !e.isAnswer)
    );
  }, []);

  return (
    <main className="wrong-answer-note">
      <h2>오답노트</h2>
      <ul className="quiz-list">
        {wrongQuizList.map((quiz) => (
          <QuizLayout quiz={quiz} />
        ))}
      </ul>
    </main>
  );
};

export default WrongAnswerNote;
