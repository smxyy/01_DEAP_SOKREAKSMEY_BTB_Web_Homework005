import cartoonGenreService from "@/service/cartoon-genre-service/cartoon-genre-service";
import TypePageUi from "@/components/type/type-page-ui";
import cartoonService from "@/service/cartoon-service/cartoon-service";
import bookService from "@/service/book-service/book-service";
import bookCategoryService from "@/service/book-category-service/book-category-service";

export default async function OldSchoolCartoons({searchParams}) {
    const genresRes = await cartoonGenreService.AllCartoonGenres();
    const genres = genresRes.payload;

    const cartoonsRes = await cartoonService.AllCartoons();
    const cartoons = cartoonsRes.payload;

    const searchData = (await searchParams).search || null;

    const genreFilter = (await searchParams).genre || 0;

    let cartoonsByTitleRes;
    let cartoonsByTitle;

    let cartoonsByGenreRes;
    let cartoonsByGenre;

    let cartoonGenreRes;
    let cartoonGenre;

    if (searchData){
        cartoonsByTitleRes = await cartoonService.CartoonsByTitle(searchData);
        cartoonsByTitle = cartoonsByTitleRes.payload;
    }
    if (genreFilter !== 0 ){
        cartoonsByGenreRes = await cartoonService.CartoonByCartoonGenreId(genreFilter);
        cartoonsByGenre = cartoonsByGenreRes.payload;

        cartoonGenreRes = await cartoonGenreService.CartoonGenreById(genreFilter);
        cartoonGenre = cartoonGenreRes.payload;
    }

  return (
    <>
        <TypePageUi type={genres} data={cartoons} searchValue={searchData} categoryId={genreFilter}
                    bookSearched={cartoonsByTitle} bookFiltered={cartoonsByGenre} categoryName={cartoonGenre} />
    </>
  )
}
