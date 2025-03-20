export async function AllBooks(){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch(`${BASE_URL}/book`);
        const books = await res.json();
        return books;
    } catch (error){
        return [];
    }
}

export async function BookById (id){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch(`${BASE_URL}/book/${id}`);
        const data = res.json();
        return data;
    } catch (error){
        return [];
    }
}

export async function BooksByCategoryId (id){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch(`${BASE_URL}/book?query=${id}`);
        const data = res.json();
        return data;
    } catch (error){
        return [];
    }
}

export async function BooksByTitle (title){
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        const res = await fetch(`${BASE_URL}/book?search=${title}`);
        const data = res.json();
        return data;
    } catch (error){
        return [];
    }
}

export default { AllBooks, BookById, BooksByCategoryId, BooksByTitle };