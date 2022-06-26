const WithDraw = () => {
  return (
    <>
      <h2 className="srOnly">회원 탈퇴</h2>
      <section>
        <div>탈퇴 계정</div>
        <span>아래 계정을 탈퇴 처리합니다.</span>
        <span>밍망디</span>
      </section>
      <ul>
        <h3>탈퇴 시 유의 사항</h3>
        <li>탈퇴 후에는 위의 계정으로 로그인하실 수 없습니다.</li>
        <li>탈퇴 시, 보유하고 계신 쿠폰과 포인트는 소멸되며 재발행이 불가능합니다.</li>
        <li>작성하긴 이용 후기는 탈퇴 후에는 삭제되지 않습니다.</li>
      </ul>
      <div>
        <h3>삭제되는 이용 기록</h3>
        <ul>
          <li>이메일,</li>
          <li>닉네임,</li>
          <li>휴대폰 번호,</li>
          <li>liked 리스트</li>
        </ul>
        <ul>
          <h3>탈퇴 사유</h3>
        </ul>
      </div>
      <div>위 내용을 모두 확인했으며, 회원 탈퇴합니다.</div>
    </>
  );
};

export default WithDraw;
