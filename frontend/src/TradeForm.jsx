import axios from 'axios'
import { useState } from 'react'

export default function TradeForm() {
  const [data, setData] = useState({ ... })

  const trade = async () => {
    const res = await axios.post('https://neurax-backend.onrender.com/trade', data)
    alert(res.data.status + ': ' + (res.data.tx_hash || res.data.reason))
  }

  return (
    <div>
      <button onClick={trade}>Esegui Trade</button>
    </div>
  )
}
