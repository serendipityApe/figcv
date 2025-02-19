import { ChangeEvent, useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;

    setCount(parseInt(target?.value));
  }

  function handleCreate() {
    parent.postMessage(
      { pluginMessage: { type: "create-shapes", count } },
      "*"
    );
  }

  function handleCancel() {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  }

  return (
    <>
      <h2>Rectangle Creator</h2>
      <p>
        Count: <input id="count" value={count} onChange={handleOnChange} />
      </p>
      <button id="create" onClick={handleCreate}>
        Create
      </button>
      <button id="cancel" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
}
