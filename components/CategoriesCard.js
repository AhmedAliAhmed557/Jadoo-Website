"use client";
import React from "react";
import CategorySvg from "./Svg";
import "../app/globals.css";
import { categories } from "@/app/data";

function CategoriesCard() {
	return (
		<div className='flex flex-col items-center md:items-baseline md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center text-center my-24 text-black '>
			{categories.map((category) => (
				<div
					key={category.id}
					className='group card  w-[267px] h-[314px] flex flex-col justify-center items-center hover:shadow p-3 rounded-[36px] z-10 md:z-12 relative gap-3'
				>
					{/* <div className='w-[100px] h-[100px] rounded-tl-[30px] rounded-br-[10px] bg-[#DF6951] absolute left-[-40px] bottom-[-40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0'></div> */}
					<CategorySvg svg={category.svg} />
					<h2 className='font-open-sans font-semibold text-xl md:text-1xl lg:text-2xl xl:text-3xl text-center '>
						{category.name}
					</h2>
					<p>{category.description}</p>
				</div>
			))}
		</div>
	);
}

export default CategoriesCard;
