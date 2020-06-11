# mutation

```
//vue 里面提供七种变异数组的方法，push pop splice, shift, unshift, sort, reverse, 还有一种办法是改变引用。
Vue.set(vm.obj, ‘address’, ‘beijing’); 通过set 方法可以向obj中增加一条属性以及值
vm.$set(vm.obj, ‘house’, true)

//数组上的set方法
Vue.set(vm.list, 1, ‘shit’)
vm.$set(vm.list, 2, ‘sdsflks;dfkhit’)
```


# 错误钩子

```
renderError(h, err){ //仅仅适用开发环境， 只能捕获当前组件错误，不能捕获子组件
	return h(‘div’, {}, err.stack)
}

errorCaptured() { //可以用于生产环境 可以捕获子组件
	
}
```