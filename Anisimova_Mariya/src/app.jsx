import React, {useState} from 'react'

const App = () => {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])

    const textChange = (event) => {
        setText(event.target.value)
    }

    const addMessage = () => {
        setMessages([...messages, text])
        setText('')
    }
    
    return <div>
                <input type='text' value={text} onChange={textChange} />
                <button onClick={addMessage}>Add</button>
                {messages.map((message, index) => 
                    <div key={index}>{message}</div>
                )}
        </div>
}

export default App