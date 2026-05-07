function Q2() {
  const user = {
    id: 1,
    username: "shourya",
    email: "shouryaawasthifsd@gmail.com"
  }

  return (
    <div>
      <h2>Q2 — User List</h2>
      <div key={user.id}>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <hr />
      </div>
    </div>
  )
}

export default Q2
