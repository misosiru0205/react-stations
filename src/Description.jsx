// @ts-check
import {useState,useEffect}from'react';
import DogImage from './DogImage';

export const Description = () => {
  
  const [dogUrl,setDogUrl] = useState("")

  useEffect(()=>{
    change();
  },[])
  
  async function change(){
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const img = await data.json();
    setDogUrl(img.message);
  }

  return (
  <div className='dis'>
    <p className='inu'>犬の画像</p>
    <DogImage imageUrl={dogUrl}/>
    <br/>
    <button onClick= {change}>ランダムに更新</button>
  </div>
  )
}

export default Description
