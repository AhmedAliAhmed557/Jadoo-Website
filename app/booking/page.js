"use client";
import BookingList from "@/components/BookingList";
import React from "react";
import CategorySvg from "@/components/Svg";
import { peopleSvg } from "/app/data.js";
import { hartSvg, bookingData, completeSvg } from "../data";
import BookingIcons from "@/components/BookingIcons";
function Booking() {
	console.log(bookingData);
	return (
		<div
			id='bookings'
			className='flex flex-col md:flex-row my-28 justify-center items-center md:gap-0 gap-[230px]'
		>
			<div className='info md:w-[50%] w-full  h-[500px] '>
				<p className='text-[#5E6282]'>Easy and Fast</p>
				<h1 className='text-black font-bold text-5xl font-volkhov my-5'>
					Book your next trip <br /> in 3 easy steps
				</h1>
				<BookingList />
			</div>
			<div className='image shadoww cursor-pointer shadow-gray-800 rounded-[24px] w-[370px]  h-[410px]  shadow-sm relative'>
				<img
					src='/book1.jpg'
					alt='book1'
					className='shadow-2xl rounded-[24px] my-10 mx-auto'
				/>
				<div className='info-list py-0 px-10'>
					<p className='text-[#5E6282] font-poppins font-normal text-18 my-3'>
						Trip To Greece
					</p>
					<p className='text-[#5E6282] flex gap-5'>
						<span>14-29 June</span>
						<span>by Ahmed Ali</span>
					</p>
					<BookingIcons />
					<p className='text-[#5E6282] font-poppins font-normal text-18 my-5  flex justify-between items-center'>
						<div className=' flex items-center gap-4'>
							<CategorySvg svg={peopleSvg} />
							<span>24 people going</span>
						</div>
						<CategorySvg svg={hartSvg} />
					</p>
					<div className='heart-box transition-all duration-300 opacity-0 flex w-[263px] h-[129px] gap-4 rounded-[18px] pt-3 px-2 shadow-lg absolute right-0 bottom-[46px] md:right-[-100px] bg-white'>
						<img
							src='/book2.png'
							alt=''
							className='w-[50px] h-[50px] rounded-full mx-auto'
						/>
						<div className='w-[70%]'>
							<p className='font-poppins font-normal text-base text-[#494480]'>
								Ongoing
							</p>
							<h3 className='font-poppins font-normal text-base text-[#080809] mb-5'>
								Trip to rome
							</h3>
							<p className='font-poppins font-normal text-base text-[#080809]'>
								<span className='text-[#8a79df]'>40%</span> completed
							</p>
							<CategorySvg svg={completeSvg} className='heart' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Booking;
