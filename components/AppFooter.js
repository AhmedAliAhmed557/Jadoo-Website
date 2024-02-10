import { Layout, Row, Col, Typography, Space, Button } from "antd";
import {
	FacebookOutlined,
	TwitterOutlined,
	InstagramOutlined,
	DownloadOutlined,
} from "@ant-design/icons";
import { logo, footerIcons } from "@/app/data";
import CategorySvg from "./Svg";

const { Footer } = Layout;
const { Link, Text } = Typography;

const AppFooter = () => {
	return (
		<Footer
			style={{ background: "#fff", color: "white" }}
			className='text-center md:text-left'
		>
			<Row gutter={16} justify='space-around' align='top'>
				<Col className='pt-3 ' xs={24} sm={12} md={6} lg={4}>
					<Space
						direction='vertical'
						className='md:block flex justify-center items-center'
					>
						<CategorySvg svg={logo} />
						<Text>
							Book your trip in minute, get full Control for much longer.
						</Text>
					</Space>
				</Col>
				<Col className='pt-4' xs={24} sm={12} md={6} lg={4}>
					<Space direction='vertical'>
						<Text
							className='font-poppins font-bold  text-[21px] text-center'
							strong
						>
							Company
						</Text>
						<Link href='#' className='font-poppins text-[18px] footer-link'>
							About
						</Link>
						<Link href='#' className='font-poppins text-[18px] footer-link'>
							Careers
						</Link>
						<Link href='#' className='font-poppins text-[18px] footer-link'>
							Mobile
						</Link>
					</Space>
				</Col>
				<Col className='pt-4' xs={24} sm={12} md={6} lg={4}>
					<Space direction='vertical'>
						<Text
							className='font-poppins font-bold  text-[21px] text-center'
							strong
						>
							Contact
						</Text>
						<Link href='#' className='font-poppins text-[18px] footer-link'>
							Help/FAQ
						</Link>
						<Link href='#' className='font-poppins text-[18px] footer-link'>
							Press
						</Link>
						<Link href='#' className='font-poppins text-[18px] footer-link'>
							Affilates
						</Link>
					</Space>
				</Col>
				<Col className='pt-4' xs={24} sm={12} md={6} lg={4}>
					<Space direction='vertical'>
						<Text
							className='font-poppins font-bold  text-[21px] text-center'
							strong
						>
							More
						</Text>
						<Link href='#' className='font-poppins text-[18px] footer-link'>
							Airlinefees
						</Link>
						<Link href='#' className='font-poppins text-[18px] footer-link'>
							Airline
						</Link>
						<Link href='#' className='font-poppins text-[18px] footer-link'>
							Low fare tips
						</Link>
					</Space>
				</Col>
				<Col xs={24} sm={24} md={6} lg={6}>
					<Space direction='vertical' className='cursor-pointer'>
						<CategorySvg svg={footerIcons} />
					</Space>
				</Col>
			</Row>
			<div className='text-center mt-8 text-gray-500 pt-10'>
				All has been created &copy; 2024 Ahmed Ali
			</div>
		</Footer>
	);
};

export default AppFooter;
