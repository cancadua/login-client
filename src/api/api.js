const login = async (user) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    };

    await fetch('http://localhost:8080/api/login', requestOptions)
        .then((res) => res.json())
        .then((res) => {return res})
}

const register = async (user) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    };

    await fetch('http://localhost:8080/api/register', requestOptions)
        .then(res => {return res})
}

export {login, register}