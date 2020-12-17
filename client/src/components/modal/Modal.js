import React from 'react';
import './Modal.css';


const Modal = ({ msg, showModal }) => {

  const clearCacheAndRefresh = () => {
    if (caches) {
      // Service worker cache should be cleared with caches.delete()
      caches.keys().then((names) => {
        for (const name of names) {
          caches.delete(name);
        }
      });
    }
    // delete browser cache and hard reload
    window.location.reload(true);
  }

  return (
      <div id='modal' className={showModal ? 'show' : 'hide'}>
          <p>{msg}</p>
          <button onClick={clearCacheAndRefresh}>update</button>
      </div>
  );
}


export default Modal;