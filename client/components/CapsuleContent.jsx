import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './CapsuleContent.css'

const CapsuleContent = () => {
  const { prefix } = useParams();
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/capsule/${encodeURIComponent(prefix)}`);
        const data = response.data;
        setContent(data.Contents.slice(1));
      } catch (error) {
        console.error('Error fetching content:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [prefix]);

  const getMediaType = (key) => {
    const extension = key.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
      return 'image';
    } else if (['mp4', 'webm', 'ogg'].includes(extension)) {
      return 'video';
    } else {
      return 'unknown';
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading content: {error.message}</div>;
  }

  return (
    <div className='capsule-content-container'>
      {content.length > 0 ? (
        content.map((item, index) => {
          const url = `https://d1a372b8l9g90u.cloudfront.net/${item.Key}`;
          const mediaType = getMediaType(item.Key);

          return (
            <div key={index} className='capsule-item'>
              {mediaType === 'image' && <img src={url} alt={item.Key} />}
              {mediaType === 'video' && <video controls src={url} />}
              {mediaType === 'unknown' && <a href={url} target="_blank" rel="noopener noreferrer">{item.Key}</a>}
            </div>
          );
        })
      ) : (
        <p>No content available in this capsule.</p>
      )}
    </div>
  );
};

export default CapsuleContent;
