import Link from 'next/link';

const SignUp = () => {
  return (
    <section>
      <h2 className="sr-only">회원가입</h2>
      <div>
        <span>혹시 강사님이신가요?</span>
        <Link href="">
          <a>강사님 가입</a>
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
