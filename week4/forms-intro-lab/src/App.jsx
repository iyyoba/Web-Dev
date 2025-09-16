// src/App.jsx
import { useState } from 'react';
import "./App.css"

function ContactUs() {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [phone, SetPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SetName('');
    SetEmail('');
    SetPhone('');
  };

  return (
    <div>

      <h2> Conatct US</h2>
      <form onSubmit={handleSubmit} >
        <div>
          < label htmlFor='name'> Name:</label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='text'
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            value={phone}
            onChange={(e) => SetPhone(e.target.value)}
          />
        </div>
      </form>

    </div>
  );
}


function App() {
  return (
    <ContactUs />
  );
}

export default App;