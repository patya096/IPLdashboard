// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, cardDetails: []}

  componentDidMount() {
    this.getTeamCard()
  }

  getTeamCard = async () => {
    const teamsApiUrl = await fetch('https://apis.ccbp.in/ipl')
    const response = await teamsApiUrl.json()

    const data = response.teams

    const dataFormat = data.map(eachCard => ({
      id: eachCard.id,
      name: eachCard.name,
      teamImageUrl: eachCard.team_image_url,
    }))

    this.setState({cardDetails: dataFormat, isLoading: false})
  }

  render() {
    const {isLoading, cardDetails} = this.state

    return (
      <div className="home-main-bg">
        <div className="heading-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="home-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <ul className="team-card-container">
            <div className="team-cards-div">
              {cardDetails.map(eachDetails => (
                <TeamCard cardItem={eachDetails} key={eachDetails.id} />
              ))}
            </div>
          </ul>
        )}
      </div>
    )
  }
}

export default Home
