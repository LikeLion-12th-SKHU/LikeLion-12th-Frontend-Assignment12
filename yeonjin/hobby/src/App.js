import React, { useState } from 'react';
import useTabs from './hooks/useTabs';
import useFadeIn from './hooks/useFadeIn';
import useDebounce from './hooks/useDebounce';
import './App.css'

const hobbies = [
  {
    name: '웹툰보기',
    description: '저는 동양풍이나 판타지 너무너무 좋아합니당 추천 웹툰으로는 전독시, 낮뜨달 요렇게만 추천드립니당...',
  },
  {
    name: '닌텐도 스위치',
    description: '얼마전에 동숲을 시작했습니다 너무너무 재밌네용',
  },
  {
    name: '산책',
    description: '강아지를 키워서 매일 산책을 나가고 있습니다. 모르는 길을 핸드폰을 보지않고 지나가는것도 충분히 재미있는것 같아요',
  },
  {
    name: '웹소설',
    description: '웹툰 만큼이나 웹소설도 좋아합니다... 약간 있어보기에 소설이라고 할려고 했지만 결이 많이 다른것같아섷ㅎ; 화산귀환 이거 재밌어요 추천합니다',
  },
  {
    name: '다꾸',
    description: '배치하고 꾸미는걸 좋아해요 다꾸도 배치하고 조합하는것에서 재미를 느끼고 프론트엔드도 비슷한 맘으로 시작했어요 이제는 사용자가 보기에 좋은 uiux를 공부하고있습니당',
  },
];


function App() {
  const { currentItem, changeItem } = useTabs(0, hobbies);
  const fadeIn = useFadeIn(1, 2);
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 400);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const foundIndex = hobbies.findIndex((hobby) =>
      hobby.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    if (foundIndex !== -1) {
      changeItem(foundIndex);
    }
  };

  return (
    <div className="App">
      <h1>취미 소개 페이지</h1>
      <input
        type="text"
        placeholder="Search for a hobby"
        value={search}
        onChange={handleSearch}
      />
      <div>
        {hobbies.map((hobby, index) => (
          <button
            key={index}
            onClick={() => changeItem(index)}
            className={currentItem.name === hobby.name ? 'selected' : ''}
          >
            {hobby.name}
          </button>
        ))}
      </div>
      <div {...fadeIn}>
        <p>{currentItem.description}</p>
      </div>
    </div>
  );
}

export default App;
