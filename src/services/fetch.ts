export async function fetchData<T extends {}, U>(url: string, body?: T) : Promise<U> {
    const response = await fetch(url, body);
    
    if (response.ok) {
        const data = await response.json();
        return data;
    }

    throw new Error('Impossible de contacter le serveur : caused by -> ', {cause: response});
}