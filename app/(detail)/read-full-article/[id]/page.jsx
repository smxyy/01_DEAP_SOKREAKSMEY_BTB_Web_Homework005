import DetailPageUi from "@/components/detail/detail-page-ui";
import bookService from "@/service/book-service/book-service";
import cartoonService from "@/service/cartoon-service/cartoon-service";

export default async function DetailPage({params, searchParams}){
    const id = (await params).id;
    const type = (await searchParams)?.type || null;

    let book;
    let cartoon;

    if (type === "cartoon"){
        const cartoonRes = await cartoonService.CartoonById(id);
        cartoon = cartoonRes.payload;
    } else if (type === "book"){
        const bookRes = await bookService.BookById(id);
        book = bookRes.payload;
    }

    return (
        <>
            {
                type === "cartoon" ? (
                    <DetailPageUi data={cartoon} />
                ) : (
                    <DetailPageUi data={book} />
                )
            }
        </>
    );
}