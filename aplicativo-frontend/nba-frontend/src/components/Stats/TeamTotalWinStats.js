import './TeamWinStats.scss'
import React from 'react'
import { VictoryPie } from 'victory'

const TeamTotalWinStats = ({data}) => {
    const totalWin = data? data.totalWinsPercentage : ''
    const totalLoss = totalWin? 100-totalWin : ''
    return (
        <div className='win-chart'>
            <div className="win-title">
                <p className='home'>TOTAL WINS</p>
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
                    { x: "Total Loss ", y: totalLoss, label:totalLoss },
                    { x: "Total Win", y: totalWin, label:totalWin},
                ]}
            />
        </div>
    )
}

export default TeamTotalWinStats