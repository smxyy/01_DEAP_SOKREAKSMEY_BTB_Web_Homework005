export async function AllCartoonGenres (){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch(`${BASE_URL}/cartoon_genre`);
        const data = res.json();
        return data;
    } catch (error){
        return [];
    }
}

export async function CartoonGenreById (id){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch(`${BASE_URL}/cartoon_genre/search?genre=${id}`);
        const data = res.json();
        return data;
    } catch (error){
        return [];
    }
}

export default { AllCartoonGenres, CartoonGenreById };