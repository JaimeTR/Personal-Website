import React from "react";
import Button from "./Button";
import social from "../data/social";

export default function Contact({content}) {
	return (
		<div className='section-container contact-section'>
			<h2 className='section-title'>{content.title}</h2>
			<p className='contact-text'>{content.paragraph}</p>
			<p className='mail'>camilapaladines27@gmail.com</p>
			<Button value={content.button} type='solid' link='mailto:camilapaladines27@gmail.com' />
			<div className='all-social-links'>
				{social.map((s) => (
					<a href={s.link} target='_blank' rel='noreferrer' title={s.name}>
						<img alt={s.name} src={s.img}></img>
					</a>
				))}
			</div>
		</div>
	);
}
