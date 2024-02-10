"use client";
import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer } = Layout;
const navLinks = ["Destinations", "Hotels", "Servcies", "Bookings", "Login"];
const items = navLinks.map((label, index) => ({
	key: index + 1,
	label: (
		<Link
			onClick={() => smoothScroll(`#${label.toLowerCase()}`)}
			href={`#${label.toLowerCase()}`}
			key={index + 1}
		>
			{label}
		</Link>
	),
}));
import { DownOutlined } from "@ant-design/icons";
import "../app/globals.css";
import CategorySvg from "./Svg";
import { logo } from "@/app/data";
const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout className='bg-white m-0 p-0 mb-7 md:mb-0  block'>
			<Header className='bg-white m-0 p-0 flex flex-col md:flex-row items-center justify-between gap-4  mx-auto'>
				<div className='demo-logo flex-1'>
					<CategorySvg svg={logo} />
				</div>
				<Menu
					theme='light'
					mode='horizontal'
					defaultSelectedKeys={["2"]}
					items={items}
					className='flex-shrink-0 ant-menu-no-border'
				/>
				<div className='relative  items-center space-x-4 md:space-x-0 lg:flex hidden'>
					<button className='px-4 text-black border border-black rounded-md focus:outline-none focus:border-black-500 focus:ring-1 focus:ring-black-500'>
						Sign up
					</button>
					<button
						onClick={toggleDropdown}
						className='px-4 text-black rounded-md focus:outline-none focus:border-black-500 focus:ring-1 focus:ring-black-500'
					>
						EN <DownOutlined />
					</button>

					{isOpen && (
						<div className='aabsolute mt-2 space-y-2 bg-white border rounded-md shadow-md md:hidden'>
							<button className='block w-full px-4 py-2 text-left hover:bg-gray-100'>
								AR
							</button>
							<button className='block w-full px-4 py-2 text-left hover:bg-gray-100'>
								FR
							</button>
							<button className='block w-full px-4 py-2 text-left hover:bg-gray-100'>
								EN
							</button>
						</div>
					)}
				</div>
			</Header>
		</Layout>
	);
};
export default App;
