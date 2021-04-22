import React, {useState} from 'react';
import './styles.css';
import imageData from './imageData'
// console.log(imageData)

export default function App() {
  const [bigImg, setBigImg] = useState(imageData[0].url);

  const images = imageData.map((image, index) => {
    // const [currentImg, setCurrentImg] = useState(images[0].props.src);
    const handleClick = () => setBigImg(image.url)
    // const clickBorder = () => {
    //   return ( )
    // }
    return (
      <img 
        // onClick={handleClick}
        onClick={() => handleClick()}
        className="thumb" 
        style={{border: bigImg === image.url ? '4px solid green' : ''}}
        src={image.url}
        alt={image.place}
        key={index}
      />
    )
  });

    // const handleCurrentImg = (index) => setCurrentImg(images[index].props.src)

  // console.log(images[0].props.src)

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {images}
        </div>
        <img  id="bigimage" src={bigImg} alt="bigimage" />
      </div>
    </div>
  );
}
