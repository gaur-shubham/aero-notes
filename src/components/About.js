import React, { useContext } from 'react'
import noteContext from '../context/Notes/noteContext'

export const About = () => {
    const a = useContext(noteContext)
    return (
        <div>
            This is About. {a.name}
        </div>
    )
}

export default About