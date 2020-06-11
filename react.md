#底层原理

1. state 数据
2. JSX 模版
3. 数据 + 模版 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模版 结合，生成真实的DOM，替换原始的DOM

缺陷：
第一次生成了一个完整的DOM片段
第二次生成了一个完整的DOM片段
第二次的DOM替换第一次的DOM，非常耗性能

1. state 数据
2. JSX 模版
3. 数据 + 模版 结合，生成真实的DOM，来显示
4. state 发生改变
5. 数据 + 模版 结合，生成真实的DOM，并不直接替换原始的DOM
6. 新的DOM（DoucumentFragment） 和原始的DOM 做比对，找差异
7. 找出input框发生了变化
8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素

缺陷：
性能的提升并不明显

1. state 数据
2. JSX 模版
3. 数据 + 模版 结合，生成真实的DOM，来显示 
<div id='abc'><span>hello world</span></div>
4. 生成虚拟DOM（虚拟DOM就是一个JS对象，用它来描述真实DOM）（损耗了性能）
['div', {id: 'abc'}, ['span', {}, 'hello world']]
5. state 发生变化
6. 数据 + 模版 生成新的虚拟DOM （极大的提升了性能）
['div', {id: 'abc'}, ['span', {}, 'bye bye']]
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别是span中内容（极大的提升性能）
8. 直接操作DOM，改变span中的内容

#自定义属性传值

```
const A = 65 // ASCII character code

class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
  }

  handleClick(e) {
    this.setState({
      justClicked: e.target.dataset.letter
    });
  }

  render() {
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} data-letter={letter} onClick={this.handleClick}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

```

#前端目录结构
1. `layouts/`: 存放布局级别的组件
2. `views/`: 存放页面级别的组件
3. `components/`: 存放业务级别的 UI 组件
4. `hocs/`: 存放业务级别的逻辑组件（看情况可与 `components/` 合并，但建议分开）
5. `app/`: 存放应用级别的配置信息，如菜单、路由等，以及应用初始化的相关代码，如初始化 redux store 等
6. `utils/`: 存放通用的功能性函数，如数据聚合、处理等
7. `styles/`: 存放全局的 CSS 样式、变量、mixins 等
8. `assets/`: 存放静态资源，如图标、图片等
9. `i18n/`: 存放应用国际化需要的多语言文件

# 事件节流  throttle 防止多次提交事件

```
import throttle from ‘lodash.throttle’;

class LoadMoreButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickThrottled = throttle(this.handleClick, 1000);
  }

  componentWillUnmount() {
    this.handleClickThrottled.cancel();
  }

  render() {
    return <button onClick={this.handleClickThrottled}>Load More</button>;
  }

  handleClick() {
    this.props.loadMore();
  }
}

```