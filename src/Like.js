import React, { useState, useEffect } from 'react';

const Like = () => {
  // useState를 사용하여 좋아요 수 상태를 관리
  const [likes, setLikes] = useState(0);

  // useEffect를 사용하여 컴포넌트가 마운트될 때 로컬 스토리지에서 값 불러오기
  useEffect(() => {
    const savedLikes = localStorage.getItem('likes');
    if (savedLikes) {
      setLikes(Number(savedLikes));
    }
  }, []);

  // useEffect를 사용하여 좋아요 수가 변경될 때 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('likes', likes);
    console.log(likes, '좋아요')
  }, [likes]);

  // 버튼 클릭 시 좋아요 수 증가
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>좋아요</button>
      <p>좋아요: {likes}</p>
    </div>
  );
}

export default Like;
