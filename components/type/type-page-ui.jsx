"use client";

import {usePathname} from "next/navigation";
import ContentHeader from "@/components/general/content-header";
import BookCard from "@/components/card/book-card";
import CartoonCard from "@/components/card/cartoon-card";
import Link from "next/link";

export default function TypePageUi({type, data, searchValue, categoryId, bookSearched, bookFiltered, categoryName}){
    const pathname = usePathname();
    return (
        <>
            {pathname === "/book-categories" ? (
                    <div className="h-full flex flex-col">
                        <ContentHeader pathname={pathname} type={type} search={searchValue} categoryName={categoryName} />
                        <div className="grid grid-cols-2 h-full gap-5 z-10 overflow-auto">
                            {
                                (!searchValue && categoryId === 0) ?
                                    data.map((book)=> (
                                        <BookCard key={book.id} bookId={book.id} image={book.image} title={book.book_title} description={book.description} />
                                    ))
                                    :
                                    (searchValue && categoryId === 0) ?
                                        bookSearched.map((book)=> (
                                            <BookCard key={book.id} bookId={book.id} image={book.image} title={book.book_title} description={book.description} />
                                        ))
                                        :
                                        bookFiltered.map((book)=> (
                                            <BookCard key={book.id} bookId={book.id} image={book.image} title={book.book_title} description={book.description} />
                                        ))

                            }
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col">
                        <ContentHeader pathname={pathname} type={type} search={searchValue} categoryName={categoryName} />
                        <div className="grid grid-cols-3 h-full gap-8 z-10 overflow-auto w-full mx-auto">

                            {
                                (!searchValue && categoryId === 0) ?
                                    data.map((cartoon)=> (
                                        <Link
                                            key={cartoon.id}
                                            href={`/read-full-article/${cartoon.id}?type=cartoon&name=old+school+cartoons&title=${cartoon.ct_title}`}
                                            className="cursor-pointer flex flex-col items-center"
                                        >
                                            <CartoonCard image={cartoon.image} title={cartoon.ct_title}
                                                         publishedYear={cartoon.published_year}  viewCount={cartoon.view_count}
                                            />
                                        </Link>
                                    ))
                                    :
                                    (searchValue && categoryId === 0) ?
                                        bookSearched.map((cartoon)=> (
                                            <Link
                                                key={cartoon.id}
                                                href={`/read-full-article/${cartoon.id}?type=cartoon&name=old+school+cartoons&title=${cartoon.ct_title}`}
                                                className="cursor-pointer flex flex-col items-center"
                                            >
                                                <CartoonCard image={cartoon.image} title={cartoon.ct_title}
                                                             publishedYear={cartoon.published_year}  viewCount={cartoon.view_count}
                                                />
                                            </Link>
                                        ))
                                        :
                                        bookFiltered.map((cartoon)=> (
                                            <Link
                                                key={cartoon.id}
                                                href={`/read-full-article/${cartoon.id}?type=cartoon&name=old+school+cartoons&title=${cartoon.ct_title}`}
                                                className="cursor-pointer flex flex-col items-center"
                                            >
                                                <CartoonCard image={cartoon.image} title={cartoon.ct_title}
                                                             publishedYear={cartoon.published_year}  viewCount={cartoon.view_count}
                                                />
                                            </Link>
                                        ))

                            }

                        </div>
                    </div>
                )
            }
        </>
    );
}