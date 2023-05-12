export const getProducts = async () => {
    try {
        const response = await fetch('/api/coffee');
        console.log(response);
        const json = await response.json();
        return json
    } catch (error) {
        return {error}
    }
    
};