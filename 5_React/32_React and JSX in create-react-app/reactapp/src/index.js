import React from 'react';
import ReactDOM from 'react-dom/client';

// Dummy image for example
const userImage = 'https://via.placeholder.com/150';

const headerStyle = {
  backgroundColor: 'cyan',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5
};

const header = (
  <header style={headerStyle}>
    <h1>Welcome to React JS</h1>
    <h2>Second React session</h2>
    <p>First session for React</p>
    <small>April 28, 2022</small>
  </header>
);

const main = (
  <main>
    <p>This is the first paragraph for the development of a React application</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

const footer = (
  <footer>
    <p>Copyright 2022</p>
  </footer>
);

const user = (
  <div>
    <img src={userImage} alt="Himanshu" style={{ width: 150, height: 150, borderRadius: '50%' }} />
  </div>
);

const app = (
  <div>
    {header}
    {main}
    {user}
    {footer}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);
