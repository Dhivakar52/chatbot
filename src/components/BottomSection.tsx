import React from "react";

export interface BottomSectionProps {
  query: string;
  setQuery: (value: string) => void;
}

const BottomSection: React.FC<BottomSectionProps> = ({ query, setQuery }) => {
  return (
   <div style={{ marginTop: '24px', marginBottom: '30px' }}>
          <p style={{ fontSize: '13px', color: '#718096', marginBottom: '12px' }}>
            You might be interested in:
          </p>
          <button style={{
            backgroundColor: 'white',
            border: '1px solid #d1d5db',
            padding: '10px 20px',
            borderRadius: '24px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '500',
            marginBottom: '20px',
            color: '#0c4da2',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
          }}>
            <span className="green-animate"></span>
            Get Free Counselling
          </button>

          {/* Input Box */}
          <div style={{ position: 'relative', maxWidth: '100%' }}>
            <input
              type="text"
              placeholder="Write your query on colleges, exam here..."
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 60px 16px 20px',
                borderRadius: '28px',
                border: '1px solid #e5e7eb',
                fontSize: '14px',
                backgroundColor: 'white',
               color: '#0c4da2',
                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
              }}
            />
            <button 
              onClick={() => console.log('Query submitted:', query)}
              style={{
                position: 'absolute',
                right: '6px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: '#9ca3af',
                border: 'none',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6b7280'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#9ca3af'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
          
          <p style={{ 
            textAlign: 'center', 
            fontSize: '12px', 
            color: '#9ca3af', 
            marginTop: '12px' 
          }}>
            
          </p>
        </div>
  );
};

export default BottomSection;
