async function charLimitName() {
    const name = document.getElementById("name")

    if (name.value.length > 2) {
        try {
            window.location.href = "/signup"
            const response = await axios.post("http://localhost:3000/users", { name: name.value })
            console.log(response.data)

        } catch (error) {
            console.log(error)
        }
    } else {
        alert("Name must be at least 2 characters long!")
        name.classList.add("errorinput")
    }
}
