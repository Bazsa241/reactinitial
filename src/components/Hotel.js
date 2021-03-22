import {useState} from "react"
import Subscription from "./Subscription"
import LoadingMask from "./LoadingMask"

const Hotel = ({hotel}) => {

  const [more, setMore] = useState(false)
  const [showSub, setShowSub] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("Subscribed")
  const [isSent, setIsSent] = useState(false)

  return (
    <div className="Hotel">
      <h3>{hotel.name}</h3>
      <button onClick={() => setMore(!more)}>
        {more ? "Show less" : "Show more"}
      </button>   
      {
        more &&
        <>
          { loading
            ? <LoadingMask />
            : isSent
              ? message
              :
                <>
                    <p>
                      {hotel.city} ({hotel.stars})
                    </p>
                    <button onClick={() => setShowSub(!showSub)}>
                      Request more info about {hotel.name}
                    </button>
                    {
                      showSub && <Subscription
                            hotel={hotel.name}
                            setLoading={setLoading}
                            setMessage={setMessage}
                            setIsSent={setIsSent}/>
                    }
                </>
          }

        </>
      }       
    </div>
  )
}

export default Hotel