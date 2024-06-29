import React, { useEffect, useState } from 'react';
import { getAds } from '../services/api';
import AdItem from './AdItem';

function AnunciosList() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    async function fetchAds() {
      try {
        const adsData = await getAds();
        setAds(adsData);
      } catch (error) {
        console.error('Erro na busca pelo anúncio solicitado', error);
      }
    }
    fetchAds();
  }, []);

  return (
    <div>
      <h2>Ads</h2>
      {ads.map((ad) => (
        <AdItem key={ad.id} ad={ad} />
      ))}
    </div>
  );
}

export default AnunciosList;
