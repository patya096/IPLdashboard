// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    umpires,
    manOfTheMatch,
  } = latestMatchData

  return (
    <div className="latest-match-details">
      <p className="match-heading">Latest Matches</p>
      <div className="latest-match-bg">
        <div className="latest-match-container">
          <div className="date-result-div">
            <p className="team-name">{competingTeam}</p>
            <p className="team-date">{date}</p>
            <p className="team-info">{venue}</p>
            <p className="team-info">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-logo"
          />
          <div className="date-result-innings-div">
            <p className="team-date margin">First Innings</p>
            <p className="team-info margin">{firstInnings}</p>
            <p className="team-date margin">Second Innings</p>
            <p className="team-info margin">{secondInnings}</p>
            <p className="team-date margin">Man Of The Match</p>
            <p className="team-info margin">{manOfTheMatch}</p>
            <p className="team-date margin">Umpires</p>
            <p className="team-info margin">{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
