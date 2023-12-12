const DiaryItem = ({ id, author, content, created_date, emotion }) => {
  const creationDate = new Date(created_date).toLocaleDateString();
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{creationDate}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;