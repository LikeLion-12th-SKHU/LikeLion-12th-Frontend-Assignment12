import { useState } from "react";
// useState 훅을 React로부터 불러와서 상태를 관리할 준비를 한다.

export const useTabs = (initialTab, allTabs) => {
  // useTabs 훅을 정의, initialTab(초기 탭 인덱스)과 allTabs(탭 배열)를 매개변수로 받습니다.

  const [currentIndex, setCurrentIndex] = useState(initialTab);
  // 현재 선택된 탭의 인덱스(currentIndex)를 상태로 정의, 기본값은 initialTab, setCurrentIndex는 이를 변경하는 함수.

  if (!allTabs || !Array.isArray(allTabs)) {
    // allTabs가 존재하지 않거나 배열이 아닐 경우, 함수 실행을 중단함.
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    // 현재 선택된 탭의 내용을 allTabs 배열에서 가져옴.

    changeItem: setCurrentIndex,
    // 탭을 변경하는 함수를 반환해, 외부에서 현재 탭을 바꿀 수 있게 함.
  };
};
