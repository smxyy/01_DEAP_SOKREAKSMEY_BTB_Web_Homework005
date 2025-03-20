"use client";

import ContentHeader from "@/components/general/content-header";
import {contents} from "@/lib/contents";
import Link from "next/link";
import TypeCard from "@/components/card/type-card";

export default function HomePageUi(){
    return (
        <>
            <ContentHeader pathname={""} data={""} categoryName={"Home Page"}/>
            <div className="flex w-full h-full justify-center items-center gap-16">
                {contents.map((content, index) => (
                    <Link href={`/${content.url}`} key={index} className="relative group">
                        <TypeCard content={content} />
                    </Link>
                ))}

            </div>
        </>
    );
}