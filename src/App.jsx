// DO NOT DELETE
import './App.css';
import Header from './Header.jsx';
import Description from './Description.jsx';
import DogListContainer from './DogListContainer.jsx';
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (

    <div>
      <Header />
      <Description />
      <br/>
      <DogListContainer />
    </div>
  );
}
