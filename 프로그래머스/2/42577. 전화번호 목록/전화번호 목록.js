function solution(phone_book) {
  // 전화번호부를 사전순으로 정렬
  phone_book.sort();

  // 바로 뒤의 번호와 비교하여 접두어인지 확인
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  
  return true;
}