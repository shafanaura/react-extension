import React, { FormEventHandler, useEffect } from "react";

const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  const email = e.target[0].value;
  chrome.storage.sync.set({ email }, () => console.log({ email }));
};

const Home = () => {
  useEffect(() => {
    chrome.storage.sync.get(["email"], (res) => console.log({ res }));
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Home;
