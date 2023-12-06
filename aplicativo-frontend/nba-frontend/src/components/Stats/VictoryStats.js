import './PointStats.scss'
import React from 'react'
import { VictoryPie } from 'victory'

const VictoryStats = ({data}) => {
    const homeWin = data[0].homeWinPercentage
    const awayWin = data[0].awayWinPercentage
    return (
        <div className='victory-chart'>
            <div className="chart-title">
                <p className='home'>HOME WINS</p>
                <p className='away'>AWAY WINS</p>
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
                      fontSize: 22, fill: "#666"
                    }
                  }}    
                data={[
                    { x: "Away Win ", y: awayWin, label:awayWin },
                    { x: "Home Win", y: homeWin, label:homeWin},
                ]}
            />
        </div>
    )
}

export default VictoryStats