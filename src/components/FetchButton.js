
const FetchButton = (props) => {

  return (
    <div className="fetchButton">
      <button onClick={props.fetchData}>Fetch!</button>
    </div>
  )
}

export default FetchButton;