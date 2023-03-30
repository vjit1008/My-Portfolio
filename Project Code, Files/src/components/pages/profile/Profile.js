import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/sale.png';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='John Doe' />
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						Web Developer
					</span>
					<p>Full Stack Web Developer</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<a href='https://www.linkedin.com/in/vishvajit-gadakari-114014159/' target="_blank" style={{color:'blue',textTransform:'lowercase'}}><i className="fab fa-linkedin grey-text text-darken-4 social_style" style={{fontSize:'50px'}}></i></a>
						<a href='https://github.com/vjit1008' target="_blank" style={{color:'blue',textTransform:'lowercase'}}><i className='fab fa-github grey-text text-darken-4 social_style' style={{fontSize:'50px'}}></i></a>
						{/* <a href=""><i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i></a> */}
						{/* <a href=""><i className='fab fa-m grey-text text-darken-4 social_style'></i></a> */}
						{/* <a href=""><i className='fab fa-pinterest grey-text text-darken-4 social_style'></i></a> */}
					</p>
				</div>
			</div>
		</div>
	);
}
