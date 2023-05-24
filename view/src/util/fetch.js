import axios from 'axios'
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

export const createUser = async (userInfo) => {
    try {
        const data = await fetch('/api/register', {
            method: 'POST',
            body: userInfo
        });
        const content = await data.json()
        
        return content;
    }
    catch (error) {
        return {error}
    }
}

export const loginUser = async (username, password) => {
    const jsonPayload = JSON.stringify({
        email: username,
        password: password,
    })
    try {
        const data = await fetch('/api/login', {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: jsonPayload
        })
        console.log(data)
        // axios.post('/api/login', {
        //     email: username,
        //     password: password
        // }).then(response => {
        //     console.log('login response: ')
        //     console.log(response)
        // }).catch(error => {
        //     console.log(error)
        // })
        // console.log('in fetch.js')
        //console.log(data)
        // const content = await data.json();
        // return content;
    }
    catch (error) {
        return console.log(error)
    }
}