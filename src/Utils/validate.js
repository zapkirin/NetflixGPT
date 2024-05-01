export const checkValidation=(email,password)=>{
    const validEmail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const validPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if(!validEmail) return "Email not valid"
    if(!validPassword) return "Password should be minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"

    return null
}
