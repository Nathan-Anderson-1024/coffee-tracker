export const getProducts = async () => {
    try {
        const response = await fetch('/');
        const data = await response.json();
        return data;
    } catch (error) {
        return {error}
    }
}