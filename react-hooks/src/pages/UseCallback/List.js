import React, { memo } from "react";
import Item from "./Item";

const List = memo(({ users, handleDelete }) => {
  return (
    <ul>
      {users.map((user) => (
        <Item key={user.id} user={user} handleDelete={handleDelete} />
      ))}
    </ul>
  );
});

export default List;
