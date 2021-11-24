import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export default function App() {
return (
	<div style={{ display: 'block', margin:"auto", padding: 30 }}>
	<h4>Holy Angel is the Right School for you! ^_^</h4>
	<Carousel>
  <Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://edukasyon-production.s3.amazonaws.com/uploads/facility/image/4415/SHS-graduation.jpg"
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>Campus life at HAU</h3>
			<p>Considered one of the most beautiful campuses in the country, HAU is "a universe within a university" where thousands of students, faculty, staff and visitors from diverse backgrounds converge every single day for intellectual, creative and social interaction</p>
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={500}>
		<img
			className="d-block w-100"
src="https://storage.googleapis.com/oa_disk001/hau/72/school_logo/1605728143-2719.jpg"
			alt="Image Two"
		/>
		<Carousel.Caption>
			<h3>New Normal, New Commitment</h3>
			<p>To this NEW NORMAL caused by the global COVID-19 pandemic, Holy Angel University pledges its NEW COMMITMENT to make online education work for you—if not as effective as regular face-to-face learning, and as enjoyable.</p>
		</Carousel.Caption>
		</Carousel.Item>

    <Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src="https://www.friendsofholyangel.org/assets/images/img-4810-1776x1184.jpg"
			alt="Image One"
		/>
		<Carousel.Caption>
			<h3>The Alumni</h3>
			<p>Holy Angel University keeps in touch with its Alumni and actively engages them through regular updates on activities that matter to them.</p>
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
  
	</div>
);
}
