import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const GitHubStatus = (props) => {

  return (
    <div className="currentGithubStatus">
      <h3>GitHub Status:</h3>
      <span className="status">Git Operations: {props.gitOperationsStatus === 'operational' ? <CheckCircleIcon color="success" fontSize="large" /> : <a href="https://www.githubstatus.com/"><WarningIcon color="error" fontSize="large" /></a>} </span>
      <span className="status">API Requests: {props.githubApiRequests === 'operational' ? <CheckCircleIcon color="success" fontSize="large" /> : <a href="https://www.githubstatus.com/"><WarningIcon color="error" fontSize="large" /></a>}</span>
      <span className="status">Webhooks: {props.githubWebhooks === 'operational' ? <CheckCircleIcon color="success" fontSize="large" /> : <a href="https://www.githubstatus.com/"><WarningIcon color="error" fontSize="large" /></a>}</span>
      <span className="status">Issues: {props.githubIssues === 'operational' ? <CheckCircleIcon color="success" fontSize="large" /> : <a href="https://www.githubstatus.com/"><WarningIcon color="error" fontSize="large" /></a>}</span>
      <span className="status">Pull Requests: {props.githubPullRequests === 'operational' ? <CheckCircleIcon color="success" fontSize="large" /> : <a href="https://www.githubstatus.com/"><WarningIcon color="error" fontSize="large" /></a>}</span>
      <span className="status">GitHub Actions: {props.githubActions === 'operational' ? <CheckCircleIcon color="success" fontSize="large" /> : <a href="https://www.githubstatus.com/"><WarningIcon color="error" fontSize="large" /></a>}</span>
      <span className="status">GitHub Packages: {props.githubPackages === 'operational' ? <CheckCircleIcon color="success" fontSize="large" /> : <a href="https://www.githubstatus.com/"><WarningIcon color="error" fontSize="large" /></a>}</span>
      <span className="status">GitHub Pages: {props.githubPages === 'operational' ? <CheckCircleIcon color="success" fontSize="large" /> : <a href="https://www.githubstatus.com/"><WarningIcon color="error" fontSize="large" /></a>}</span>
      <span className="status">Codespaces: {props.githubCodespaces === 'operational' ? <CheckCircleIcon color="success" fontSize="large" /> : <a href="https://www.githubstatus.com/"><WarningIcon color="error" fontSize="large" /></a>}</span>
    </div>
  )

};

export default GitHubStatus;