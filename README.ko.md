## 📖 Project를 통해 새로 배운 것

### Controlled Components と Unontrolled Components

- React で form を実装する方法は 2 つ: Controlled Component, Uncontrolled Component
- [Controlled Components](https://reactjs.org/docs/forms.html#gatsby-focus-wrapper)は，入力と同時に値が更新
- [Uncontrolled Components](https://reactjs.org/docs/uncontrolled-components.html)は，必要な際に入力値を持ってくるように直接指定
  - 既存の HTML form inputs で ref を利用したように
  - React も同じく ref があり，Class componet では createRef(), Hooks では useRef()
- 状況に応じて適切な方を選択
- [같이 읽으면 좋은 자료1](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
- [같이 읽으면 좋은 자료2](https://velog.io/@yukyung/React-%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%B9%84%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%ED%86%BA%EC%95%84%EB%B3%B4%EA%B8%B0)
