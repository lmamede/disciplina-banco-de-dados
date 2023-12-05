import {React, useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navlink = ({to, text}) => {
    const [className, setClassName] = useState('')
    const location = useLocation().pathname

    useEffect(() => {
      return () => {
        var active = location === to 
        setClassName(active ? 'active':'')
      }
    }, [to, location])
    

    return (
        <Link className={className} to={to}>{text}</Link>
    )
}

export default Navlink