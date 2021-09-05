import React from "react";
import "../css/Experience.css";
import searchingJob from "../img/searching-job.svg";

export default function Experience() {
	return (
		<div className='experience-section'>
			<p className='section-title'>Experience</p>
			<img src={searchingJob} alt='Searching job' />
			<p className='section-text'>I am currently looking for my first job.</p>
		</div>
	);
}
