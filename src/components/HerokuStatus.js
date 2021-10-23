import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const HerokuStatus = (props) => {

  return (
    <div className="currentHerokuStatus">
      <h3>Heroku Status:</h3>
      <span className="status">Apps: {props.appsStatus === 'green' ? <CheckCircleIcon color="success" fontSize="large" /> : <WarningIcon color="secondary" />} </span>
      <span className="status">Data: {props.dataStatus === 'green' ? <CheckCircleIcon color="success" fontSize="large" /> : <WarningIcon />}</span>
      <span className="status">Tools: {props.toolsStatus === 'green' ? <CheckCircleIcon color="success" fontSize="large" /> : <WarningIcon />}</span>
      <WarningIcon color="warning" fontSize="large"/>
    </div>
  )

};

export default HerokuStatus;