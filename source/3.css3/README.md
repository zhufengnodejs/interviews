### CSS 选择符：
- id选择器(# myid)
- 类选择器(.myclassname)
- 标签选择器(div, h1, p)
- 相邻选择器(h1 + p)
- 子选择器(ul > li)
- 后代选择器(li a)
- 通配符选择器( * )
- 属性选择器(a[rel = "external"])
- 伪类选择器(a:hover, li:nth-child)

### 可继承的样式
- font-size
- font-family
- color
- text-indent

### 不可继承的样式
- border
- padding
- margin
- width
- height

### 优先级算法：
- 优先级就近原则，同权重情况下样式定义最近者为准
- 载入样式以最后载入的定位为准
- !important >  id > class > tag

### CSS3新增伪类举例：
- p:first-of-type  选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
- p:last-of-type   选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
- p:only-of-type  选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
- p:only-child     选择属于其父元素的唯一子元素的每个 <p> 元素。
- p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。
- :enabled :disabled 控制表单控件的禁用状态。
- :checked         单选框或复选框被选中。

### CSS3有哪些新特性？
- 圆角 (border-radius)
- 阴影 (box-shadow)
- 对文字加特效(text-shadow)
- 线性渐变(gradient)
- 旋转(transform)
  - rotate(9deg)  旋转
  - scale(0.85,0.90) 缩放
  - translate(0px,-30px) 定位
  - skew(-9deg,0deg) 倾斜
- rgba
- ::selection.
- 媒体查询
- border-image