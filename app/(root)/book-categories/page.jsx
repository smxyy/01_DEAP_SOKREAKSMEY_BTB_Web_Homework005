import bookCategoryService from "@/service/book-category-service/book-category-service";
import TypePageUi from "@/components/type/type-page-ui";
import bookService from "@/service/book-service/book-service";

export default async function BookCategoriesPage({searchParams}) {
    const categoriesRes = await bookCategoryService.AllBookCategories();
    const categories = categoriesRes.payload;

    const booksRes = await bookService.AllBooks();
    const books = booksRes.payload;

    const searchData = (await searchParams).search || null;

    const categoryFilter = (await searchParams).query || 0;

    let booksByTitleRes;
    let booksByTitle;

    let booksByCategoryRes;
    let booksByCategory;

    let bookCategoryRes;
    let bookCategory;

    if (searchData){
        booksByTitleRes = await bookService.BooksByTitle(searchData);
        booksByTitle = booksByTitleRes.payload;
    }
     if (categoryFilter !== 0 ){
         booksByCategoryRes = await bookService.BooksByCategoryId(categoryFilter);
         booksByCategory = booksByCategoryRes.payload;

         bookCategoryRes = await bookCategoryService.BookCategoryById(categoryFilter);
         bookCategory = bookCategoryRes.payload;
     }

  return (
    <>
        <TypePageUi type={categories} data={books} searchValue={searchData} categoryId={categoryFilter}
                    bookSearched={booksByTitle} bookFiltered={booksByCategory} categoryName={bookCategory} />
    </>
  );
}
