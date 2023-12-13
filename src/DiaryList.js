import DiaryItem from "./Diaryitem";

const DiaryList = ({ onDelte, diaryList }) => {
  // console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <ul>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelte={onDelte} />
        ))}
      </ul>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
