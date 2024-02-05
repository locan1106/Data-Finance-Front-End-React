import React from "react";
import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div className="max-w-[1240px] mx-auto py-16 px-6 grid lg:grid-cols-3 gap-8 text-gray-300">
			<div className="">
				<h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
				<p className="py-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
					numquam quis iste suscipit sint reprehenderit doloremque nesciunt
					excepturi praesentium, libero, ut ipsam corrupti voluptatem
					necessitatibus iusto sed? Sint, repudiandae fugit?
				</p>
				<div className="flex justify-between md:w-[75%] my-6 ">
					<FaFacebookSquare
						size={30}
						className="cursor-pointer transition duration-300 hover:translate-y-[-8px]"
					/>
					<FaInstagram
						size={30}
						className="cursor-pointer transition duration-300 hover:translate-y-[-8px]"
					/>
					<FaTwitterSquare
						size={30}
						className="cursor-pointer transition duration-300 hover:translate-y-[-8px]"
					/>
					<FaGithubSquare
						size={30}
						className="cursor-pointer transition duration-300 hover:translate-y-[-8px]"
					/>
					<FaDribbbleSquare
						size={30}
						className="cursor-pointer transition duration-300 hover:translate-y-[-8px]"
					/>
				</div>
			</div>
			<div className="lg:col-span-2 flex justify-between">
				<div>
					<h6 className="font-medium text-lg text-gray-400 mb-2">Solutions</h6>
					<ul>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Analystics
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Marketing
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Commerce
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Insights
						</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-lg text-gray-400 mb-2">Support</h6>
					<ul>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Pricing
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Documentation
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Guildes
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							API Status
						</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-lg text-gray-400 mb-2">Company</h6>
					<ul>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							About us
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Blogs
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Jobs
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Press
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Careers
						</li>
					</ul>
				</div>
				<div>
					<h6 className="font-medium text-lg text-gray-400 mb-2">Legal</h6>
					<ul>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Claim
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Policy
						</li>
						<li className="py-2 text-sm hover:underline cursor-pointer">
							Terms
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
