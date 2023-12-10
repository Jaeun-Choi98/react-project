import './Home.css';

export default function Home() {
  return (
    <div className='home-content'>
      <div className='profile-info'>
        <img src='img/blackguitar.jpeg' alt='프로필 사진' />
        <h2>이름</h2>
        <p>
          경력 사항
          <br />
          개똥벌레
        </p>
      </div>
      <div className='bio'>
        <h2>자기소개</h2>
        <p>자기소개 내용</p>
      </div>
    </div>
  );
}
