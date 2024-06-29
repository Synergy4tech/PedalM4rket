import React, { useState } from 'react';
import { CreateAd } from '../services/api';

function CreateAd() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateAd = async (e) => {
    e.preventDefault();
    try {
      await createAd({ title, description });
      
    } catch (error) {
      console.error('Não foi possível criar o anúncio', error);
     
    }
  };

  return (
    <div>
      <h2>Create Ad</h2>
      <form onSubmit={handleCreateAd}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descrição do anúncio"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="enviar">Create Ad</button>
      </form>
    </div>
  );
}

export default CreateAd;
