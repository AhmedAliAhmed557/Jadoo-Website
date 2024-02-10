"use client";
import Destinations from "./destinations/page";
import Services from "./servcies/page";
import Booking from "./booking/page";
import Testimonials from "./testimonials/page";
import Hotels from "./hotels/page";
import Subscribe from "./subscribe/page";
import AppFooter from "@/components/AppFooter";

export default function Home() {
	return (
		<div className='main-app mx-auto mt-5 lg:mt-10 max-w-[85%] mb-20'>
			<Services />
			<Destinations />
			<Booking />
			<Testimonials />
			<Hotels />
			<Subscribe />
			<AppFooter />
		</div>
	);
}
