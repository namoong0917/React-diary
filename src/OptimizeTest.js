import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count: ${count}`);
  });
  return <div>{count}</div>;
});
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (preProps, nextProps) => {
  return preProps.obj.count === nextProps.obj.count;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setobj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <div>
          <h2>Counter A</h2>
          <CounterA count={count} />
          <button onClick={() => setCount(count)}>A button</button>
        </div>
        <div>
          <h2>Counter B</h2>
          <MemoizedCounterB obj={obj} />
          <button
            onClick={() =>
              setobj({
                count: obj.count,
              })
            }
          >
            B Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptimizeTest;
