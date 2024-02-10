import CategorySvg from "@/components/Svg";
import React from "react";
import { testimonialsSvg } from "../data";

function Testimonials() {
	return (
		<div className='flex justify-center items-center sm:flex-row flex-col mb-20 relative'>
			<div className='md:w-[50%] pb-[90px]'>
				<div className='flex flex-col'>
					<p className='text-[#5E6282]'>Testimonials</p>
					<h1 className='text-black font-bold text-5xl font-volkhov mb-14 mt-5'>
						What people say <br /> about Us.
					</h1>
				</div>
				<CategorySvg svg={testimonialsSvg} />
			</div>

			<div className='bg-white shadow-lg relative  md:w-[504px] w-full h-[245px] flex flex-col justify-between rounded-[10px] p-5'>
				<img
					src='/testamonials.png'
					alt=''
					className='absolute left-[-24px] top-[-45px] w-[68px] h-[68px] rounded-full'
				/>
				<p className='font-poppins font-normal text-base md:text-lg text-[#5E6282] mb-3'>
					“On the Windows talking painted pasture yet its express parties use.
					Sure last upon he same as knew next. Of believed or diverted no.”
				</p>
				<div>
					<h3 className='font-poppins font-semibold text-xl text-[#5E6282]'>
						Mike taylor
					</h3>
					<p className='font-poppins font-normal text-base md:text-lg text-[#5E6282]'>
						Lahore, Pakistan
					</p>
				</div>
			</div>
		</div>
	);
}

export default Testimonials;
