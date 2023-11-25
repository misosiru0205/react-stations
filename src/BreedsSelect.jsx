


export const BreedsSelect = ({breeds,selectedBreed,change}) => {

    //console.log(breeds);
    //const arr = Object.keys(breeds);
    //console.log(arr);

    //async function dogList1(){
      //const dogarr = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/6`);
      //const arr = await dogarr.json();
      //setDogList(arr.message);
      //console.log(arr.message);
    //}

  return (
    <>
    <label>犬種:
    <select  value={selectedBreed} onChange={(e) =>  change(e)}>
      <option hidden>選択してください</option>
      {Object.keys(breeds).map(breed => 
          <option key={breed}>
            {breed}
          </option>
        )}
    </select>
    </label>
    </>
  )
}

export default BreedsSelect
