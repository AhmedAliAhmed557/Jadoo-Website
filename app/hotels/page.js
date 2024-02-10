import React from "react";
import { Card, Row, Col } from "antd";
function Hotels() {
	const imageList = [
		"/hotel1.png",
		"/hotel2.png",
		"/hotel3.png",
		"/hotel4.png",
		"/hotel5.png",
	];
	return (
		<div
			gutter={[16, 16]}
			id='hotels'
			className='flex flex-wrap justify-between gap-4 my-4 items-center'
		>
			{imageList.map((imageUrl, index) => (
				<div className='group relative h-full w-[140px] overflow-hidden'>
					<img
						alt={`Image ${index + 1}`}
						src={imageUrl}
						className='h-full w-full grayscale transition-all duration-300 group-hover:grayscale-0 hover:bg-white hover:border hover:shadow-sm hover:rounded-[10px] cursor-pointer p-2'
					/>
				</div>
			))}
		</div>
	);
}

export default Hotels;
