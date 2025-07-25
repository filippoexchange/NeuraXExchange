import { useState } from 'react'
import axios from 'axios'

export default function WhitehatSubmit() {
  const [form, setForm] = useState({ user: '', title: '', details: '' })

  const submit = async () => {
    const res = await axios.post('https://neurax-backend.onrender.com/submit-report', form)
    alert(res.data.status)
  }

  return (
    <div>
      <input onChange={e => setForm({...form, user: e.target.value})} placeholder="Username" />
      <input onChange={e => setForm({...form, title: e.target.value})} placeholder="Titolo Report" />
      <textarea onChange={e => setForm({...form, details: e.target.value})} />
      <button onClick={submit}>Invia Report</button>
    </div>
  )
}
