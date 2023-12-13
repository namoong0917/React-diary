const DiaryItem = ({ onDelte, id, author, content, created_date, emotion }) => {
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
      <div className="content">{content}</div>
      <button
        onClick={() => {
          if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onDelte(id);
          }
        }}
      >
        삭제하기
      </button>
    </li>
  );
};

export default DiaryItem;
