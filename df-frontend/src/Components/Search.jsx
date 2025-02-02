import React, { useEffect, useState } from 'react'
import '../Css/Search.css'
import axios from 'axios'
import CollegeCard from './CollegeCard';

function Search() {
    const [colleges, setColleges] = useState([])
    const [filteredColleges, setFilteredColleges] = useState([])
    const [isDesign, setIsDesign] = useState(false)
    const [isParamedical, setIsParamedical] = useState(false)
    const [isEngineering, setIsEngineering] = useState(false)
    const [userPrompt, setUserPrompt] = useState('')

    useEffect(() => {
        fetchAll()
    }, []);

    async function fetchAll() {
        const res = await axios.get(`${import.meta.env.VITE_BURL}/all/college`)
        
        setColleges(res.data.colleges)
    }

    async function Searching() {
        console.log(userPrompt)

        const res = await axios.post(`${import.meta.env.VITE_BURL}/search/college`, {
            userPrompt
        })

        // console.log(res.data.colleges)
        setFilteredColleges(res.data.colleges)

    }

    // Handle changes for the toggles
    const handleDesignToggle = () => setIsDesign(!isDesign)
    const handleParamedicalToggle = () => setIsParamedical(!isParamedical)
    const handleEngineeringToggle = () => setIsEngineering(!isEngineering)

    useEffect(() => {
        filterColleges()
    }, [isDesign, isParamedical, isEngineering, colleges])

    // Function to filter colleges based on selected categories
    const filterColleges = () => {
        let filtered = colleges
        if (isDesign) {
            filtered = filtered.filter(college => college['Course Stream'] === 'Design')
        }
        if (isParamedical) {
            filtered = filtered.filter(college => college['Course Stream'] === 'Paramedical')
        }
        if (isEngineering) {
            filtered = filtered.filter(college => college['Course Stream'] === 'Engineering')
        }
        setFilteredColleges(filtered)
    }

    return (
        <div className='Search'>
            <div className="top">
                <div className="search-bar">
                    <input type="text" placeholder="Search by name or location" onChange={(e) => setUserPrompt(e.target.value)} />
                    <button onClick={Searching}>Search</button>
                </div>
                <div className="filter-toggles">
                    <label className="toggle">
                        <input
                            type="checkbox"
                            name="design"
                            checked={isDesign}
                            onChange={handleDesignToggle}
                        />
                        <span className="slider"></span>
                        <span className="label-text">Design</span>
                    </label>
                    <label className="toggle">
                        <input
                            type="checkbox"
                            name="paramedical"
                            checked={isParamedical}
                            onChange={handleParamedicalToggle}
                        />
                        <span className="slider"></span>
                        <span className="label-text">Paramedical</span>
                    </label>
                    <label className="toggle">
                        <input
                            type="checkbox"
                            name="engineering"
                            checked={isEngineering}
                            onChange={handleEngineeringToggle}
                        />
                        <span className="slider"></span>
                        <span className="label-text">Engineering</span>
                    </label>
                </div>
            </div>
            <div className="bottom">
                {filterColleges ? <>
                    {filteredColleges && filteredColleges.map((college) => {
                        return (
                            <CollegeCard key={college._id} college={college}></CollegeCard>
                        )
                    })}
                </> : <h1>No colleges found</h1>}
            </div>
        </div>
    )
}

export default Search
