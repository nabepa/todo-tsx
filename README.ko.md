# Todo List with TSX

Read this in other languages: [日本語 🇯🇵](README.md)

You can try this app, click below badge!
</br>

<a href="https://hardcore-wiles-79bcb5.netlify.app" target="_blank">![Netlify Status](https://api.netlify.com/api/v1/badges/aea01573-e082-44b4-8617-12e71bf71494/deploy-status)</a>

<img src="public/images/main.png">

## 🚀 개발 배경

- TypeScript & React 연습으로，Drag&Drop으로 리스트 순서를 바꿀 수 있는 간단한 Todo List App 를 만들자!
- styled-component 를 사용해 보자.

## 🦄 使用言語とツール

<p>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
 </p>

## 📚 使用ライブラリとリソース

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd): Drag&Drop 으로 리스트의 순서 변경

- [@material-ui/icons](https://material-ui.com/getting-started/installation/s): icon

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 📖 Project 에서 새로 배운 것

### Controlled Components と Unontrolled Components

- React에서 form을 구현하는 방법은 2가지: Controlled Component, Uncontrolled Component
- [Controlled Components](https://reactjs.org/docs/forms.html#gatsby-focus-wrapper)는, 입력과 동시에 값이 갱신
  - React에 의해 state를 컨트롤(onChange)
- [Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)는 필요할 때 입력 값을 가져오도록 직접 지정
  - 기존의 HTML forms에서 ref를 사용했던 것처럼 Uncotrolled Components에서도 ref로 DOM 요소에 접근
  - Class componet에서는 createRef(), Hooks에서는 useRef()
- 상황에 맞게 적절한 쪽을 선택
  - 이 프로젝트에서 새로운 할 일을 추가할 때, 입력과 동시에 state를 갱신하면 오히려 불필요한 re-rendering을 하게 됨
- [📖 같이 읽으면 좋은 자료1](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
- [📖 같이 읽으면 좋은 자료2](https://velog.io/@yukyung/React-%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%B9%84%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%ED%86%BA%EC%95%84%EB%B3%B4%EA%B8%B0)

### Record

- TypeScript의 [Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html) 중 하나
- object type을 만들 때 사용
- 다음과 같이 Tasks라는 object의 type을 정의하고,

  ```typescript
  type TaskId = string;
  type Task = {
    id: TaskId;
    name: string;
  };
  type Tasks = {
    [id: TaskId]: Task;
  };
  ```

  App 컴포넌트의 remove method에서 다음과 같이 사용하면 에러가 발생했다.

  ```typescript
  const newTasks: Tasks = { ...prevTasksData.tasks };
  delete newTasks[task.id];
  ```

  task&#46;id의 값을 TaskId 형으로 할당했어도 결국은 string형이기 때문에, newTasks의 입장에서는 "key값으로 왜 TaskId가 아니라 string의 값을 주는 것이지？"하고 에러 발생

  그래서 utility type중 하나인 Record를 이용

  ```typescript
  type Tasks = Record<TaskId, Task>;
  ```

  Record의 API를 보면， string형을 extend한 type을 key로 하는 object를 선언

  ```typescript
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
  ```

  즉，task&#46;id가 string으로서 들어와도 정상적으로 작동
