import React, { useState } from 'react';

interface Meme {
  id: number;
  topText: string;
  imageUrl: string;
}

const initialMemes: Meme[] = [
  {
    id: 1,
    topText: 'When you finally understanding TypeScript',
    imageUrl: 'https://i.imgflip.com/3z7z5v.jpg',
  },
  {
    id: 2,
    topText: 'When you realize when you forgot a semicolon',
    imageUrl: 'https://i.imgflip.com/7htepl.jpg',
  },
  {
    id: 3,
    topText: 'When you see a bug in you code',
    imageUrl: 'https://i.imgflip.com/7hp0hx.jpg',
  },
  {
    id: 4,
    topText: 'When i literally get Bojangles for the 8417th time:',
    imageUrl: 'https://i.imgflip.com/7hlvh6.jpg',
  }
];

const MemeGenerator: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>(initialMemes);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleTopTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopText(event.target.value);
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  const handleAddMeme = () => {
    const newMeme: Meme = {
      id: memes.length + 1,
      topText,
      imageUrl,
    };
    setMemes([...memes, newMeme]);
    setTopText('');
    setImageUrl('');
  };

  return (
    <div>
        <div className='add-element-container'>
      <div>
        <input type="text" id="topText" value={topText} placeholder='Meme Text' className='main-input animate__animated animate__bounceIn' onChange={handleTopTextChange} />
      </div>
      <div>
        <input type="text" id="imageUrl" value={imageUrl} placeholder='Meme URL'  className='main-input animate__animated animate__bounceIn' onChange={handleImageUrlChange} />
      </div>
      <div></div>
      <button onClick={handleAddMeme} className='button-action animate__animated animate__bounceIn'>Add Meme</button>
      </div>
      <div className='extended-container'>
        {memes.map((meme) => (
          <div key={meme.id} className='new-action-component animate__animated animate__bounceIn'>
            <img src={meme.imageUrl} alt="meme" />
            <h2>{meme.topText}</h2>
          </div>
        ))}
      </div>
      <div className="col-info">Add Meme in Collection 😉</div>
    </div>
  );
};

export default MemeGenerator;