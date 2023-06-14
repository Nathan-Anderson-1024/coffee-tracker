
export const getProducts = async () => {
    try {
        const response = await fetch('/api/coffee');
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
        //console.log(data)
        if (data.status === 200) {
            console.log('redirecting')
            // setLogin(true);
            return data
           
        }
    }
    catch (error) {
        return console.log(error)
    }
}

export const logoutUser = async () => {
    // const jsonPayload = JSON.stringify({
    //     email: username,
    //     password: password,
    // })
    try {
        const request = await fetch('/api/logout', {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            // body: jsonPayload
        })
        console.log(request)
        if (request.status === 200) {
            console.log('logging out')
            // setLogin(true);
            return request
           
        }
    }
    catch (error) {
        console.log(error)
    }
}

export const getFirstLastName = async (email) => {
    try {
        const data = await fetch('/api/login', {
            method: 'GET',
            body: email
        })
        console.log(data);
    }
    catch (error) {
        return console.log(error)
    }
} 
// TODO: Update fetch to send form info
export const updateInfo = async (formData) => {
    //console.log(formData)
    //const {fullName, userName, email} = formData
    //console.log(formData)
    try {
        const request = await fetch('/api/update', {
            // headers: {
            //     "Content-Type": "application/json"
            // },
            method: 'PUT',
            body: formData
        })
        const content = await request.json()
        return content
    }
    catch (error) {
        return error
    }
}