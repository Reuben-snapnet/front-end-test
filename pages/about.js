import React from 'react'
import { Toolbar } from '../components/toolbar'

const About = () => {
    return (
        <div className="flex text-center flex-col space-y-10 p-10 min-h-screen justify-center items-center">
            <Toolbar />

            <div className="text-center text-xl space-y-5">
                <h1 className="font-semibold">Events App</h1>

                <h3>Your one stop shop for the latest events happening</h3>
            </div>

            <div className="font-semibold">
                &copy; 2021
            </div>
        </div>
    )
}

export default About
