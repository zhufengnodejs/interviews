## 标准模型和IE模型的区别?
IE 盒子模型的 content 部分包含了 border 和 pading。
## CSS是如何设置这两种模型?
```
box-sizing:border-box;
```
## JS如何设置和获取盒模型对应的宽和高?
IE浏览器
```
el.currentStyle.width;
```

标准浏览器
```
window.getComputedStyle(dom).width
```


```
var box=document.getElementById('box');
//这个属性有四个值top、right、left、bottom
//它是代表和页面上边和左边的距离
box.getBoundingClientRect().top;  //  元素上边到视窗上边的距离
box.getBoundingClientRect().right //  元素右边到视窗左边的距离
box.getBoundingClientRect().bottom; //  元素下边到视窗上边的距离
box.getBoundingClientRect().left; //  元素左边到视窗左边的距离

获得元素的宽高
//在标准盒子模型下，他获取到的盒子的宽度是content-width+border+padding
//而在IE盒子模型下他获取到的是你设置的宽度，因为在IE盒子模型下padding和border是算在width里的
box.getBoundingClientRect().width;
```
## 什么是优雅降级和渐进增强?
