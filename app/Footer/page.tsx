
"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import BuyMeACoffee from '@/app/icons/buymeacoffee'
import Twitter from '@/app/icons/twitter'


function Footer() {
	const { setTheme } = useTheme();
	return (
		<div className="bg-gradient-to-r from-rose-100 to-teal-100 w-screen">
			<div className=" h-1/2 w-full border-t flex md:flex-row flex-col justify-around items-start p-2">
				<div className="p-2 ">
					<ul>
						<p className="font-bold text-md pb-6">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-9" viewBox="0 0 32 32"><path d="M22.65 19.25a1 1 0 0 0-1.41 0l-1 1a2.17 2.17 0 0 1-3 0L11.92 15a2.44 2.44 0 0 1 0-3.46l.79-.89a.53.53 0 0 0 .06-.1.94.94 0 0 0 .49-.32 1 1 0 0 0-.15-1.4L8.43 5a1 1 0 0 0-1.34.07l-1 1a10.2 10.2 0 0 0 0 14.42L11.58 26a10.09 10.09 0 0 0 14.24 0l1.07-1.07a1 1 0 0 0 0-1.42zm1.75 5.32a8.08 8.08 0 0 1-11.4 0l-5.48-5.48a8.2 8.2 0 0 1 0-11.58l.35-.35L11 9.65l-.46.53a4.42 4.42 0 0 0 0 6.24l5.28 5.28a4.1 4.1 0 0 0 5.82 0l.33-.33 2.83 2.83zm-.95-10.48c.76-1.15.4-2.13-1.51-4s-2.88-2.27-4-1.51a1 1 0 0 1-1.14-1.7c2.89-1.91 5.36.57 6.56 1.76s3.64 3.67 1.76 6.56a1 1 0 0 1-.83.44 1 1 0 0 1-.56-.16 1 1 0 0 1-.28-1.39zm4.48 4a1 1 0 0 1-.78.37 1 1 0 0 1-.63-.22 1 1 0 0 1-.15-1.4c3.23-4 0-8.09-1.6-9.65s-5.61-4.83-9.65-1.6a1 1 0 0 1-1.4-.15 1 1 0 0 1 .15-1.41c3.62-2.9 8.34-2.23 12.32 1.74s4.64 8.74 1.74 12.36z"/></svg>
							<span className="font-bold">Distress App</span>
						</p>
						<div className="flex gap-6 pb-1">
						<a href="" 
						className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
							<Twitter className="w-5 h-5" />
            </a>
			    <a href="" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                    <svg width="15" height="15" viewBox="0 0 15 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" 
                                clipRule="evenodd" 
                                d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z" 
                                fill="currentColor">
                        </path>
                    </svg>
            </a>
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className=" font-bold text-md pb-4">Product</p>
						<li className=" text-md pb-2 opacity-50 font-semibold hover:text-accent cursor-pointer">
							Stocks
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className=" font-bold text-md pb-4">Company</p>
						<li className=" text-md pb-2 opacity-50 font-semibold hover:text-accent cursor-pointer">
							About
						</li>
						<li className="text-md pb-2 opacity-50 font-semibold hover:text-accent cursor-pointer">
							Careers
						</li>
					</ul>
				</div>
				<div className="pt-1 justify-end right-0  flex">
					<div className=" font-bold text-md pb-4">
                        <Button variant="outline" size="icon">
                            <SunIcon className="h-[1.2rem] w-[1.2rem]  " onClick={() => setTheme("light")} />
                        </Button>
					    <Button variant="outline" size="icon">
					        <MoonIcon className=" h-[1.2rem] w-[1.2rem]  " onClick={() => setTheme("dark")} />
                        </Button>
					    <Button variant="outline" size="icon">
						<svg  onClick={() => setTheme("system")} className="h-[1.2rem] w-[1.2rem] " viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.25C1 3.11193 1.11193 3 1.25 3H13.75C13.8881 3 14 3.11193 14 3.25V10.75C14 10.8881 13.8881 11 13.75 11H1.25C1.11193 11 1 10.8881 1 10.75V3.25ZM1.25 2C0.559643 2 0 2.55964 0 3.25V10.75C0 11.4404 0.559644 12 1.25 12H5.07341L4.82991 13.2986C4.76645 13.6371 5.02612 13.95 5.37049 13.95H9.62951C9.97389 13.95 10.2336 13.6371 10.1701 13.2986L9.92659 12H13.75C14.4404 12 15 11.4404 15 10.75V3.25C15 2.55964 14.4404 2 13.75 2H1.25ZM9.01091 12H5.98909L5.79222 13.05H9.20778L9.01091 12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </Button>
						</div>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center   p-1 ">
			build by 
			<a
          href="https://gavin-arori-porforlio.vercel.app/"
          target="_blank"
          className="font-semibold ml-1 hover:text-white"
          rel="noreferrer"
        >
          Gavin Arori
        </a>
        
        <p
          className="font-semibold ml-1 ">
          Front-end developer
        </p>
				<a
            href="https://www.buymeacoffee.com/arorigavin"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg mb-3  space-x-3 justify-center items-center px-6 mt-1 py-2 inline-flex border hover:scale-105 transition-all duration-75 t hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" 
          >
            <BuyMeACoffee className="w-6 h-6" />
            <p className="font-medium  flex-row">Buy me a coffee</p>
          </a>
			</div>
		</div>
	);
}

export default Footer;
