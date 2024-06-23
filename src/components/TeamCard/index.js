// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardItem} = props
  const {id, teamImageUrl, name} = cardItem

  return (
    <Link to={`/team-matches/${id}`}>
      <div className="card-design">
        <img src={teamImageUrl} alt={id} className="card-img" />
        <p className="card-team-name">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
