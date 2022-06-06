/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Typical from 'react-typical';

export default function Profile() {
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<a href="#">
							<i className="fa fa-facebook-square"></i>
						</a>
						<a href="#">
							<i className="fa fa-google-plus-square"></i>
						</a>
						<a href="#">
							<i className="fa fa-instagram"></i>
						</a>
						<a href="#">
							<i className="fa fa-youtube-square"></i>
						</a>
						<a href="#">
							<i className="fa fa-twitter"></i>
						</a>
					</div>

					<div className="profile-details-name">
						<span className="primary-text">
							Hello, I'm{' '}
							<span className="highlighted-text">
								{' '}
								Kalpesh Jain{' '}
							</span>
						</span>
					</div>

					<div className="profile-details-role">
						<span className="primary-text">
							<h1>
								<Typical
									loop={Infinity}
									steps={[
										'React Js 🤦‍♂️',
										1000,
										'Vue Js 👀',
										1000,
										'Shopify ✌',
										1000,
										'Laravel 😍',
										1000,
									]}
								/>
							</h1>
							<span className="profile-role-tagline">
								Knack of building applications with
								front and back end operations.
							</span>
						</span>
					</div>
					<div className="profile-optins">
						<button className="btn btn-primary">
							Hire Me
						</button>
						<a href="ehizcv.pdf" download="Ehiedu ehizcv.pdf">
							<button className="btn highlighted-btn">
								Hire Me
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
