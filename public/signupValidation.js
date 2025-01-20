function checkUserName() {
    const userName = document.getElementById("username")

    if (userName.value.length >= 4 && userName.value.length <= 8) {
        return userName.value
    } else {
        alert("Username must be between 4-8 characters.")
        return false
    }
}

function checkEmail() {
    const mail = document.getElementById("email")

    if (mail.value.includes("@")) {
        return mail.value
    } else {
        alert("Email must contain @.")
        return false
    }
}

let userPassword = ""

function checkPass() {
    const pass = document.getElementById("password")

    if (pass.value.length >= 5 && pass.value.length <= 10 && pass.value.includes("$")) {
        userPassword = pass.value
        return pass.value
    } else {
        alert("Password must be between 5-10 characters and include the $ character.")
        return false
    }
}

function checkConfirmPass() {
    const confirmPass = document.getElementById("confirmPassword")

    if (userPassword === "") {
        alert("Please set your password first.");
        return false
    }
    if (confirmPass.value === userPassword) {
        return confirmPass.value
    } else {
        alert("Confirm password must match the password.")
        return false
    }
}


function clickEvent() {
    const btn = document.getElementById("btn")
    btn.addEventListener("click", async (event) => {
        event.preventDefault()

        const userName = checkUserName()
        const email = checkEmail()
        const password = checkPass()
        const confirmPassword = checkConfirmPass()

        if (userName && email && password && confirmPassword) {
            
            try {
                window.location.href = "/home"
                
                const response = await axios.post("http://localhost:3000/users", {
                    username: userName,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword
                })
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("One or more fields failed validation.")
        }
    })
}

clickEvent()