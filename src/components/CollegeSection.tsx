import React from 'react';
import { Nav, Tab, Row, Col, ListGroup } from 'react-bootstrap';

type CollegeTab =
  | 'All'
  | 'Admissions'
  | 'Fees'
  | 'Facility'
  | 'Placements'
  | 'Scholarships'
  | 'Cutoffs';

interface QuestionsData {
  [key: string]: string[];
}

interface Props {
  activeCollegeTab: CollegeTab;
  setActiveCollegeTab: (tab: CollegeTab) => void;
  collegeTabs: CollegeTab[];
  collegeQuestionsData: QuestionsData;
  handleQuestionClick: (q: string) => void;
}

const CollegeSection: React.FC<Props> = ({
  activeCollegeTab,
  setActiveCollegeTab,
  collegeTabs,
  collegeQuestionsData,
  handleQuestionClick,
}) => {
  return (
    <div
      style={{
        backgroundColor: '#ffff',
        borderRadius: '20px',
        padding: '30px',
        minHeight: '500px',
      }}
    >
      <div className="d-flex align-items-start">
        <h2 style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '5px', color:'#0c4da2' }}>
          Colleges
        </h2>
      </div>

      <p style={{ color: '#888', marginBottom: '20px', fontSize: '14px' }}>
        Ask your query related to admissions, fees, placements, cutoffs etc
      </p>

      {/* React Bootstrap Tabs */}
      <Tab.Container 
        activeKey={activeCollegeTab}
        onSelect={(k) => setActiveCollegeTab(k as CollegeTab)}
      >
        <Nav
          variant="tabs"
          className="collegeTab"
style={{
  backgroundColor: '#E4B316',
  borderRadius: '30px',
  flexWrap: 'nowrap',
  color: '#fff',
  overflowX: 'visible',
  overflowY: 'hidden',
  scrollbarWidth: 'thin',  
  msOverflowStyle: 'none', 
}}
        >
          {collegeTabs.map((tab) => (
            <Nav.Item key={tab}>
              <Nav.Link
                eventKey={tab}
                style={{
                  borderRadius: '20px',
                  margin: '2px',
                  fontWeight: activeCollegeTab === tab ? 600 : 400,
                  fontSize: '14px',
                  color: activeCollegeTab === tab ? '#333' : '#fff',
                }}
              >
                {tab}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey={activeCollegeTab}>
            <ListGroup variant="flush">
              {collegeQuestionsData[activeCollegeTab].map((q, i) => (
                <ListGroup.Item
                  key={i}
                  action
                  onClick={() => handleQuestionClick(q)}
                  style={{
                    backgroundColor: '#dbeaff',
                    margin: '20px 0px 0px',       
                    cursor: 'pointer',
                    borderRadius: '4px',
                    color:'#000000'

                  }}
                >
                  {q}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default CollegeSection;
