import React, { useState, useEffect } from 'react';

export const RandomJapaneseCarImage = () => {
  const [imageUrl, setImageUrl] = useState('');
  
  useEffect(() => {
    const getRandomJapaneseCarImage = async () => {
      try {
        // Usar Lorem Picsum con parámetros para obtener imágenes relacionadas con autos
        const response = await fetch('https://picsum.photos/400/300?category=auto');
        
        if (response.ok) {
          const imageUrl = response.url;
          setImageUrl(imageUrl);
        } else {
          console.error('Error fetching random Japanese car image');
        }
      } catch (error) {
        console.error('Error fetching random Japanese car image', error);
      }
    };

    getRandomJapaneseCarImage();
  }, []);
  

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Random Japanese Car" />}

    </div>
    
  );
};


export const RandomCarQuote = () => {
    const [quote, setQuote] = useState('');
  
    useEffect(() => {
      const getRandomCarQuote = async () => {
        try {
          // Usar la API Quotable para obtener citas relacionadas con autos
          const response = await fetch('https://api.quotable.io/random?');
          const data = await response.json();
  
          if (response.ok) {
            const randomQuote = data.content;
            setQuote(randomQuote);
          } else {
            console.error('Error fetching random car quote');
          }
        } catch (error) {
          console.error('Error fetching random car quote', error);
        }
      };
  
      getRandomCarQuote();
    }, []);
  
    return (
      <div>
        
        {quote && <blockquote>{quote}</blockquote>}
      </div>
    );
  };
  
 