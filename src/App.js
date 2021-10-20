import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const HerokuURL = "https://status.heroku.com/api/v4/current-status";

  let [herokuStatus, setHerokuStatus] = useState("");

const fetchData = () => {
  Axios.get(HerokuURL).then((response) => {
    console.log(response.data.status[0].status); //this returns 'green' in the console
    setHerokuStatus = (response.data.status[0].status);
  });

}
  return (
    <header>
      <h1>EDAT Operations Status Page Dashboard</h1>
      <div className="button">
        <button onClick={fetchData}>Fetch!</button>
      </div>
      <div className="currentStatus">
        <h2>{herokuStatus}</h2>
      </div>
    </header>

  );
}

export default App;
