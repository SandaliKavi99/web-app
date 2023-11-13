export const loginUser = async (email: string, password: string) => {
    try {
        const response = await fetch('http://restapi.adequateshop.com/api/authaccount/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            return {
                code: -1,
                message: "Login failed"
            }
        }

    } catch (err) {
        console.log(err);
    }
}