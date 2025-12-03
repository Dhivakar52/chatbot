import React from "react";

export interface QuestionListProps {
  questions: string[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <div>
      {questions.map((q, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "16px 20px",
            marginBottom: "12px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            transition: "all 0.3s",
            fontSize: "15px",
          }}
        >
          <span>{q}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#666">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
