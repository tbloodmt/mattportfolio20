import React from 'react'
import profilePic from '../../assets/profilepic.jpg'
const About = () => {
    // make the image contained in the div, and then write something about myself
  return (
    <div>
        <section>
            <div>
                <img src={profilePic} alt="profilePic" />
            </div>
            <div>
                <p>
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt itaque nostrum atque nam id quod inventore deleniti exercitationem repellat praesentium est dolores, corporis vero, incidunt voluptatum! Velit perspiciatis nostrum reiciendis.
                </p>
            </div>
        </section>
    </div>
  )
}

export default About