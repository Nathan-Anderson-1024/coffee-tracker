
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

export const loginUser = async (email, password) => {
    const jsonPayload = JSON.stringify({
        email: email,
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
    try {
        const request = await fetch('/api/update', {
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

export const updatePasswordInfo = async (currentPassword, newPassword, confirmNewPasswordPassword, email) => {
    try {
        const request = await fetch('/api/update/password', {
            headers: {
                "Content-Type": "application/json",
            },
            method: 'PUT',
            body: JSON.stringify({
                currentPassword: currentPassword,
                newPassword: newPassword,
                confirmNewPasswordPassword: confirmNewPasswordPassword,
                email: email
            })
        })
        const content = await request.json();
        return content
    }
    catch (error) {return error}
}