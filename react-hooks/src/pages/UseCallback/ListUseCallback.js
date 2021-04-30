import React, {useCallback, useEffect, useMemo, useState} from "react";
import List from "./List";

const initialUsers = [
  {id: 12, name: "Alejandro Gabriel"},
  {id: 13, name: "Ilse Flores"}
]

function ListsUseCallback() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");


  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      return user.name.toLocaleLowerCase().includes(search.toLowerCase())
    })
  }, [search, users]);


  const handleDelete = useCallback((userID) => {
    setUsers(users.filter(user => user.id !== userID))
  }, [users])


  const handleAdd = () => {
    const newUser = {id: Date.now(), name: text}
    setUsers([...users, newUser])
  }
  const handleSearch = () => {
    console.log("search")
    setSearch(text)
  }


  useEffect(() => {
    console.log("Rendered")
  })

  const changeUsesMessage = () => {
    // contains one or more state
    console.log("Los usuarios cambiaron", users)
  }

  useEffect(() => {
    changeUsesMessage()
  }, [users])

  return (
    <>
      <input onChange={(e) => setText(e.target.value)} type="text" value={text}/>
      <button onClick={handleSearch}>Search</button>
      <List users={filteredUsers} handleDelete={handleDelete}/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default ListsUseCallback;