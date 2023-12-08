import './AdversaryStats.scss'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer} from 'recharts';

const GameStats = ({data}) => {
    const plots = {
        "metrics" : ["3-Point", "Free Throw", "Field Goal"],
        "values" : [data.home3PointPercentage, data.homeFreeThrowPercentage, data.homeFieldGoalPercentage]
    }

    console.log(plots)
    return (
        <div className='points-chart'>
            <ResponsiveContainer width="90%" height="80%">
                <BarChart width={900} height={225} data={plots && plots}>
                    <XAxis dataKey="metrics"  />
                    <YAxis />
                    <Bar dataKey="values"
                        barSize={33} 
                        fill="rgba(160,0,5,0.9)"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GameStats