import React from 'react'

import '../Css/Home.css'
import Search from './Search'

function Home() {
    return (
        <div>
            <section className='section1 '>
                <div className="left">
                    <h1>Explore Top Colleges & Courses Tailored to Your Passion!</h1>
                    <h2>Explore Simplilearn College Hub+</h2>
                    <h3>
                        <strong>3000+</strong> Happy students
                    </h3>
                    <h3>
                        <strong>500+</strong> top college and universities
                    </h3>
                    <h3>
                        <strong>100+</strong> Courses and Programs
                    </h3>
                    <button>Explore Programs</button>
                </div>
                <img src="https://www.simplilearn.com/ice9/assets/banner_revamp_01.png" alt="Loading" />
            </section>
            <Search></Search>
        </div>
    )
}

export default Home
