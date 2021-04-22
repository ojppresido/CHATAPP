import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './componets/ChatFeed';
import LogInForm from './componets/LogInForm';


function App() {
   if(!localStorage.getItem('username')) return <LogInForm />
  return (
    <ChatEngine  
      height="100vh"
      projectID="a24472cb-f2d5-4fcb-a92e-2c4571241f5d"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

    
    />
  );
}

export default App;
