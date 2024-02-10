"use client";
import React from "react";
import DestinationCards from "@/components/DestinationCards";
import Heading from "@/components/Heading";
import CategorySvg from "@/components/Svg";
import { wireSvg } from "../data";

function Destinations() {
	const data = [
		{
			id: 1,
			location: "Rome, Italty",
			price: "$5,42k",
			img: "/Top Destinations 1.png",
			days: "10 Days Trip",
		},
		{
			id: 2,
			location: "London, UK",
			price: "$4.2k",
			img: "/Top Destinations 2.jpg",
			days: "12 Days Trip",
		},
		{
			id: 3,
			location: "Full Europe",
			price: "$15k",
			img: "/Top Destinations 3.png",
			days: "28 Days Trip",
		},
	];
	return (
		<div id='destinations' className='relative z-20'>
			<Heading text='Top Destinations' paragraph='Top Selling' />
			<DestinationCards data={data} />
			{/* <div className='absolute bottom-[50px] right-[-24px] z-10'>
				<CategorySvg svg={wireSvg} />
			</div> */}
		</div>
	);
}

export default Destinations;
