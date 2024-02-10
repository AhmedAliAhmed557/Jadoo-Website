import React from "react";
import HeroImg from "../public/girl.png";
import { findOut, playSvg } from "@/app/data";
import CategorySvg from "./Svg";
function Hero() {
	return (
		<div className='hero w-full mx-auto px-3 flex flex-wrap justify-between items-center h-lvh'>
			<div className='info w-full md:w-1/2 max-w-1/2'>
				<p className='text-[#DF6951] my-3 font-bold font-poppins text-base md:text-lg leading-[30px] uppercase'>
					Best Destinations around the world
				</p>
				<h2 className='font-bold text-volkhov text-black font-volkhov text-5xl tracking-wider md:text-6xl'>
					Travel, enjoy <br />
					and live a new <br />
					and full life
				</h2>
				<p className='font-normal font-poppins text-[#5E6282] text-base md:text-lg leading-[30px] my-3'>
					Built Wicket longer admire do barton vanity itself do in it. Preferred
					to sportsmen it engrossed listening. Park gate sell they west hard for
					the.
				</p>
				<div className='demo flex items-center justify-center md:justify-start'>
					<CategorySvg svg={findOut} />
					<div className='flex items-center flex-1 justify-center md:justify-start'>
						<CategorySvg svg={playSvg} />
						<span className='md:relative md:left-[-14px] w-full top-[-14px] text-black'>
							Play Demo
						</span>
					</div>
				</div>
			</div>
			<img
				src='/girl.png'
				alt='Girl Image'
				className='w-full md:w-1/2 max-w-1/2'
			/>
		</div>
	);
}

export default Hero;
