import React, {useState} from 'react'
import axios from 'axios';

const LogInForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const authObject = {'Project-ID':"a24472cb-f2d5-4fcb-a92e-2c4571241f5d", 'User-Name': username, 'User-Secret': password }
        try {
          await  axios.get('https://api.chatengine.io/chats', {headers: authObject} );
                localStorage.setItem('username', username)
                localStorage.setItem('password', password)

                window.location.reload();
        } catch (error) {
            setError('Oops, Incorrect Credentials.')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        className='input'
                        placeholder='Username'
                        required 
                    />
                     <input type="text"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='input'
                        placeholder='Password'
                        required 
                    />
                    <div align='center'>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LogInForm
