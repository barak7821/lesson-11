async function addUserNameHTML() {
    const dataElement = document.getElementById("hello")

    try {
        const response = await axios.get("http://localhost:3000/users")

        console.log(response.data)

        const user = response.data.find(user => user.username)

        dataElement.innerText = `Hello ${user.username}`

    } catch (error) {
        console.error(error)
    }
}

addUserNameHTML()
