import { useState } from "react";

const MemoApp = () => {
  const [memoList, setMemoList] = useState([]); // 기존 메모 리스트
  const [newMemo, setNewMemo] = useState(""); // 새로운 메모

  const addMemo = () => {
    setMemoList([...memoList, newMemo]);
    setNewMemo(""); // 입력 후 메모장 클리어
  };

  const deleteMemo = (index) => {
    const updateMemoList = [...memoList];
    updateMemoList.splice(index, 1);
    setMemoList(updateMemoList);
  };
  return (
    <div>
      <h1>간단한 메모장</h1>
      <div>
        <input id="memoInput" type="text" value={newMemo} onChange={(e) => setNewMemo(e.target.value)} placeholder="메모를 입력하세요" />
        <button onClick={addMemo}>추가</button>
      </div>

      <ul>
        {memoList.map((memo, index) => (
          <li key={index}>
            {memo}
            <button onClick={() => deleteMemo(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemoApp;
