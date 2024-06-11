import React, { useState, useEffect } from 'react'

const Test = () => {
  const [count, setCount]  = useState(0);
  
  useEffect(() => {
    // 타이머를 설정합니다.
    const timer = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // 클린업 함수: 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => clearInterval(timer);
  }, [])

  return (
    <div>
        <div>test</div>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  )
}

export default Test