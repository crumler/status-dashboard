import Axios from 'axios';

const URL = "https://status.heroku.com/api/v4/current-status";

const fetchData = () => {
  Axios.get(URL).then((response) => {
    console.log(response);
  });

  return (
    <div>
      <button>Fetch!</button>
    </div>
  )
}

export default fetchData;