import React from 'react';
import { Link } from 'react-router-dom';
import './alpha.css'; 

function Alpha() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="alphabet">
      {
      alphabet.map((letter) => (
        <Link key={letter} to={`/alpha/${letter}`} className="letter">
          / {letter} /
        </Link>
      ))
      }
    </div>
  );
}

export default Alpha;
