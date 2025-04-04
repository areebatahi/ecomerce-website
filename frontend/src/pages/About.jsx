import React from 'react';

const About = () => {
	return (
		<div className='container mx-auto'>
			<div className='flex m-20 flex-col md:flex-row items-center justify-between'>
				{/* Text Content */}
				<div className='w-full mb-8 md:mb-0 '>
					<h1 className='text-2xl md:text-5xl font-bold mb-6 text-gray-900'>Welcome to Project Sharing Hub!</h1>
					<p className='text-md text-gray-800 leading-relaxed'>
						At <span className='font-semibold text-[#e57312]'>Project Sharing Hub,</span>, we believe in the power of collaboration and innovation. Our platform allows developers, designers, and creators to share their projects, discover inspiring work from others, and connect with like-minded individuals.
					</p>
					<h3 className='text-2xl font-bold mb-6 text-gray-900 mt-4'>Welcome to Project Sharing Hub!</h3>
					<p className='text-md text-gray-800 leading-relaxed'>
						<li>🛠 Showcase Your Work – Submit your projects with details like title, description, and hosted URL.</li>
						<li>🔍 Explore Amazing Projects – Discover a variety of projects from different developers.</li>
						<li>👥 Connect & Learn – Get inspired by the work of others and collaborate on exciting ideas.</li>
					</p>
					<h3 className='text-2xl font-bold mb-6 text-gray-900 mt-4'>Why Choose Us?</h3>
					<p className='text-md text-gray-800 leading-relaxed'>
						<li>🚀 Easy to Use – Submit and explore projects effortlessly.
						</li>
						<li>🔒 Secure & Reliable – We ensure data security and privacy.
						</li>
						<li>📢 Community-Driven – Built for developers, by developers!</li>
					</p>
					<p className='text-md text-gray-800 leading-relaxed'>
						Join us today and be part of a growing community of innovators!
					</p>

				</div>
			</div>
		</div>
	);
};

export default About;