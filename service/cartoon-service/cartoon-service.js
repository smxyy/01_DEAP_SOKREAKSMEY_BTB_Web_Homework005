export async function AllCartoons(){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch (`${BASE_URL}/cartoon`);
        const data = await res.json();
        return data;
    } catch (error){
        return [];
    }
}

export async function CartoonByCartoonGenreId(id){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch (`${BASE_URL}/cartoon?genre=${id}`);
        const data = await res.json();
        return data;
    } catch (error){
        return [];
    }
}

export async function CartoonById(id){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch (`${BASE_URL}/cartoon/${id}`);
        const data = await res.json();
        console.log("data fetch:", data);
        return data;
    } catch (error){
        return [];
    }
}

export async function CartoonsByTitle(title){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch (`${BASE_URL}/cartoon?search=${title}`);
        const data = await res.json();
        return data;
    } catch (error){
        return [];
    }
}

export default { AllCartoons, CartoonByCartoonGenreId, CartoonById, CartoonsByTitle };