import './AdversaryStats.scss'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer} from 'recharts';

const AdversaryStats = ({data}) => {
    return (
        <div className='points-chart'>
            <p>VICTORIES OVER OPPONENTS</p>
            <ResponsiveContainer width="90%" height="80%">
                <BarChart width={900} height={225} data={data && data.slice(0,9)}>
                    <XAxis dataKey="adversaryNickname"  />
                    <YAxis />
                    <Bar dataKey="victoriesAgainst" 
                        barSize={33} 
                        fill="rgba(160,0,5,0.9)"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AdversaryStats