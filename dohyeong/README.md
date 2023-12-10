## 친구 웹 사이트 만들어 주기 (Develop frontend using react)

### 교재 개발을 하는 친구

- 자기pr(간단 소개, 만든 교재)
- 학생들과 소통할 수 있는 게시판

### 리액트 버전 6 react-router-dom 패키지 바뀐점

- Switch -> Routes 네이밍 변경
- exact 옵션 삭제
- 컴포넌트 렌더링 component, render 속성 네이밍 -> Component, element로 변경
- URL Params 읽는 법(match객체) -> useParams() 사용
- Query 읽는 법(location객체) -> useLocation() 사용
- useHistory(), 리다이렉트 -> useNavigate() 사용
- Link to 속성 -> to, state로 나눠서 사용
