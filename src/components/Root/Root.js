import React, { useState } from "react";

import useGenerateId from "#root/helpers/hooks/useGenerateId";

const Root = () => {
  const [name, setName] = useState("");

  const generateId = useGenerateId();

  return (
    <form>
      <label htmlFor={generateId("name")}>Name</label>
      <input
        id={generateId("name")}
        onChange={(evt) => {
          setName(evt.target.value);
        }}
        type="text"
        value={name}
      />
      <label htmlFor={generateId("email")}>Email Address</label>
      <input id={generateId("email")} type="text" />
    </form>
  );
};

export default Root;
