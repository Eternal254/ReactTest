import React, { useEffect } from 'react';
import '../App.css';

function MonsterDetails({ name, description, image, details, onClose }) {
    useEffect(() => {
        const handleEsc = (event) => {
          if (event.keyCode === 27) { // 27 es el código de la tecla Esc
            onClose();
          }
        };
    
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, [onClose]);
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={image} alt={name} />
            <p>{details}</p>
          </div>
        </div>
      </div>
    );
  }
  

export default MonsterDetails;
