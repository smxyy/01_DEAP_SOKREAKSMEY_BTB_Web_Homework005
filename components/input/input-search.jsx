"use client";

import {SearchNormal1} from "iconsax-react";
import Form from "next/form";

import {usePathname} from "next/navigation";

export default function InputSearch(){
    const pathname = usePathname();
    return (
        <>
            <Form action={pathname} className="w-full">
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                        <SearchNormal1 size="18" color="oklch(0.707 0.022 261.325)"/>
                    </div>
                    <input type="search" id="default-search" name="search"
                           className="block w-full p-2.5 ps-12 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:outline-2 focus:outline-offset-2 focus:outline-[var(--primary)]"
                           placeholder="Search book or category"/>
                </div>
            </Form>
        </>
    );
}