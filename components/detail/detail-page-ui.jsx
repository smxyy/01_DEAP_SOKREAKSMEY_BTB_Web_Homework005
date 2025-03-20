"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchParams} from "next/navigation";
import {ArrowRight2, Book, Book1, Eye, Home2, Link2} from "iconsax-react";
import React, {useState} from "react";

export default function DetailPageUi({data}){
    const searchParams = useSearchParams();
    const type = searchParams.get("type");
    const year = new Date(data?.published_year).getFullYear() || null;

    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isTypeHovered, setIsTypeHovered] = useState(false);

    return (
        <>
            <nav>
                <ul className="text-lg font-medium text-[var(--base)] flex gap-5 items-center">
                    <li>
                        <Link href="/" className="flex gap-2 items-center group"
                              onMouseEnter={ () => setIsHomeHovered(true) }
                              onMouseLeave={ () => setIsHomeHovered(false) }
                        >
                            {
                                isHomeHovered ? (
                                        <Link2 size="24" color="var(--primary)" />
                                    ) : (
                                        <Home2 size="24" color="var(--base)" />
                                )
                            }
                            <span className="group-hover:text-[var(--primary)]">Home</span>
                        </Link>
                    </li>
                    <ArrowRight2 size="24" color="var(--base)"/>
                    <li>
                        {
                            type === "book" ?
                                (
                                    <Link href="/book-categories" className="flex gap-2 items-center group"
                                          onMouseEnter = { () => setIsTypeHovered(true) }
                                          onMouseLeave = { () => setIsTypeHovered(false) }
                                    >
                                        {
                                            isTypeHovered ? (
                                                <Link2 size="24" color="var(--primary)" />
                                            ) : (
                                                <Book size="24" color="var(--base)"/>
                                            )
                                        }
                                        <span className="group-hover:text-[var(--primary)]">Book Categories</span>
                                    </Link>
                                ) : (
                                    <Link href="/old-school-cartoons" className="flex gap-2 items-center group"
                                          onMouseEnter={() => setIsTypeHovered(true)}
                                          onMouseLeave={() => setIsTypeHovered(false)}
                                    >
                                        {
                                            isTypeHovered ? (
                                                <Link2 size="24" color="var(--primary)"/>
                                            ) : (
                                                <Book size="24" color="var(--base)"/>
                                            )
                                        }
                                        <span className="group-hover:text-[var(--primary)]">Old School Cartoons</span>
                                    </Link>
                                )
                        }
                    </li>
                    <ArrowRight2 size="24" color="var(--base)"/>
                    <li className="flex gap-2 items-center">
                        <Book1 size="24" color="var(--secondary)"/>
                        <span className="text-[var(--secondary)]">{`${type === "cartoon" ? data.ct_title : data.book_title}`}</span>
                    </li>
                </ul>
            </nav>

            <section className="mt-36 bg-white w-full h-full rounded-[3rem] px-[5rem] pb-[5rem] text-[var(--base)]">
                    <div className="relative bg-amber-100">
                        <Image
                            className="absolute -top-[7.5rem] right-0 h-[450px] w-[300px] object-cover object-center rounded-3xl drop-shadow-xl"
                            src={data.image}
                            alt={`${type === "cartoon" ? data.ct_title : data.book_title}`}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="pt-[16rem] flex flex-col gap-3">
                        {
                            type === "cartoon" ? (
                                <>
                                    <h2 className="text-2xl font-medium">{data.ct_title}</h2>
                                    <p className="text-lg">by
                                        <span className="text-[var(--primary)] font-medium"> {data.ct_creator}</span>
                                    </p>
                                    <div>
                                        <p className="flex gap-3 text-[var(--primary)] font-medium text-lg items-center">
                                            <Eye size="24" color="var(--primary)"/>
                                            <span>{data.view_count} times</span>
                                            |
                                            <span>{year}</span>
                                        </p>
                                    </div>
                                    <p className="text-justify pt-3">{data.ct_description}</p>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-medium">{data.book_title}</h2>
                                    <p className="text-lg">by
                                        <span className="text-[var(--primary)] font-medium"> {data.book_author}</span>
                                    </p>
                                    <p className="text-justify pt-3">{data.description}</p>
                                </>
                            )
                        }
                    </div>
            </section>
        </>
    );
}