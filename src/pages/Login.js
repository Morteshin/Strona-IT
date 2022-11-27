import '../style/Login.css'
export default function Login(){
    return (
    
    <div className="MainLogin">
        <label>Login: </label>
         <input type="text" placeholder="Login" required className="Login"></input>
         <br></br>
        <label>Password: </label>
        <input type="text" placeholder="Enter password" required className="Passwd"></input>
        <br></br>
        <button type="submit" className="submitlogin">Sumbit</button>
        <a href="/"><button className="Register">Register</button></a>
    </div>
    )
}