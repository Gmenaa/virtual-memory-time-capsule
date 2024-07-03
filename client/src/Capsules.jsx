import React, { useState, useEffect } from 'react';
// import ReactPlayer from 'react-player';

import { Link } from 'react-router-dom';

import Modal from '../components/Menu';
import axios from 'axios';
import './Capsules.css';

const Capsules = () => {
  const [menu, setMenu] = useState(false);

  const [capsules, setCapsules] = useState([]);

  // const [video, setVideo] = useState(null);
  // const [image, setImage] = useState(null);
  // const [audio, setAudio] = useState(null)
  // const [text, setText] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ? Fetch GET request from server using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/capsules');
        const data = response.data;
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

  // useEffect(() => {
  //   setVideo(<ReactPlayer url="https://d1a372b8l9g90u.cloudfront.net/" controls={true}, [])
  // })

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
            // return <div key={index}>{capsuleName}</div>;
            return (
              <Link key={index} to={`/capsule/${encodeURIComponent(capsule.Prefix)}`}>
                <div>{capsuleName}</div>
              </Link>
            );
          })
        ) : (
          <p>No capsules available.</p>
        )}
      </div>

      {/* <div className='media'>
        <img src="https://d1a372b8l9g90u.cloudfront.net/27/Sierra%20Madre/amfzanxbvw621.png" alt="" />
      </div> */}
    </div>
  );
};

export default Capsules;
