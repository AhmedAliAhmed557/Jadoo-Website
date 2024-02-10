"use client";
import React from "react";
import { Card } from "antd";
import { wireSvg } from "@/app/data";
import CategorySvg from "./Svg";

const { Meta } = Card;

const DestinationCards = ({ data }) => {
	console.log(data);
	return (
		<div className='flex justify-center flex-wrap mt-10 '>
			{data.map((item) => (
				<Card
					className='card w-[300px] m-5 p-0 rounded-[24px] shadow-md'
					key={item.id}
				>
					<img
						className='object-top h-[300px] w-full object-cover rounded-tl-[24px] rounded-tr-[24px] bg-gray-300 '
						alt='Example'
						src={item.img}
					/>
					<p className='mx-[10px] p-[10px] flex justify-between items-center'>
						<span>{item.location}</span> <span>{item.price}</span>
					</p>
					<p className='mx-[10px] mb-4 p-[10px] flex justify-start items-center gap-4   '>
						<span>
							<svg
								width='18'
								height='18'
								viewBox='0 0 18 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M17.0682 1.76033L10.1932 16.7603C10.1357 16.886 10.0381 16.989 9.91582 17.0533C9.7935 17.1177 9.65332 17.1396 9.5172 17.1158C9.38108 17.092 9.25669 17.0237 9.16348 16.9217C9.07028 16.8197 9.01352 16.6896 9.00208 16.5519L8.42083 9.57896L1.44789 8.99771C1.31017 8.98627 1.18013 8.92951 1.0781 8.8363C0.976073 8.7431 0.90781 8.61871 0.88399 8.48258C0.860169 8.34646 0.882135 8.20628 0.946451 8.08397C1.01077 7.96166 1.11381 7.86411 1.23945 7.80658L16.2395 0.93158C16.3554 0.878438 16.4849 0.862048 16.6104 0.884614C16.736 0.907179 16.8516 0.967618 16.9418 1.05781C17.032 1.14801 17.0924 1.26365 17.115 1.38919C17.1375 1.51474 17.1212 1.64418 17.068 1.76014L17.0682 1.76033Z'
									fill='#080809'
								/>
							</svg>
						</span>
						<span>{item.days}</span>
					</p>
				</Card>
			))}
		</div>
	);
};

export default DestinationCards;
