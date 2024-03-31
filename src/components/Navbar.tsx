'use client'

import Image from "next/image"
import Link from "next/link"
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        {
            title: "HOME",
            link: "/",
            isShow: true
        },
        {
            title: "ABOUT",
            link: "/about",
            isShow: true
        },
        {
            title: "DONATE",
            link: "/donate",
            isShow: true
        },
        {
            title: "PRODUCT",
            link: "/product",
            isShow: false
        },
        {
            title: "FANART",
            link: "/fanart",
            isShow: true
        },
        {
            title: "CONTACT",
            link: "/contact",
            isShow: true
        },
        {
            title: "ASSOC. COMPANY",
            link: "/assoc-company",
            isShow: true
        }
    ]

    const items: MenuProps['items'] = navItems.map((item, index) => {
        if (item.isShow) {
            return {
                key: index.toString(),
                label: (
                    <Link href={item.link} className="text-3xl text-[#6C4964]">
                        {item.title}
                    </Link>
                ),
            };
        } else {
            return null;
        }
    });

    return (
        <>
            <div className="container flex flex-row item-center w-full px-2 py-6">
                <div className="flex self-start items-center w-auto gap-3">
                    <Image src="/uno-icon.png" className="" alt="logo" width={50} height={82} />
                    <Link href="/" className="text-3xl text-[#6C4964]">
                        @Malaming
                    </Link>
                </div>
                <div className="flex justify-end items-center w-full ">
                    <ul className="flex flex-row gap-6 max-lg:hidden">
                        {navItems.map((item, index) => {
                            if (item.isShow) {
                                if (item.link === pathname) {
                                    return (
                                        <li key={index} className="flex">
                                        <div className="text-3xl text-[#b9aeb7] cursor-default">
                                            {item.title}
                                        </div>
                                    </li>
                                    );
                                } else {
                                    return (
                                        <li key={index} className="flex">
                                            <div onClick={() => router.push(item.link)} className="text-3xl text-[#6C4964] hover:text-[#b9aeb7] cursor-pointer">
                                                {item.title}
                                            </div>
                                        </li>
                                    )
                                }
                            }
                        }
                        )}
                    </ul>

                    <Dropdown menu={{ items }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current cursor-pointer lg:hidden"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h30M4 12h30M4 18h30"></path></svg>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}