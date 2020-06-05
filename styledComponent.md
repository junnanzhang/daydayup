#styled-componet className不同加载不同样式

```
export const NavItem = styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color: #333;
&.left {
float: left;
}
&.right {
float: right;
color: #969696;
}
&.active {
color: #ea6f5a;
}
`;


<NavItem className=‘left active’>首页</NavItem>
<NavItem className=‘left’>下载App</NavItem>
<NavItem className=‘right’>登陆</NavItem>
<NavItem className=‘right’>Aa</NavItem>
```

#attrs

```
export const NavSearch = styled.input.attrs({
placeholder: ‘搜索’
})`
width: 160p;
height: 38px;
padding: 0 20px;
margin-top: 9px;
margin-left: 20px;
box-sizing: border-box;
border: none;
outline: none;
border-radius: 19px;
background: eee;
font-size: 14px;
&::placeholder {
color: #999;
}
`;
```