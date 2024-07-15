export function getOneMonthAgoDate() {
  // 오늘 날짜 가져오기
  const today = new Date();

  // 한 달 전으로 날짜 변경
  today.setMonth(today.getMonth() - 1);

  // 년, 월, 일 가져오기
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줌
  const day = String(today.getDate()).padStart(2, "0");

  // yyyyMMdd 형식으로 반환
  return `${year}${month}${day}`;
}
