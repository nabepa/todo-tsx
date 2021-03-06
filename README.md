# Todo List with TSX

Read this in other languages: [íêµ­ì´ ð°ð·](README.ko.md)

You can try this app, click below badge!
</br>

<a href="https://hardcore-wiles-79bcb5.netlify.app" target="_blank">![Netlify Status](https://api.netlify.com/api/v1/badges/aea01573-e082-44b4-8617-12e71bf71494/deploy-status)</a>

<img src="public/images/main.png">

## ð éçºèæ¯

- TypeScript & React ã®ç·´ç¿ã§ï¼Drag&Drop ã§ãªã¹ãã®é åºãå¤ãããç°¡åãª Todo List App ãä½ããï¼
- styled-component ãä½¿ã£ã¦ã¿ã

## ð¦ ä½¿ç¨è¨èªã¨ãã¼ã«

<p>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white"/>
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
 </p>

## ð ä½¿ç¨ã©ã¤ãã©ãªã¨ãªã½ã¼ã¹

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd): Drag&Drop ã§ãªã¹ãã®é åºå¤æ´

- [@material-ui/icons](https://material-ui.com/getting-started/installation/s): icon

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## ð Project ã§æ°ããåå¼·ããäº

### Controlled Components ã¨ Unontrolled Components

- React ã§ form ãå®è£ããæ¹æ³ã¯ 2 ã¤: Controlled Component, Uncontrolled Component
- [Controlled Components](https://reactjs.org/docs/forms.html#gatsby-focus-wrapper)ã¯ï¼å¥åã¨åæã«å¤ãæ´æ°
  - React ã«ãã state ãã³ã³ãã­ã¼ã«(onChange)
- [Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)ã¯ï¼å¿è¦ãªéã«å¥åå¤ãæã£ã¦ããããã«ç´æ¥æå®
  - æ¢å­ã® HTML forms ã§ ref ãå©ç¨ããããã« Uncotrolled Components ã§ã ref ã§ DOM è¦ç´ ã«æ¥è¿
  - Class componet ã§ã¯ createRef(), Hooks ã§ã¯ useRef()
- ç¶æ³ã«å¿ãã¦é©åãªæ¹ãé¸æ
  - ãã®ãã­ã¸ã§ã¯ãã§æ°ããã¿ã¹ã¯ãè¿½å ããéã«ã¯ï¼å¥åã¨åæã«å¤ãæ´æ°ããã¨ãããå¿è¦ã®ãªã re-rendering
  - [<span>ð ä¸ç·ã«èª­ãã¨ããè³æ</span>](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)

### Record

- TypeScript ã®[Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html)ã®ä¸ã¤
- object type ãä½ãéã«å©ç¨
- æ¬¡ã®ããã« Tasks ã¨ãã object ã® type ãå®ç¾©ãï¼

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

  App ã³ã³ãã¼ãã³ãã® remove method ã§æ¬¡ã®ããã«ä½¿ãã¨ã¨ã©ã¼ãçºç

  ```typescript
  const newTasks: Tasks = { ...prevTasksData.tasks };
  delete newTasks[task.id];
  ```

  task&#46;id ã®å¤ãæå®ããéã«ï¼TaskId åã«ãã¦ãçµå±ã¯ string åãªã®ã§ï¼newTasks ã¯ "ãªã key ã¨ãã¦ TaskId ã§ã¯ãªã string ãããã¦ãã®ï¼"ã£ã¦ãªãï¼

  ããã§ï¼utility type ã® Record ãå©ç¨

  ```typescript
  type Tasks = Record<TaskId, Task>;
  ```

  Record ã® API ãè¦ãã¨ï¼string åã extend ãã type ã key ã¨ãã object ãå®£è¨

  ```typescript
  type Record<K extends keyof any, T> = {
    [P in K]: T;
  };
  ```

  ã¤ã¾ãï¼task&#46;id ã string ã¨ãã¦å¥ã£ã¦ãéãããã«ãªãï¼

## ð¤© ãã£ã¨åå¼·ãã¦è¦ããã¨

- [Custom Hooks](https://reactjs.org/docs/hooks-custom.html#extracting-a-custom-hook)ã§ App ã® Drag é¨åæ½åº
- Props ã¨ State ã¨ãã¦ type? interface? â [åè](https://dev.to/reyronald/typescript-types-or-interfaces-for-react-component-props-1408)
