import React, { useState, useEffect } from 'react';
import useDebounce from './hooks/useDebounce.jsx';
import useTabs from './hooks/useTabs.jsx';
import useFadeIn from './hooks/useFadeIn.jsx';
import Calendar from './component/Calendar.jsx';
import haniImage from './image/하니.jpg'; // 이미지 import

const hobbies = [
    {
        tab: '헬스',
        content: '가슴 운동 좋아합니다.',
    },
    {
        tab: 'Coding',
        content: 'Coding 못 해요..',
    },
    {
        tab: '취미가 없어요..',
        content: (
            <div>
                <img src={haniImage} alt="하니" style={{ width: '300px' }} />
            </div>
        ),
    },
];

function App() {
    const { currentItem, changeItem } = useTabs(0, hobbies);
    const [query, setQuery] = useState('');
    const [notFound, setNotFound] = useState(false);
    const debouncedQuery = useDebounce(query, 500);

    const fadeIn = useFadeIn();

    useEffect(() => {
        if (debouncedQuery) {
            const matchedIndex = hobbies.findIndex((hobby) =>
                hobby.tab.toLowerCase().includes(debouncedQuery.toLowerCase())
            );
            if (matchedIndex !== -1) {
                changeItem(matchedIndex); // 일치하는 취미가 있으면 해당 탭으로 전환
                setNotFound(false);
            } else {
                setNotFound(true);
            }
        } else {
            setNotFound(false);
        }
    }, [debouncedQuery, changeItem]);

    return (
        <div style={{ textAlign: 'center' }}>
            <div className="CalendarWrapper">
                <Calendar />;
            </div>
            <h2>취미 소개 페이지</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a hobby"
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    marginBottom: '20px',
                }}
            />
            {notFound && <p>결과 없음</p>}

            <div>
                {hobbies.map((hobby, index) => (
                    <button
                        key={index}
                        onClick={() => changeItem(index)}
                        style={{
                            padding: '10px 20px',
                            margin: '0 10px',
                            backgroundColor:
                                currentItem.tab === hobby.tab
                                    ? '#f7b500'
                                    : '#f0f0f0',
                            border: 'none',
                            borderRadius: '20px',
                            cursor: 'pointer',
                        }}
                    >
                        {hobby.tab}
                    </button>
                ))}
            </div>

            <div {...fadeIn}>
                <p style={{ marginTop: '20px', fontSize: '18px' }}>
                    {currentItem.content}
                </p>
            </div>
        </div>
    );
}

export default App;
