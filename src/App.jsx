import React, {useState, useEffect} from 'react';
import './App.css';
import { Button, TextField, FormControl, InputLabel, Input } from '@mui/material';
import Message from './Message';
import {db} from './firebaseConfig';
import {collection, addDoc, getDocs, getDoc, doc, query, where, updateDoc, deleteDoc } from 'firebase/firestore';

// TODO: finish the functionality on my own

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useEffect(()=> {
  //   setUsername(prompt('please enter your name'));
  // }, []); //runs once when app component loads

  useEffect(() => {
    // db.collection('messages').onSnapshot(snapshot => {
    //   setMessages(snapshot.docs.map(doc => doc.data))
    // })   //older syntax

    getAllMessages()
  }, []);

  async function getAllMessages() {
      const { docs }  = await getDocs(collection(db, "messages"));
      
      setMessages(docs.map(elem => ({...elem.data()})));
      console.log(messages);
    }

  function createMessage(event) {
      const msg = {
        message: "Finish interview section",
        username: "booface"
      };
      event.preventDefault();
      setMessages([...messages, msg])
      addDoc(collection(db, "messages"), msg);
      setInput('');
    }




  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello clever programers</h1>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input type="text" value={input} onChange={event => setInput(event.target.value)}></Input>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={createMessage }>Send Message</Button>
        </FormControl>

        {
          messages.map((message, index) => (
            <Message key={index} username={username} message={message}/>
          ))
        }
        
      </header>
    </div>
  );
}

export default App;
