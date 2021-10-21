import { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Header from './components/Header';
import FetchButton from './components/FetchButton';

function App() {
  const HerokuURL = "https://status.heroku.com/api/v4/current-status";

  let [herokuStatus, setHerokuStatus] = useState("");

  const fetchData = () => {
    Axios.get(HerokuURL).then((response) => {
      console.log(response.data.status[0].status); //this returns 'green' in the console
      setHerokuStatus(response.data.status[0].status);
  });

}
  return (
    <div>
      <Header />
      <FetchButton status={herokuStatus} fetchData={fetchData} />
      
      <div className="currentStatus">
        <h2>{herokuStatus}</h2>
      </div>
    </div> 
  );
}

export default App;
