import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    // mount 시점에 실행되게 됨
    console.log("Mount!");

    return () => {
      // unmount 시점에 실행되게 됨
      console.log("unmount!");
    };
  }, []);

  return <div>unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isvisible, setIsvisible] = useState(false);
  const toggle = () => setIsvisible(!isvisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isvisible && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
