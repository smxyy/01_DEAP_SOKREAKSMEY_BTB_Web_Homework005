"use client";

import Image from "next/image";
import {Eye} from "iconsax-react";

export default function CartoonCard({image, title, viewCount, publishedYear}){
    const year = new Date(publishedYear).getFullYear();
    return (
        <>
            <div>
                <Image
                    className="w-[250px] h-[320px] object-cover rounded-3xl"
                    src={image}
                    alt="profile"
                    width={100}
                    height={100}
                    priority
                />
                <h4 className="text-xl font-medium text-[var(--base)] pt-4 pb-2">{title}</h4>
                <div>
                    <p className="flex gap-2 text-[var(--primary)] font-medium text-lg">
                        <Eye size="24" color="var(--primary)"/>
                        <span>{viewCount}</span>
                        |
                        <span>{year}</span>
                    </p>
                </div>
            </div>
        </>
    );
}