import React, { useState } from 'react';

import Modal from '../components/Menu';

import './Capsules.css';

const Capsules = () => {
  const [menu, setMenu] = useState(false); // ? false -> modal is not opened, true -> modal is open and the user can input capsule info.

  const createCapsule = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  }

  return (
    <div className='capsules-container'>
      <button className='btn-create-capsule' onClick={createCapsule}>Capsule +</button>
      {menu && <Modal closeMenu={closeMenu} />}
    </div>
  )
}

export default Capsules