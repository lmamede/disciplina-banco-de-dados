import './PointStats.scss'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer} from 'recharts';

const PointStats = ({data}) => {
    return (
        <div className='points-chart'>
            <p>POINTS ON SEASON</p>
            <ResponsiveContainer width="90%" height="70%">
                <BarChart width={800} height={225} data={data && data.slice(0,9)}>
                    <XAxis dataKey="teamNickname"  />
                    <YAxis />
                    <Bar dataKey="pointsAverage" 
                        barSize={33} 
                        fill="rgba(160,0,5,0.9)"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PointStats