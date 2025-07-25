import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Leaderboard() {
  const [top, setTop] = useState([])

  useEffect(() => {
    axios.get('https://neurax-backend.onrender.com/leaderboard')
         .then(res => setTop(res.data.top))
  }, [])

  return (
    <ul>
      {top.map((u, i) => (
        <li key={i}>{u.user} — {u.points} pt</li>
      ))}
    </ul>
  )
}
