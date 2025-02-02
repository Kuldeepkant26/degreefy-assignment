import React from 'react';

function CollegeCard({ college }) {
    return (
        <div className="college-card">
            <h2 className="college-name">{college["Institute Name"]}</h2>
            <p className="college-location">{college["Institute City"]}, {college["Institute State"]}</p>

            <div className="college-details">
                <p><span className="detail-label">Course:</span> {college["Course Name"]}</p>
                <p><span className="detail-label">Stream:</span> {college["Course Stream"]}</p>
                <p><span className="detail-label">Level:</span> {college.Level}</p>
            </div>

            <div className="college-duration-fee">
                <p><span className="detail-label">Duration:</span> {college["Course Duration"]} {college["Duration Type"]}</p>
                <p><span className="detail-label">Fee:</span> ₹{college.Fee} ({college["Fee Type"]})</p>
            </div>

            <button className="view-details-btn">
                View Details
            </button>
        </div>
    );
}

export default CollegeCard;