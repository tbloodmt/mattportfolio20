import React from 'react'
import profilePic from '../../assets/profilepic.jpg'
import "./about.css"
const About = () => {
    // make the image contained in the div, and then write something about myself
  return (
    <>
    <header className="heading">
        <h1>Matthew Thomas</h1>
    </header>
        <section className="profile-container">
            <div className="image-container">
                <img src={profilePic} alt="profilePic" />
            </div>
            <div className="profile-content">
                <p>
                    I'm New Jersey born and raised. My hobbies include playing video games, going on long drives, reading non-fiction books, and lifting weights.
                </p>
            </div>
        </section>
    </>
  )
}

export default About