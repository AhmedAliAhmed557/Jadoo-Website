import React from "react";

function Heading({ text, paragraph }) {
	return (
		<div>
			<p className='font-poppins  text-18 text-center uppercase text-[#5E6282] '>
				{paragraph}
			</p>
			<h1 className='font-volkhov font-bold text-50 text-4xl text-center text-gray-600'>
				{text}
			</h1>
		</div>
	);
}

export default Heading;
