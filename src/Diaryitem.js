import React, { useEffect, useRef, useState } from "react";

const DiaryItem = ({
  onEdit,
  onRemove,
  id,
  author,
  content,
  created_date,
  emotion,
}) => {
  useEffect(() => {
    console.log(`${id}번 째 아이템 렌더!`);
  });

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  // 인풋을 핸들링할 스테이트
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  // 가독성을 위해 return 부분이 아닌 밖으로 빼줌
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  // 수정 완료 버튼을 눌렀을 때 이벤트를 처리할 함수
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };

  const creationDate = new Date(created_date).toLocaleDateString();
  return (
    <li className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{creationDate}</span>
      </div>
      {/* 삼항 연산자: isEdit 이 true 라면 수정 중인 상태의 값 textarea, false 라면 수정 중이지 않을 상태의 값 {content} */}
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {/* 수정중인 상태라면 */}
      {isEdit ? (
        <>
          <button onClick={handleEdit}>수정 완료</button>
          <button onClick={handleQuitEdit}>수정 취소</button>
        </>
      ) : (
        /* 수정중인 상태가 아니라면 */
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </li>
  );
};

export default React.memo(DiaryItem);
