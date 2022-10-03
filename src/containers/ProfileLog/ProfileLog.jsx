import { useState } from "react";
import "./ProfileLog.scss"

const ProfileLog = (props) => {
const {profile, setProfile} = props;
const [input, setInput] = useState("")

const handleInput = (event) => {
    setInput(event.target.value)
}

const handleSubmit = (event) => {
    event.preventDefault()
    setProfile({username: input})
}

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                value= {input}
                onChange= {handleInput}
                >
                </input>
            </label>
            <label>
                <button>Login</button>
            </label>


        </form>
        
        </div>

    )
}

export default ProfileLog;