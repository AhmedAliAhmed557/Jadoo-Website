import React from "react";
import { bookingData } from "../app/data";
import CategorySvg from "./Svg";
function BookingIcons() {
	return (
		<ul className='flex gap-[15px] my-[10px] mx-0'>
			{bookingData.map((item) => (
				<li key={item.id}>
					<CategorySvg svg={item.svg} />
				</li>
			))}
		</ul>
	);
}

export default BookingIcons;
