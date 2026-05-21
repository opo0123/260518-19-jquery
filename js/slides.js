$(function () {
  // 1. 좌우 슬라이드
  const slideList = $(".slide-list");
  // 슬라이드 하나의 가로 길이
  const slideWidth = $(".slide-list li").width();

  // 슬라이드 움직이기 (함수)
  const moveSlide = () => {
    // 애니메이션 효과
    slideList.animate(
      {
        marginLeft: -slideWidth, // 왼쪽으로 이동
      },
      1000, // 1초 동안

      // 행동이 끝나면,
      function () {
        // 첫번째 li(슬라이드)를 맨 뒤로 보내기
        $(this).append($(this).find("li:first"));
        // marginLeft 값 초기화 (첫번째 슬라이드를 뒤로 보내서 원래 위치로 맞춰야 함)
        $(this).css({ marginLeft: 0 });
      },
    );
  };
  // 일정 시간마다 반복 실행
  setInterval(moveSlide, 3000);

  // 2. 위로 슬라이드
  const slideListUp = $(".slide-list-up");
  // 슬라이드 하나의 세로 길이
  const slideHeight = $(".slide-list-up li").height();

  // 슬라이드 움직이기 (함수)
  const moveUp = () => {
    // 애니메이션 효과
    slideListUp.animate({ top: -slideHeight }, 1500, function () {
      $(this).append($(this).find("li:first"));
      $(this).css({ top: 0 });
    });
  };
  setInterval(moveUp, 3000);

  // 3. 페이드 인.아웃
  const slideFade = $(".slide-fade li");
  let current = 0; // 현재 보이는 슬라이드 번호
  const moveFade = () => {
    let next = (current + 1) % slideFade.length; // 슬라이드 끝나면 다시 처음으로
    slideFade.eq(current).fadeOut(1000);
    // 1번 슬라이드 나타남
    slideFade.eq(next).fadeIn(1000);

    current = next;
  };
  setInterval(moveFade, 2000);
});
