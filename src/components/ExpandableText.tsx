import { useState } from 'react';

interface ExpandableTextProps {
  text: string;
  maxLength: number;
}

const ExpandableText = ({ text, maxLength = 200 }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;
  if (text.length < maxLength) return <div>{text}</div>;

  const toggleExpanded = () => setExpanded(!expanded);
  const displayText = expanded ? text : `${text.substring(0, maxLength)}...`;

  return (
    <div>
      {displayText}
      <button
        onClick={toggleExpanded}
        style={{
          cursor: 'pointer',
          background: '#DBBCF3',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          border: 'none',
          padding: 5,
          fontWeight: 'bold',
          fontSize: 16,
          borderRadius: 4,
          display: 'block',
          marginTop: 10,
        }}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ExpandableText;
