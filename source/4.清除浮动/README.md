## 方式一:使用overflow属性来清除浮动
```
.container{
　　overflow:hidden;
}
```
先找到浮动盒子的父元素，再在父元素中添加一个属性：`overflow:hidden`,就是清除这个父元素中的子元素浮动对页面的影响.
注意：一般情况下也不会使用这种方式，因为`overflow:hidden`有一个特点，超出了这个元素所在的区域以后会被隐藏(overflow:hidden会将超出的部分隐藏起来)

## 方式二:使用额外标签法
```
.clear{
　　clear:both;
}
```
在浮动的盒子之下再放一个标签，在这个标签中使用`clear:both`，来清除浮动对页面的影响.
- 内部标签：会将这个浮动盒子的父盒子高度重新撑开.
- 外部标签：会将这个浮动盒子的影响清除，但是不会撑开父盒子.
注意：一般情况下不会使用这一种方式来清除浮动。因为这种清除浮动的方式会增加页面的标签，造成结构的混乱.

## 方法三:使用伪元素来清除浮动(after)
```
.clearfix:after{
　　content:"";//设置内容为空
　　height:0;//高度为0
　　line-height:0;//行高为0
　　display:block;//将文本转为块级元素
　　visibility:hidden;//将元素隐藏
　　clear:both//清除浮动
　}
.clearfix{
　　zoom:1;为了兼容IE
}
```

## 方法四:使用双伪元素清除浮动
```
.clearfix:before,.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.clearfix {
  zoom: 1;
}
```
虽然比较简便,但是不严谨