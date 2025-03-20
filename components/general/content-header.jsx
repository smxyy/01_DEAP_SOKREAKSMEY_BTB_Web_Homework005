import SelectData from "@/components/general/select-data";

export default function ContentHeader({ pathname, type, search, categoryName}){
  return (
    <>
        <div>
            <div className="flex justify-between">
                {pathname ===  "/book-categories" ? (
                        <p className="px-4 py-2 bg-gray-100 w-fit rounded-xl font-semibold text-[var(--primary)]">
                            {categoryName ? categoryName?.book_cate_name ? categoryName.book_cate_name : categoryName : "All books"}
                        </p>
                    ) : (
                        <p className="px-4 py-2 bg-gray-100 w-fit rounded-xl font-semibold text-[var(--primary)]">
                            {categoryName ? categoryName?.cartoon_genre ? categoryName.cartoon_genre : categoryName : "Old School Cartoons"}
                        </p>
                    )
                }
                {pathname ? <SelectData pathname={pathname} type={type} search={search}/>
                    : ""
                }
            </div>
            <hr className="mt-2 border-blue-100 pb-10"/>
        </div>
    </>
  );
}