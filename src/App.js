import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Header from './components/Header';
import HerokuStatus from './components/HerokuStatus';

function App() {
  const HerokuURL = "https://status.heroku.com/api/v4/current-status";

  let [herokuAppsStatus, setHerokuAppsStatus] = useState("");
  let [herokuDataStatus, setHerokuDataStatus] = useState("");
  let [herokuToolsStatus, setHerokuToolsStatus] = useState("");

  useEffect(() => {
    Axios.get(HerokuURL).then((response) => {
      console.log(response.data);
      setHerokuAppsStatus(response.data.status[0].status);
      setHerokuDataStatus(response.data.status[1].status);
      setHerokuToolsStatus(response.data.status[2].status);
    });
  });
  
  return (
    <div>
      <Header />
      <HerokuStatus appsStatus={herokuAppsStatus} dataStatus={herokuDataStatus} toolsStatus={herokuToolsStatus} />
    </div> 
  );
}

export default App;