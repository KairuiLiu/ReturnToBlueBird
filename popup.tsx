import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        width: "100px",
      }}>
      <h2>
        The blue bird is backed.
      </h2>
    </div>
  )
}

export default IndexPopup
