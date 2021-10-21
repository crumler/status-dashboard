import '../index.css';

const FetchButton = (props) => {

  return (
    <button className="fetchButton" onClick={props.fetchData}>Fetch!</button>
  )
}

export default FetchButton;