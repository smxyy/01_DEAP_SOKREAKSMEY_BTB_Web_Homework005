import Link from "next/link";
import Image from "next/image";

export default function BookCard({bookId, image, title, description}){
    return (
        // <>
            <div >
                <div className="mt-20 flex gap-3 bg-gray-100 w-full p-8 h-[240px] rounded-3xl">
                    <div className="w-fit flex flex-col gap-3">
                        <div className="relative w-full">
                            <Image src={image} width={200} height={200} alt="Profile Picture" priority
                                   className="absolute -top-[6rem] w-full h-[240px] object-cover object-center rounded-2xl"
                            />
                        </div>
                        <Link href={`/read-full-article/${bookId}?type=book&name=book+categories&title=${title}`}>
                            <button
                                className="relative top-[9rem] uppercase w-fit text-[15px] px-3 py-2 bg-[var(--text-background)]
                                hover:bg-[var(--primary)] hover:text-white transition delay-75 hover:-translate-y-1 rounded-full ">
                                Read Full Article
                            </button>
                        </Link>
                    </div>
                    <div className="bg-gray-100 flex flex-col gap-2 px-5 rounded-3xl w-3/5">
                        <h5 className="font-medium text-2xl line-clamp-1">{title}</h5>
                        <p className="text-wrap line-clamp-6 text-justify">{description}</p>
                    </div>
                </div>
            </div>

        // </>
    );
}