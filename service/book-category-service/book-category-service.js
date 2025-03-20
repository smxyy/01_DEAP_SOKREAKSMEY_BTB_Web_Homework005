export async function AllBookCategories (){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch(`${BASE_URL}/book_category`);
        const data = await res.json();
        return data;
    } catch (error){
        return [];
    }
}

export async function BookCategoryById (id){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch(`${BASE_URL}/book_category/search?query=${id}`);
        const data = res.json();
        return data;
    } catch (error){
        return [];
    }
}

export default { AllBookCategories, BookCategoryById };