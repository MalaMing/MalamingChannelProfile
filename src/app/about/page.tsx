'use client';

import Image from 'next/image';
import { ibm400 } from '@/libs/font';
import { GridServiceItemProps } from '@/interfaces/GridServiceItemProps';
import { ServiceGridCrad } from '@/components/ServiceGridCard';

export default () => {
    const gridServiceItems: GridServiceItemProps[] = [
        {
            title: "video production",
            description: "สร้างสรรค์ผลงานให้กับผู้ชมเพื่อความสนุกและความบันเทิง",
            icon: "ion:game-controller",
        },
        {
            title: "product review",
            description: "แนะนำรีวิวเกมหรืออะไรที่สนใจอยู่ในช่วงนั้น",
            icon: "ph:monitor",
        },
        {
            title: "content diversity",
            description: "คอนเทนต์หลากหลาย ไม่ว่าจะเป็นเกม การรีวิวหรือการทำVLOGทั่วๆไป นอกจากนี้ยังมีการเขียนโปรแกรมเพิ่มเติม",
            icon: "icon-park-outline:code-computer",
        },
        {
            title: "entertainment",
            description: "อยากให้ผู้ชมมีรอยยิ้ม :)",
            icon: "ion:game-controller",
        }
    ];
    return (
        <main className="flex flex-row self-center px-5 w-full">
            <div className="relative xl:px-20 px-10 w-1/3 h-auto max-md:hidden">
                <Image
                    src="https://yt3.googleusercontent.com/ytc/AIdro_ml8aoFNxfb9ErORmPPwm7mtvUdo3ySmS6q6vnAwsw=s176-c-k-c0x00ffffff-no-rj"
                    className="rounded-full w-full"
                    alt="logo"
                    width={300}
                    height={300}
                />
            </div>
            <div className="flex flex-col  w-full">
                <div className="border-b border-[#6C4964] mb-7 pb-5">
                    <p className="text-6xl max-md:text-4xl text-[#49485B]">about me</p>
                    <p className={`${ibm400.className} text-xl max-md:text-sm pb-3 text-[#6C4964]`}>21 years / Thailand / Student</p>
                    <p className={`${ibm400.className} text-xl max-md:text-sm pb-3 text-[#49485B]`}>
                        สวัสดีค่าชื่อหมิงนะคะกำลังเรียนอยู่มหาวิทยาลัยค่ะที่สร้างช่องนี้ขึ้นมาก็เพื่ออยากลงความทรงจำต่างๆที่ตัวเองชอบในตอนนั้นค่ะ
                        โดยสไตล์การทำช่องอาจจะมีหลายอย่าง เช่น เกม, การทำ VLOG, การรีวิวของต่างๆ
                        และสุดท้ายคือการลงเกี่ยวกับการเขียน Program ค่ะ
                        อยากฝากเพื่อนๆติดตาม กันด้วยน้า ตั้งใจทำมากๆจริงๆงับ &lt;3
                    </p>
                </div>
                <p className="text-6xl max-md:text-4xl text-[#49485B]">services</p>
                <div className="grid grid-cols-2 gap-5 pt-5">
                    {gridServiceItems ? gridServiceItems.map((item, index) => {
                        return (
                            <ServiceGridCrad key={index} {...item} />
                        );
                    }) : null}
                </div>
            </div>
        </main>
    )
}