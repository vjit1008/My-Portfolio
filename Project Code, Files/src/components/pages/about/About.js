import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink as link } from 'react-router-hash-link';
import Navbar from '../../navbar/Navbar';


export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            Open to work for  creating beautiful, user-friendly websites and applications.  I have a deep understanding of HTML, CSS, JavaScript, and other technologies that drive modern web development. I am always, staying up-to-date with the latest advancements and trends in the field.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>LinkedIn profile:</strong> 
                <a href='https://www.linkedin.com/in/vishvajit-gadakari-114014159/' target="_blank" style={{color:'blue',textTransform:'lowercase'}}> vishvajit-gadakari</a>
              </p>
              <p>
                <strong>Github link:</strong> 
                <a href='https://github.com/vjit1008' target="_blank" style={{color:'blue',textTransform:'lowercase'}}> github.com/vjit1008</a>
              </p>
              <p>
                <strong>Email:</strong>  <a href='https://gadakariv@gmail.com' target="_blank" style={{color:'blue',textTransform:'lowercase'}}> gadakariv@gmail.com</a>
              </p>
              <p>
                <strong>Contact No:</strong> +91 997 078 9040
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>First Language</strong> - Marathi
              </p>
              <p>
                <strong>Second Language</strong> - Hindi
              </p>
              <p>
                <strong>Third Language</strong> - English
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
