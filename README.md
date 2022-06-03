# The-SOPT 합동 세미나 6조 Client-Web

## 🧚구현 결과물
https://user-images.githubusercontent.com/67372977/171820668-130c8d17-4877-4b54-9381-4a39de6c4e27.mov

## :gear: 프로젝트 구성

1. React
2. ESLint
3. Prettier
4. axios
5. styled-components
6. styled-reset
8. +etc

## 📂 디렉토리 구조

```
// src directory structure
├── App.jsx
├── assets
│   ├── icon_alarm.svg
│   ├── etc...
├── components
│   ├── Responsive.jsx
│   ├── common
│   │   └── MenuList.jsx
│   ├── profile
│   │   ├── AlarmBar.jsx
│   │   └── ProfileContainer.jsx
│   └── surfitProfile
│       ├── ArticleBox.jsx
│       ├── DirectoryInfo.jsx
│       ├── DropDown.jsx
│       ├── Navbar.jsx
│       └── RegistBox.jsx
├── constants
│   └── deviceInfo.js
cores
│   ├── api.js
│   ├── hooks
│   │   └── useAPI.js
│   ├── router.jsx
│   └── useInput.js
├── index.jsx
├── pages
│   ├── Profile.jsx
│   └── SurfitProfile.jsx
└── styles
    ├── globalStyle.js
    ├── mediaQuery.js
    └── theme.js
```

## 🤙 컨벤션

### 커밋 컨벤션
|   Commit type              | Emoji                                         | Situation |
|:---------------------------|:----------------------------------------------|:----|
| Initial commit             | :tada: `:tada:`                               | 따단~~~~~ |
| feat                | :sparkles: `:sparkles:`                       | 새로운 기능, UI 등 | 
| bug                     | :bug: `:bug:`                                 |  버그 수정/리포트  |
| Documentation              | :memo: `:memo:`                             | 문서화 |
| refactor             | :hammer: `:hammer:`                           | 구조 변경, 리팩토링 |
| css              | 🎨 : `:art:`                           | css 관련 |
| remove or edit        | :fire: `:fire:`                               |  파일 삭제 및 수정 |
| fix lint                       | :shirt: `:shirt:`                             | eslint 에러 수정 | 
| chore           | :gear:  `:gear:`              | 기능상 변경 없는 수정 | 
| init           | :construction:  `:construction:`              | 브랜치 첫 커밋 | 

### 코드 컨벤션
- eslint, prettier사용
- react-router-dom v.6
- 변수, 폴더명, 컴포넌트가 아닌 js 파일은 camelCase로 선언
- 컴포넌트 파일은 UpperCamelCase.jsx로 선언
- 컴포넌트 크기는 rem, 10px -> 1rem
- 양 옆 margin auto 사용하기 (모바일 뷰 이므로)
- 아이콘 확장자 svg

## 🌳 브랜치 전략

- 기능 추가 : feat/(기능이름)
- 버그 수정 : fix/(버그 명세)

## 🤝 역할 분배

<table>
    <tr align="center">
        <td>
           ☀️ 전희선 ☀️
        </td>
        <td>
           알림바 컴포넌트<br>
           기본 정보 컴포넌트<br>
           전체 컴포넌트 결합
        </td>
    </tr>
    <tr align="center">
        <td>
            👶 김남준 👶
        </td>
        <td>
           네브바 컴포넌트<br>
           디렉토리 정보 컴포넌트<br>
           서버 연결<br>
        </td>
    </tr>
    <tr align="center">
        <td>
            💜 최세영 💜
        </td>
        <td>
           프로필 컴포넌트<br>
           드롭다운메뉴 컴포넌트<br>
           서버 연결<br>
        </td>
    </tr>
</table>


## 👨‍💻 팀원 정보
<table>
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/huiseon37">
              <img src="https://github.com/huiseon37.png" width="100">
              <br />
              <b>전희선 (huiseon37)</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/namjunkim12">
              <img src="https://github.com/namjunkim12.png" width="100">
              <br />
              <b>김남준 (namjunkim12)</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/say-young516">
              <img src="https://github.com/say-young516.png" width="100">
              <br />
              <b>최세영 (say-young516)</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            ☀️ <br/>
            Web FE
        </td>
        <td>
            👶 <br />
            Web FE
        </td>
        <td>
            💜 <br />
            Web FE
        </td>
    </tr>
</table>
