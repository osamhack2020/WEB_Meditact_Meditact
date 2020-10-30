## 기술 스택

### Web Front-end
<table>
<tbody>
    <tr>
        <td width="60">
            <div align="center"><a href="https://nodejs.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a><br>Node.js</div>
        </td>
          <td>
            <div align="center"><a href="https://babeljs.io/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> 
            </a><br>Babel</div>
        </td>
        <td>
            <div align="center"><a href="https://webpack.js.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/webpack/webpack-original.svg" alt="webpack" width="40" height="40"/> </a><br>Webpack</div>
        </td>
        <td width="60">
            <div align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><br>Javascript</div>
        </td>
        <td width="60">
            <div align="center"><a href="https://redux.js.org/" target="_blank"> <img src="https://e7.pngegg.com/pngimages/413/852/png-clipart-redux-react-logo-javascript-dq-purple-violet-thumbnail.png" alt="redux" width="40" height="40"/> </a><br>redux</div>
        </td>
        <td width="60">
            <div align="center"><a href="https://github.com/zalmoxisus/redux-devtools-extension" target="_blank"> <img src="https://lh3.googleusercontent.com/vCbHTO3hh4rIPl5XPab0ZXYEY1kmwzHvbvd3CPcXxunuCSn8ouz54Kc6xuxR88RP83bErQOt4Q=w128-h128-e365" alt="redux" width="40" height="40"/> </a><br>redux-devtool</div>
        </td>
    </tr>
</tbody>
</table>

## 컴퓨터 구성 / 필수 조건 안내 
- 브라우저 지원 버젼
!["browser img"](/src/images/forReadme/browser.png)

## 디자인 구성

### 디자인에 사용한 페키지와 이유

|semantic ui|styled-component|
|---|:---:|
| !["semantic img"](https://miro.medium.com/max/450/1*2RMwBa_m2kSculsGYB48uQ.png) |!["styled img"](https://blog.kakaocdn.net/dn/AMVCv/btqGbqFAeG4/VL93Ekz0y1iyALV25fAcS1/img.png)|
| 많은 템플릿과 객체(ex : button, table 등)을 제공해주고, 이들을 커스터마이징하기 쉽게 구현되어 있습니다. 또한 모든 객체들은 반응형으로 구성되어 반응형웹을 제작하기에도 편리하기 때문에 선택하였습니다. | 인라인 스타일을 적용하면 코드의 가독성이 떨어지고 스타일을 변경하는데도 어려움이 있습니다. styled-component는 스타일 객체를 한 데 모아 관리하기 때문에 앞에 설명한 문제점들을 해결해 줄 수 있다고 생각하여 선택하였습니다. |

### 디자인 구성 방향

- 디자인을 구성할 때는 **semantic ui**에서 제공하는 템플릿을 활용하였습니다. 시간 단축에도 큰 도움이 되고, semantic ui에서 제공하는 객체들을 사용하면 반응형 웹을 제작하기에도
유리하기 때문입니다. 

- **semantic ui**에서 제공하는 템플릿을 기초로 하였기 때문에 목업이나 프로토타입을 만들 필요가 없었습니다. 

- Grid 레이아웃을 적용하여 페이지 레이아웃을 구성하기로 하였습니다. [Grid](https://semantic-ui.com/examples/grid.html "what is grid?")

- "예약하기 페이지" 
    1. 핵심 기능 중 하나이기 때문에 해당 페이지로 접근할 수 있는 방법을 "헤더에 위치한 카테고리", "메인 배너 위 버튼" 이 두 가지로 제시 하였습니다. 
    2. 군의관들의 정보를 카드형태로 출력하였습니다. 해당 카드를 클릭하면 선택된 군의관의 자세한 정보가 기존 페이지에서 출력될 수 있도록 구성하였습니다. 
    불필요한 리디렉션을 방지하고 디자인적으로도 깔끔해 보인다고 생각합니다.
    3. 유저(환자)들이 원하는 군의관을 빠르게 찾을 수 있게 하기위해 필터를 적용하였습니다. 자신이 희망하는 진료과를 선택하면 해당 진료과에 속해있는 군의관만
       출력됩니다. (검색을 적용하지 않은 이유는 유저(환자)들이 군의관의 이름을 외우는 경우는 드물다고 생각하였고, 때문에 있으나 마나한 기능이 될 수 있다고 생각했기 때문입니다.)

- "챗봇 페이지"
    1. 챗봇 페이지의 프론트는 오픈소스(링크)를 활용하였습니다. 코드가 직관적이고 커스터마이징이 편하다는 장점이 있었습니다. 
    2. (종현님 코멘트)
- "공지사항 페이지"
    1. 메인 페이지에서 출력하도록 구성하였습니다. 굳이 다른 경로를 이용하여 공지사항을 출력해주는 것 보다 시간적으로 더 효율적이라고 생각했기 때문입니다.

- "병원정보 페이지"
    1. "병원정보"는 국군수도병원의 정보를 바탕으로 하였습니다. 저희 페이지에서 출력 가능한 부분은 직접 구현하였고, 그렇지 못한 페이지는 국군수도병원 페이지로 리디렉션이 되도록 구현하였습니다.
    2. 네비게이션을 구현하여 원하는 정보(병원 가는 길, 시설안내 등)를 클릭하면 그에 맞는 정보가 페이지에서 출력됩니다.
- "마이 페이지"
    1. 자신이 속한 부대와 본인의 기본 개인정보가 포함되어 있습니다. 
    2. *상담하기* 기능이 포함되어 있습니다.
        - 자신이 상담하기 희망하는 군의관을 선택할 수 있습니다.
        - 제목과 본문을 나누어 제목을 통해 어드민(or 군의관)이 본문을 유추할 수 있게끔 구성하였습니다.

## 각 페이지별 구성 기능

 * 메인 페이지<br>
<table>
    <tbody>
        <tr>
            <td rowspan="6"><div align="center"><img src="/src/images/forReadme/main.png" width="40%" height="40%"></a></div></td>
            <td width="33%"> 헤더 출력기능 </td>
        </tr>
        <tr>
            <td> 공지사항 출력</td>
        </tr>
    </tbody>
</table>

 * 예약 페이지(User)<br>
<table>
    <tbody>
        <tr>
            <td rowspan="6"><div align="center"><img src="/src/images/forReadme/reservation(user).png" width="40%" height="40%"></a></div></td>
            <td width="33%"> 군의관 리스트 출력 </td>
        </tr>
        <tr>
            <td>군의관 필터기능</td>
        </tr>
        <tr>
            <td>군의관 선택기능</td>
        </tr>
    </tbody>
</table>

 * 예약 페이지 (User)*예약하기 클릭 시*<br>
<table>
    <tbody>
        <tr>
            <td rowspan="6"><div align="center"><img src="/src/images/forReadme/reservation2.png" width="40%" height="40%"></a></div></td>
            <td width="33%"> 군의관 정보 출력</td>
        </tr>
        <tr>
            <td>예약가능시간 출력</td>
        </tr>
        <tr>
            <td>군의관 선택기능</td>
        </tr>
    </tbody>
</table>
 * 예약 페이지(Admin)<br>
<table>
    <tbody>
        <tr>
            <td rowspan="6"><div align="center"><img src="/src/images/forReadme/reservation(admin).png" width="40%" height="40%"></a></div></td>
            <td width="33%"> 예약현황 출력 </td>
        </tr>
        <tr>
            <td>예약 승인 / 거부 기능</td>
        </tr>>
    </tbody>
</table>
 * 예약 페이지(Medic)<br>
<table>
    <tbody>
        <tr>
            <td rowspan="6"><div align="center"><img src="/src/images/forReadme/reservation(medic).png" width="40%" height="40%"></a></div></td>
            <td width="33%"> 승인된 예약 현황 </td>
        </tr>
        <tr>
            <td>등록된 상담 확인 기능</td>
        </tr>
    </tbody>
</table>
  * 마이 페이지<br>
<table>
    <tbody>
        <tr>
            <td rowspan="6"><div align="center"><img src="/src/images/forReadme/my_consult.png" width="40%" height="40%"></a></div></td>
            <td width="33%">사용자의 소속 부대 정보 출력</td>
        </tr>
        <tr>
            <td>사용자의 기본 정보 출력</td>
        </tr>
        <tr>
            <td>상담 게시판 사용 기능</td>
        </tr>
    </tbody>
</table>
  * 정보 페이지<br>
<table>
    <tbody>
        <tr>
            <td rowspan="6"><div align="center"><img src="/src/images/forReadme/information.png" width="40%" height="40%"></a></div></td>
            <td width="33%">기제된 정보가 출력된 국군수도병원 페이지로 리디렉션</td>
        </tr>
    </tbody>
</table>
