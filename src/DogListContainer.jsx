
import { useEffect,useState } from "react"
import BreedsSelect from "./BreedsSelect";
import DogImage from "./DogImage";

export const DogListContainer = () => {

  const [breeds,setBreeds] = useState('');
  const[selectedBreed,setSelectedBreed] = useState("")
  const[dogList,setDogList] = useState([]);

  async function data(){
    const data = await fetch('https://dog.ceo/api/breeds/list/all');
    const hai = await data.json();
    await setBreeds(hai.message);
  }

 function change(e){
  setSelectedBreed(e.target.value)
 }

 async function dogList1(){
  if(selectedBreed != ""){
  const dogarr = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/6`);
  const arr = await dogarr.json();
  await setDogList(arr.message);
  console.log(arr);
  }
  else{}
} 

  useEffect(()=>{
    data();
 },[])
 
  return (
    <>
    <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} change={change}/>
    <button onClick={dogList1}>表示</button>
    <br/>

    <ul className="list">
      {dogList.map(breed1 =>
        <li key={breed1}>
          <DogImage imageUrl={breed1} />
        </li>
        )}
    </ul>
    </>
  )

}

export default DogListContainer
