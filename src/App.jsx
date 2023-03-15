import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Configuration, OpenAIApi } from 'openai';

function App() {
  const [prompt, setPrompt] = useState("")
  const [result, setResult] = useState("")
  const configuration = new Configuration({
  apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage ({

      prompt: prompt,
      n: 1,
      size: "1024x1024" ,
    });

    setResult(res.data.data[0].url);
  }

  return (
    <div className="main-app">
      <h2>Generate an Image using OpenAI DALL-E API</h2>
      <input className="app-input" type="text" placeholder='Type something to generate an image...'
        onChange={(e) => setPrompt(e.target.value)}/>
      <button onClick={generateImage}>Generate an Image</button>

      {result.length > 0 ?<img className="generated-image" src={result} alt="Generated Image" />: <></>}

    </div>
  );
}

export default App
