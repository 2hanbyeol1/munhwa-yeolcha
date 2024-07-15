# 🥳 문화열차

- [x] 다양한 공연 정보를 확인하고 예약할 수 있는 웹사이트입니다!<br/>
- [x] 내가 예약한 공연들을 조회하고 취소할 수 있어요<br/><br/>

## 팀원

![팀원](./public/members.png)

| 이한별 <img width="40" alt="이한별" src="./public/members/hanbyeol.png"> | 전인화 <img width="40" alt="전인화" src="./public/members/inhwa.png"> | 이승빈 <img width="40" alt="이승빈" src="./public/members/seungbin.png"> | 김성구 <img width="40" alt="김성구" src="./public/members/seonggu.png"> | 안시승 <img width="40" alt="안시승" src="./public/members/siseung.png"> | 김지환 <img width="40" alt="김지환" src="./public/members/jihwan.png"> |
| :----------------------------------------------------------------------: | :-------------------------------------------------------------------: | :----------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------------: | :--------------------------------------------------------------------: |
|                                메인페이지                                |                              상세페이지                               |                               회원정보수정                               |                                예약목록                                 |                      로그인 / 회원가입 / 회원 탈퇴                      |         카카오 로그인 / 로그아웃 / 로그인 세션 / 공통 컴포넌트         |

<!-- <table>
   <tr>
    <td align="center"><b>이한별</b></td>
    <td align="center"><b>전인화</b></td>
    <td align="center"><b>이승빈</b></td>
    <td align="center"><b>김성구</b></td>
    <td align="center"><b>안시승</b></td>
    <td align="center"><b>김지환</b></td>
  </tr>
	<tr>
    <td align="center">메인페이지</td>
    <td align="center">상세페이지</td>
    <td align="center">마이페이지<br/>(회원정보수정)</td>
    <td align="center">마이페이지<br/>(예약목록)</td>
    <td align="center">로그인<br/>회원가입/회원탈퇴</td>
    <td align="center">카카오 로그인/로그아웃<br/>공통 컴포넌트</td>
  </tr>
</talbe> -->

- 각자 맡은 역할을 다 하면, 다른 팀원의 작업을 도와줬어요. <br/><br/>

## 프로젝트 진행 기간

- 2024.07.08 ~ 2024.07.15<br/><br/>

## 개발 환경

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> </br>

- 모듈과 인터페이스를 제공하여, 코드의 재사용성을 높이고 모듈화가 용이해요.
- 컴파일 시점에 타입 체크를 수행하여 안정적으로 코드 작성을 할 수 있어요.
- 코드의 가독성을 높이고, 실수를 줄일 수 있어요. </br></br>

<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"/> </br>

- 더 나은 성능과 SEO가 가능해요.
- 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원하여 사용자 경험을 개선할 수 있어요. </br></br>

<img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white"/> </br>

- 실시간 업데이트를 처리하는 실시간 기능이 제공돼요.
- 백엔드 시스템 관리가 필요없으므로 프론트 개발 생산성을 높일 수 있어요. <br/><br/>

<img src="https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=tailwind&logoColor=white"/> </br>

- 디자인을 쉽고 빠르게 개발할 수 있어요.
- 일관성이 있는 디자인이 가능해요. <br/><br/>

<img src="https://img.shields.io/badge/zustand-F3DF49?style=for-the-badge&logo=zustand&logoColor=white"/> </br>

- 불필요한 렌더링을 최소화할 수 있어요.
- 보일러 플레이트가 적어서 효율적으로 코드를 관리할 수 있어요. <br/><br/>

## 상세설명

### 1. supabase를 이용한 로그인/회원가입 구현

- 이메일과 비밀번호로 쉽게 가입이 가능해요.
- 카카오계정을 이용한 소셜 로그인이 가능해요. <br/><br/>

### 2. 무한스크롤과 API를 이용한 메인페이지 구현

- 첫 렌더링 시에는 전체 공연 중 12개의 공연만 먼저 볼 수 있어요.
- 무한스크롤 기능으로 다른 공연을 더 볼 수 있어요.
- 스크롤 버튼으로 편하게 최상단/하단까지 이동이 가능해요. <br/><br/>

### 3. API를 이용한 상세페이지 구현

- 보고 싶은 공연의 상세 정보를 확인할 수 있어요.
- 이미 예약한 공연과 종료된 공연은 예약할 수 없어요.
- 공연까지 남은 시간이 확인 가능해요. <br/><br/>

### 4. supabase를 이용한 마이페이지 구현

- 내가 예약한 내역을 확인하고 취소할 수 있어요.
- 비밀번호 변경과 회원 탈퇴가 가능해요. <br/><br/>
