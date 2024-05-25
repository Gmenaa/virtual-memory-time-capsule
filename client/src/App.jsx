import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  useEffect (() => {
    fetch('http://localhost:8081/users')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Email</th>
          <th>Password</th>
          <th>Username</th>
          <th>Created at</th>
          <th>Updated at</th>
          <th>PFP</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.user_id}</td>
              <td>{d.email}</td>
              <td>{d.password}</td>
              <td>{d.username}</td>
              <td>{d.created_at}</td>
              <td>{d.updated_at}</td>
              <td>{d.profile_pic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App