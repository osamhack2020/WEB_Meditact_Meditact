## Meditact

국군 의료 상담 AI챗봇 및 플랫폼

---

**_Meditact_**는 Medicine와 Untact를 합친 합성어로, 국군 의료 서비스의 편리함을 향상시키기 위해 탄생한 프로젝트입니다. 사용자들은 기존의 안내가 부족하던 병원 홈페이지에서 벗어나, 본인에게 필요한 서비스를 주도적으로 찾아 이용할 수 있습니다.

저희 Meditact는 기본적인 병원 홈페이지의 기능과 더불어, **딥러닝**을 기반으로 환자가 가지고 있는 증상을 분석하여 어느 진료과로 가야 적절한 치료를 받을 수 있는지 판단해주는 플랫폼을 개발했습니다. 또한 트리형 구조를 가진 챗봇은 **직관적인 UI**로 사용자가 원하는 정보를 빠르게 얻을 수 있도록 도와줍니다.

Meditact가 제공하는 **사용자 친화**적인 플랫폼은 전체적인 의료 서비스의 만족도 향상에 크게 기여할 것입니다.

## 기능 설계

1. [USER API](./server/APIdocs/UserAPI.md) ( 유저 정보 관련 API )
2. [POST API](./server/APIdocs/PostAPI.md) ( 상담 글쓰기 관련 API )
3. [APPT API](./server/APIdocs/ApptAPI.md) ( 예약관련 API )

## 컴퓨터 구성 / 필수 조건 안내 (Prerequisites)

- ECMAScript 6 지원 브라우저 사용

- 권장: Google Chrome 버젼 77 이상

## 기술 스택 (Technique Used)

### Web Back-end

<table>
<tbody>
    <tr>
        <td width="60">
            <div align="center"><a href="https://nodejs.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a><br>Node.js</div>
        </td>
              <td width="60">
            <div align="center"><a href="https://expressjs.com" target="_blank"> <img src="https://expressjs.com/images/express-facebook-share.png" alt="MONGODB" width="40" height="40"/> </a><br>express.js</div>
        </td>
          <td>
            <div align="center"><a href="https://babeljs.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> 
            </a><br>Babel</div>
        </td>
        <td width="60">
            <div align="center"><a href="https://www.mongodb.com/" target="_blank"> <img src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?w=780&h=408&crop=1" alt="MONGODB" width="40" height="40"/> </a><br>mongoDB</div>
        </td>
       <td width="60">
            <div align="center"><a href="https://mongoosejs.com/" target="_blank"> <img src="https://cms-assets.tutsplus.com/uploads/users/34/posts/29527/preview_image/mongoose.jpg" alt="MONGODB" width="40" height="40"/> </a><br>mongoose</div>
        </td>
    </tr>
  </tbody>
</table>

​

## 설치 안내 (Installation Process)

**환경 변수 설정**

.env 파일을 만들어서 다음과 같은 세 환경 변수를 지정.

```
PORT =
SECRET_KEY =
DB_URL =
```

**서버 의존성 설치**

```
$ yarn install ( or npm install )
```

## 프로젝트 사용법 (Getting Started)

**서버 실행**

서버를 실행하기 전 mongod이 실행되고 있는지와 설정해놓은 환경변수의 문제가 없는 지 확인한다.

```
$ yarn start ( or npm start )
```

기능설계 파트의 APIdocs를 참고하여 사용하실 수 있습니다.

## 팀 정보 (Team Information)

- [김성일 상병](https://github.com/kshired) E-mail : [shiroed1211@gmail.com](mailto:shiroed1211@gmail.com)

- [강재현 상병](https://github.com/ashhyun) E-mail : [youkind98@gmail.com](mailto:youkind98@gmail.com)

- [이현훈 대위(군의관)](https://github.com/hyeonhoonlee) E-mail : [jackli0373@gmail.com](mailto:jackli0373@gmail.com)

- [김찬호 일병](https://github.com/chanhhoo) E-mail : [hpyho33@naver.com](mailto:hpyho33@naver.com)

- [여종현 상병](https://github.com/mindgitrwx) E-mail : [jonghyeon.rw@gmail.com](mailto:jonghyeon.rw@gmail.com)

## 저작권 및 사용권 정보 (Copyleft / End User License)

- [MIT](
