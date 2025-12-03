import React, { useState } from 'react';
import CollegeSection from './CollegeSection';
import Logo from './Logo';
import BottomSection from './BottomSection';

type CollegeTab =
  | 'All'
  | 'Admissions'
  | 'Fees'
  | 'Facility'
  | 'Placements'
  | 'Scholarships'
  | 'Cutoffs';

type ExamTab =
  | 'All'
  | 'Eligibility'
  | 'Pattern'
  | 'Syllabus'
  | 'Preparation'
  | 'Results';

interface QuestionsData {
  [key: string]: string[];
}

const CollegeExamInterface: React.FC = () => {
  const [activeCollegeTab, setActiveCollegeTab] =
    useState<CollegeTab>('Cutoffs');
  const [query, setQuery] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false); // chatbot toggle

  const collegeTabs: CollegeTab[] = [
    'All',
    'Admissions',
    'Fees',
    'Facility',
    'Placements',
    'Scholarships',
    'Cutoffs',
  ];

  const collegeQuestionsData: QuestionsData = {
    All: [
      'What are the top engineering colleges in India?',
      'How to get admission in IIT?',
      'What is the fee structure of NIT?',
      'Which college has the best placement record?',
      'What are the eligibility criteria for management quota?',
    ],
    Admissions: [
      'What is the admission process for IIT?',
      'When do college admissions start?',
      'What documents are required for admission?',
      'How to apply for multiple colleges?',
      'What is the last date for admission?',
    ],
    Fees: [
      'What is the fee structure at VIT Vellore?',
      'Are there any scholarships available?',
      'What is the hostel fee at IIT Bombay?',
      'How to pay college fees online?',
      'What are the refund policies?',
    ],
    Facility: [
      'What facilities are available at the campus?',
      'Is there a library and sports complex?',
      'What about hostel facilities?',
      'Are there research labs available?',
      'What medical facilities are provided?',
    ],
    Placements: [
      'What is the average placement package at IIT?',
      'Which companies visit for campus placement?',
      'What is the placement percentage?',
      'How to prepare for campus placements?',
      'What are the top recruiting companies?',
    ],
    Scholarships: [
      'What scholarships are available for students?',
      'How to apply for merit scholarship?',
      'Are there government scholarships?',
      'What is the eligibility for scholarship?',
      'How much scholarship amount can I get?',
    ],
    'Cutoffs': [
      'What is the entrance exam cutoff for CGC University this year?',
      'Cutoffs for all branches at VIT Vellore?',
      "What was the cutoff score for last year's admission at DTU?",
      'How much is the cutoff at IIT Bombay?',
      'What is the cutoff trend at Lovely Professional University like?',
    ],
  };

  const handleQuestionClick = (question: string): void => {
    setQuery(question);
  };

  return (
    <div
      style={{
        backgroundColor: '#dbeaff',
        minHeight: '100vh',
        padding: '40px 20px',
      }}
    >
      <div className="container-fluid">
        
  <div>
 <Logo />
          <CollegeSection
            activeCollegeTab={activeCollegeTab}
            setActiveCollegeTab={setActiveCollegeTab}
            collegeTabs={collegeTabs}
            collegeQuestionsData={collegeQuestionsData}
            handleQuestionClick={handleQuestionClick}
          />

          

        <BottomSection query={query} setQuery={setQuery} />
  </div>
        {/* Floating + button */}
        {/* <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#6c63ff',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '32px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 9999,
            transition: '0.3s',
          }}
        >
          {isOpen ? '×' : '+'}
        </div> */}

        {/* Floating sliding card */}
        {/* <div
          style={{
            position: 'fixed',
            bottom: isOpen ? '100px' : '-600px',
            right: '30px',
            width: '580px',
            height: '520px',
            background: '#fff',
            borderRadius: '20px',
            boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
            padding: '15px',
            overflowY: 'auto',
            transition: 'bottom 0.4s ease',
            zIndex: 9998,
          }}
        >
           <div
    onClick={() => setIsOpen(false)}
    style={{
      position: 'absolute',
      top: '10px',
      right: '15px',
      fontSize: '22px',
      cursor: 'pointer',
      color: '#333',
      fontWeight: 'bold',
    }}
  >
    ×
  </div>


         
        </div> */}
      </div>
    </div>
  );
};

export default CollegeExamInterface;
