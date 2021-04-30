import React, { memo } from "react";

const Item = memo(({ user, handleDelete }) => {
  return (
    <li>
      {user.name}
      <button onClick={() => handleDelete(user.id)}>Delete</button>
    </li>
  );
});

export default Item;
