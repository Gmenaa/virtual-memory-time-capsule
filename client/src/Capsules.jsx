import React, { useState, useEffect } from 'react';
import Modal from '../components/Menu';
import axios from 'axios';
import './Capsules.css';

const Capsules = () => {
  const [menu, setMenu] = useState(false);
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/capsules');
        const data = response.data;
        console.log(data); // Debugging line
        setCapsules(data.CommonPrefixes); // store fetched data in state
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const createCapsule = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading capsules: {error.message}</div>;
  }

  return (
    <div className='capsules-container'>
      <button className='btn-create-capsule' onClick={createCapsule}>Capsule +</button>
      {menu && <Modal closeMenu={closeMenu} />}

      <div className='capsules-list'>
        {capsules.length > 0 ? (
          capsules.map((capsule, index) => {
            // ! This makes it so a user CANNOT have a '/' character in their capsule name
            const parts = capsule.Prefix.split('/');
            const capsuleName = parts.length > 1 ? parts[1] : parts[0];
            return <div key={index}>{capsuleName}</div>;
          })
        ) : (
          <p>No capsules available.</p>
        )}
      </div>
    </div>
  );
};

export default Capsules;
