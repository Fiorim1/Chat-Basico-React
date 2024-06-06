import "./Home.css"
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate()

  
  function handleClick() {
    navigate('/chat')
  }
  return (
    <div className="central">
      <h1>Chat Com React</h1>
      <button onClick={handleClick}>
        Ir Para o Chat
      </button>

    </div>
  )
}

export default Home
