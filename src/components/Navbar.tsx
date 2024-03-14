'use client'

import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    const navItems = [
        {
            title: "HOME",
            link: "/home"
        },
        {
            title: "ABOUT",
            link: "/about"
        },
        {
            title: "DONATE",
            link: "/donate"
        },
        {
            title: "PRODUCT",
            link: "/product"
        },
        {
            title: "FANART",
            link: "/fanart"
        },
        {
            title: "CONTACT",
            link: "/contact"
        },
        {
            title: "ASSOC. COMPANY",
            link: "/assoc-company"
        }
    ]
    return (
        <>
            <div className="container flex flex-row item-center w-full px-2 py-6">
                <div className="flex self-start items-center w-auto gap-3">
                    <Image src="/uno-icon.png" className="" alt="logo" width={50} height={82} />
                    <Link href="/" className="text-3xl text-[#6C4964]">
                        @Malaming
                    </Link>
                </div>
                <div className="flex justify-end items-center w-full">
                    <ul className="flex flex-row gap-4">
                        {navItems.map((item, index) => {
                            return (
                                <li key={index} className="flex">
                                    <Link href={item.link} className="text-3xl text-[#6C4964]">
                                        {item.title}
                                    </Link>
                                </li>
                                )
                            }
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}