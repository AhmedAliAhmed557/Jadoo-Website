"use client";
import CategoriesCard from "@/components/CategoriesCard";
import Heading from "@/components/Heading";
import React from "react";

function Services() {
	return (
		<div className='services text-center ' id='servcies'>
			<Heading text='We Offer Best Services' paragraph='Services' />
			<div className='cards'></div>
			<CategoriesCard />
		</div>
	);
}

export default Services;
