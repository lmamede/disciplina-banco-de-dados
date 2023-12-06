import './TeamWinStats.scss'
import React from 'react'
import { VictoryPie } from 'victory'

const TeamHomeWinStats = ({data}) => {
    console.log(data)
    const homeWin = data? data.homeWinsPercentage : ''
    const homeLoss = homeWin? 100-homeWin : ''
    return (
        <div className='win-chart'>
            <div className="win-title">
                <p className='home'>HOME WINS</p>
            </div>
            <VictoryPie
                origin={{ y: 100, x:200 }}
                className='victory-pie'
                colorScale={["#999", "rgba(160,0,5,0.9)" ]}
                padding={120}
                innerRadius={50}
                name='Home Win'
                style={{
                    data: {
                      fillOpacity: 1
                    },
                    labels: {
                      fontSize: 25, fill: "#666"
                    }
                  }}    
                data={[
                    { x: "Home Loss ", y: homeLoss, label:homeLoss },
                    { x: "Home Win", y: homeWin, label:homeWin},
                ]}
            />
        </div>
    )
}

export default TeamHomeWinStats