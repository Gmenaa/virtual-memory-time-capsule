import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CapsuleContent = () => {
  const { prefix } = useParams();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/capsule/${encodeURIComponent(prefix)}`);
        setContent(response.data);
      } catch (error) {
        console.error('Error fetching content:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [prefix]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading content: {error.message}</div>;
  }

  return (
    <div className='capsule-content-container'>
      {content.length > 0 ? (
        content.map((item, index) => (
          <div key={index}>{item.Key}</div>
        ))
      ) : (
        <p>No content available in this capsule.</p>
      )}
    </div>
  );
};

export default CapsuleContent;
