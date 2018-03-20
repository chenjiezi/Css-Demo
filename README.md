# Css-Demo
#### 修真院免费提供css、js、java、ios、android等技术的练手小项目。通过完成修真院平台的css模块的15个任务。我的css水平提升了很多，感谢修真院。
#### 对css的自适应，响应式，浮动，定位，flex布局，css sprite（雪碧图）等进行自学，以及制作下拉菜单和轮播图（纯css写的），掌握了bootstrap和sass的使用，并运用到项目里。在做项目遇到很多问题，在通过解决问题中，
#### 掌握了这几个方面的优缺点，例如浮动，一个元素，里面的子元素浮动，会导致父元素的高度变为0，原因是子元素浮动，脱离了文档流所导致的。
#### 解决办法：给父元素添加伪类：after来清楚浮动。
# [修真院](http://www.jnshu.com/occupation/1/task)   
# TASK1：九宫格    
[demo测试](https://cjz08.github.io/Css-Demo/task1/index.html)
### demo总结：   
#### 任务一让我初步感受自适应，在页面宽度的变大变小时，九宫格会随之放大缩小，不会变形。   
#### 单位：（这里只介绍比较常用的单位）    
### px：   
   像素（pixel），它是一个点，点的大小是可以调整的，也称为“相对长度”。在ps软件上，把图片放大到最大，看到的一个点一点，那就是像素，
   在网页中，px是固定单位。比如给一个图片width：100px;那么随着页面宽度的变大变小，图片的大小不会发生改变。
   像素是相对于显示器屏幕分辨率的相对长度单位。pc端上用px单位倒没有什么不同，但在移动端，屏幕分辨率种类偏多，不可能一个一个去适
   配，这是px单位就显得很无力，所以就要考虑用em和rem。   
  
  
### em：
继承父级的，假设html的font-size默认为16px，body字体大小定义为50%，那么在body里字体大小就是1em=8px了。
可当你又定义了一个div，然后把字体设置成了50%，请问，现在div下的1em等于多少？因为继承了父级的值，
现在这个div里的1em=4px，这么嵌套下去的话，抱歉，我数学不好！所有rem就出现了。

### rem：
是em的升级版，rem只会相对html的值，不会受到父级的影响，这样的好处在于：从em里的例子来讲，1rem始终会等于8px。
使用的时候不需要重新计算rem此时的大小。rem因为是css3增加的，所以ie8或以下请无视（始终想不明白，为什么国人至今对微软都放弃的ie这么恋恋不舍）。      
### 学习路径：
[rem是如何实现自适应布局的？](http://caibaojian.com/web-app-rem.html)      

vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。     
vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。    
vmin：vw和vh中较小的那个。    
vmax：vw和vh中较大的那个。    
其它的单位还有：    
%:百分比    
in:寸     
cm:厘米    
mm:毫米    
pt:point，大约1/72寸     
pc:pica，大约6pt，1/6寸      


# TASK2：认识开发必备工具   
### 总结：
#### 掌握git，github的基本操作，在本地仓库push到远程仓库进行托管，用github pages来展示我的作品。
### 学习路径：
[Git教程](https://www.bilibili.com/video/av17603446)


# TASK3：一个最简单的移动端页面    
[demo测试](https://cjz08.github.io/Css-Demo/task3/index.html)
### demo总结：
#### 运用布局知识让布局更好地适应移动端，以及使用ps进行切图。
切图的具体办法有：

    1.PS cc版的精准自动切图

    2.切片工具

    3.参考线切图

    4.裁剪工具

    5.磁性套索抠图

    方法：新建一个图层（快捷键Ctrl + Alt + Shift + E），然后用磁性套索扣出图，

        按下回车键，窗口上方有个羽化的方框，设置1像素。然后按ctrl+c和ctrl+v。

        就可以在图层扣出想要的图片。
### 学习路径：
[前端工程师必备的PS技能——切图篇](https://www.imooc.com/learn/506)


# TASK4：登录页——一个最常见的移动端页面    
[demo测试](https://cjz08.github.io/Css-Demo/task4/index.html)
### demo总结：
#### 掌握positioning。
### 学习路径：
[position 使用 relative, absolute, fixed 的区别是什么？](https://www.zhihu.com/question/53545802)



# TASK5：护工个人主页——一个最常见的移动端页面    
[demo测试](https://cjz08.github.io/Css-Demo/task5/index.html)
### demo总结：
#### 用css3的方法更好地拉伸背景图
### 学习路径：
[CSS3 背景](http://www.runoob.com/css3/css3-backgrounds.html)



# TASK6：护工列表页——一个最常见的移动端页面   
[demo测试](https://cjz08.github.io/Css-Demo/task6/index.html)
### demo总结：
#### 1.解决垂直居中； 2.模拟下拉选框； 3.做出复杂的列表页; 4.掌握雪碧图的使用
[任务六的总结](http://www.jnshu.com/daily/50637?dailyType=others&total=8&page=4&uid=21822&sort=0&orderBy=3)
### 学习路径：
[模拟下拉选框](http://biaoyansu.com/13.3)    
[background-position和雪碧图(CSS Sprites)用法](http://blog.csdn.net/bingkingboy/article/details/51059209)


# TASK7：桌游精灵——一个完整的webApp，以bootstrap为基础满足更多不同的需求 
#### PS:github pages加载网页有点慢，毕竟是免费的，所以想观看我的作品的话，耐心等待个几秒哈！！！
[demo测试1](https://cjz08.github.io/Css-Demo/task7/index1.html)     
[demo测试2](https://cjz08.github.io/Css-Demo/task7/index2.html)     
[demo测试3](https://cjz08.github.io/Css-Demo/task7/index3.html)     
### demo总结：
#### 1.HTML5的audio定义音频流； 2.处理半透明； 3.CSS3动画


# TASK8：任务8:修真院——一个PC端的企业网站，以bootstrap为基础满足更多不同的需求   
[demo测试1](https://cjz08.github.io/Css-Demo/task8/index1.html)     
[demo测试2](https://cjz08.github.io/Css-Demo/task8/index2.html)     
[demo测试3](https://cjz08.github.io/Css-Demo/task8/index3.html)     
### demo收获：
#### 完成一个比较完整的PC端项目
### 学习路径：

## TASK9：护工列表页——一个最常见的移动端页面   
[demo测试](https://cjz08.github.io/Css-Demo/task6/index.html)
### demo总结：
### 学习路径：


## TASK10：护工列表页——一个最常见的移动端页面   
[demo测试](https://cjz08.github.io/Css-Demo/task6/index.html)
### demo总结：
### 学习路径：





