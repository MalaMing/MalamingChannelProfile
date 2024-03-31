'use client';

import { Icon } from '@iconify/react';
import { ibm400 } from '@/libs/font';
import { GridServiceItemProps } from '@/interfaces/GridServiceItemProps';

export const ServiceGridCrad = (obj: GridServiceItemProps) => {
    return (
        <div className="flex flex-col p-5">
            <Icon icon={obj.icon} width="100" height="100" style={{ color: "#61637B" }} />
            <p className="text-4xl max-md:text-2xl text-[#6C4964]">{obj.title}</p>
            <p className={`${ibm400.className} text-xl max-md:text-sm pb-3 text-[#49485B]`}>{obj.description}</p>
        </div>
    );
}