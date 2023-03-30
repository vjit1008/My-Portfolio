import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../../navbar/Navbar';
// import { HashLink as Certifictae } from 
 


export default function Educations() {
	return (
		
		<div>
			
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						
						<tbody>
							<tr>
								<td>BE-Mechanical Engineering</td>
								{/* <td> 2018</td> */}
								<td>
									<Link to='/' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Mechanical Diploma</td>
								{/* <td>May 2020</td> */}
								<td>
									<Link to='/' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
						<thead>
							<tr>
								<th>Certificate</th>
								{/* <th>Date</th> */}
								<th></th>
							</tr>
						</thead>
							<tr>
								<td>Responsive-Web-Design</td>
								{/* <td>June 2020</td> */}
								<td>
								<a href='https://freecodecamp.org/certification/vishvajit_gadakari/responsive-web-design' target="_blank" class='btn blue lighten-2' rel="noopener noreferrer">
								View</a>
								</td>
							</tr>
							<tr>
								<td>Backend Web Development</td>
								{/* <td>Dec 2020</td> */}
								<td>
									
								<a href='https://cert.devtown.in/verify/pdSJ0' target="_blank" class='btn blue lighten-2' rel="noopener noreferrer">
								View</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
