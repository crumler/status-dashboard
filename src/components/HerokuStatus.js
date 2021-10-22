import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const HerokuStatus = (props) => {

  return (
    <div className="currentHerokuStatus">
      <div className="status">Apps: {props.appsStatus === 'green' ? <CheckCircleIcon /> : <WarningIcon />} </div>
      <div className="status">Data: {props.dataStatus === 'green' ? <CheckCircleIcon /> : <WarningIcon />}</div>
      <div className="status">Tools: {props.toolsStatus === 'green' ? <CheckCircleIcon /> : <WarningIcon />}</div>
    </div>
  )

};

export default HerokuStatus;