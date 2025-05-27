import { useState } from "react";

export function LazyLoaderOnClick() {
  const [Component, setComponent] = useState(null);

  const handleLoad = async () => {
    console.log("Loading component...");

    const mod = await import("./HeavyPage");
    setComponent(() => mod.default);
  };

  return (
    <div>
      <button onClick={handleLoad}>Load Component</button>
      {Component && <Component />}
    </div>
  );
}
