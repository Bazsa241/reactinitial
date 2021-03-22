import {useState} from "react"
import LoadingMask from "./LoadingMask"

const Subscription = ({hotel, setLoading, setMessage, setIsSent}) => {

  const [input, setInput] = useState("")
  // const [loading, setLoading] = useState(false)
  const [isSucess, setIsSucess] = useState(false)
  // const [isSent, setIsSent] = useState(false)

  const emailValidation = () => {
    return input.includes("@") && input.includes(".")
  }

  const alreadySub = () => {
    return input === "a@b.c"
        && hotel === "Hotel Curabitur suscipit suscipit"
        ? "Already subscribed"
        : "Subscribed"
  }

  const sendData = () => {
    setLoading(true)
    setMessage(alreadySub()) 

    const data = {
      "email": input,
      "hotel": hotel
    }

    fetch("api/hotels/subscribe", {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => {
      setIsSucess(res.ok)
      setLoading(false)
      setIsSent(true)
    })
  }
  

  return (
    <div>
      <>
        <input type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        />
        <button disabled={!emailValidation()}
          onClick={sendData}
        >
          Submit
        </button>
      </>
    </div>
  )
}

export default Subscription