# 我的作品    
PS:github pages加载网页有点慢，毕竟是免费的服务器，耐心等待个几秒哈！！！       

#### [自适应九宫格](https://chenjiezi.github.io/Css-Demo/task1/index.html)（移动端浏览）
#### [移动端页面--魔镜](https://chenjiezi.github.io/Css-Demo/task3/index.html)
#### [移动端页面--登陆页](https://chenjiezi.github.io/Css-Demo/task4/index.html)
#### [移动端页面--护工个人主页](https://chenjiezi.github.io/Css-Demo/task5/index.html)  
#### [移动端页面--护工列表页](https://chenjiezi.github.io/Css-Demo/task6/index.html?_blank)
#### [桌游精灵1——一个完整的webApp，以bootstrap为基础满足更多不同的需求 ](https://chenjiezi.github.io/Css-Demo/task7/index1.html)
#### [桌游精灵2——一个完整的webApp，以bootstrap为基础满足更多不同的需求 ](https://chenjiezi.github.io/Css-Demo/task7/index2.html)
#### [桌游精灵3——一个完整的webApp，以bootstrap为基础满足更多不同的需求 ](https://chenjiezi.github.io/Css-Demo/task7/index3.html)
#### [响应式的企业网站--demo展示1](https://chenjiezi.github.io/Css-Demo/task9/index1.html)         
#### [响应式的企业网站--demo展示2](https://chenjiezi.github.io/Css-Demo/task9/index2.html)         
#### [响应式的企业网站--demo展示3](https://chenjiezi.github.io/Css-Demo/task9/index3.html)   
#### [51包装——一个常见的表单页面](https://chenjiezi.github.io/Css-Demo/task10/index.html)


#### 修真院免费提供css、js等技术的练手小项目。通过完成修真院平台的css模块的15个任务。我的css水平提升了很多，感谢修真院。
#### 对css的自适应，响应式，浮动，定位，flex布局，css sprite（雪碧图）等进行自学，以及制作下拉菜单和轮播图（纯css写的），掌握了bootstrap和sass的使用，并运用到项目里。在做项目遇到很多问题，在通过解决问题中，
#### 掌握了这几个方面的优缺点，例如浮动，一个元素，里面的子元素浮动，会导致父元素的高度变为0，原因是子元素浮动，脱离了文档流所导致的。
#### 解决办法：给父元素添加伪类：after来清除浮动。
# [修真院](http://www.jnshu.com/occupation/1/task)   
# TASK1：九宫格    
[demo展示](https://chenjiezi.github.io/Css-Demo/task1/index.html)    
![九宫格](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t1.gif)
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
![em](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/em.png)

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
[demo展示](https://chenjiezi.github.io/Css-Demo/task3/index.html)    
![魔镜](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t3.gif)
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
[demo展示](https://chenjiezi.github.io/Css-Demo/task4/index.html)    
![登录页](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t4.gif)     
### demo总结：
#### 掌握positioning。
### 学习路径：
[position 使用 relative, absolute, fixed 的区别是什么？](https://www.zhihu.com/question/53545802)



# TASK5：护工个人主页——一个最常见的移动端页面    
[demo展示](https://chenjiezi.github.io/Css-Demo/task5/index.html)    
![个人主页](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t5.gif)
### demo总结：
#### 用css3的方法更好地拉伸背景图
### 学习路径：
[CSS3 背景](http://www.runoob.com/css3/css3-backgrounds.html)



# TASK6：护工列表页——一个最常见的移动端页面   
[demo展示](https://chenjiezi.github.io/Css-Demo/task6/index.html)    

### demo总结：
#### 1.解决垂直居中； 2.模拟下拉选框； 3.做出复杂的列表页; 4.掌握雪碧图的使用
[任务六的总结](http://www.jnshu.com/daily/50637?dailyType=others&total=8&page=4&uid=21822&sort=0&orderBy=3)
### 学习路径：
[模拟下拉选框](http://biaoyansu.com/13.3)    
[background-position和雪碧图(CSS Sprites)用法](http://blog.csdn.net/bingkingboy/article/details/51059209)
[自动生动雪碧图（工具)](https://www.toptal.com/developers/css/sprite-generator)
[css实现垂直居中6种方法](https://www.cnblogs.com/Yirannnnnn/p/4933332.html)

# TASK7：桌游精灵——一个完整的webApp，以bootstrap为基础满足更多不同的需求 
#### PS:github pages加载网页有点慢，毕竟是免费的，所以想观看我的作品的话，耐心等待个几秒哈！！！
#### [demo展示1](https://chenjiezi.github.io/Css-Demo/task7/index1.html)     
#### [demo展示2](https://chenjiezi.github.io/Css-Demo/task7/index2.html)     
#### [demo展示3](https://chenjiezi.github.io/Css-Demo/task7/index3.html)     
 
### demo总结：
#### 1.HTML5的audio定义音频流； 2.处理半透明； 3.CSS3动画
### 学习路径：
[Bootstrap 教程](http://www.runoob.com/bootstrap/bootstrap-tutorial.html)
      

# TASK8：任务8:修真院——一个PC端的企业网站，以bootstrap为基础满足更多不同的需求   
#### [demo展示1](https://chenjiezi.github.io/Css-Demo/task9/index1.html)     
#### [demo展示2](https://chenjiezi.github.io/Css-Demo/task9/index2.html)     
#### [demo展示3](https://chenjiezi.github.io/Css-Demo/task9/index3.html)     

### demo收获：
#### 从一开始切图到完成公用布局以及全局布局，做了一个详细记录笔记，欢迎参考。
#### [任务八总结](http://www.jnshu.com/daily/52131?dailyType=others&total=8&page=1&uid=21822&sort=0&orderBy=3)
#### 完成一个比较完整的PC端项目,项目实现了轮播图，以及运用flex进行布局，掌握一些自适应的布局方法。
### 学习路径：
[利用HTML和CSS实现常见的布局](https://segmentfault.com/a/1190000003931851)     
[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)     
[这可能是史上最全的CSS自适应布局总结教程](http://www.cnblogs.com/qieguo/p/5421252.html?f=tt)     
[手把手教你用纯css3实现轮播图效果](https://www.jianshu.com/p/28643f36011e)     
      
            
# TASK9：修真院——一个响应式的企业网站 （可以在移动端进行浏览） 
#### [demo展示1](https://chenjiezi.github.io/Css-Demo/task9/index1.html)     
#### [demo展示2](https://chenjiezi.github.io/Css-Demo/task9/index2.html)     
#### [demo展示3](https://chenjiezi.github.io/Css-Demo/task9/index3.html)         
![9-1](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t9-1.png) 
![9-2](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t9-2.png) 
### demo总结：
#### 在任务八的基础上，运用了媒体查询技术，做到响应式。增加网站布局开发的熟练度； 获得一个响应式的网站
### 学习路径：
[《媒体查询——响应式设计》](https://www.w3cplus.com/css/advanced-html-css-lesson4-responsive-web-design.html)
      
      
# TASK10：51包装——一个常见的表单页面  
[demo展示](https://chenjiezi.github.io/Css-Demo/task10/index.html)      
![包装](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t10.png)    
### demo总结：
#### CSS制作流程图； CSS模拟表单元素； 熟练响应式布局

# TASK11-15：对前面4，5，6，7，8，9任务用sass进行重构页面。
### ps：我的sass代码在上面的11-14任务里面
### demo总结：
本文介绍了sass最基本部分,你可以轻松地使用sass编写清晰、无冗余、语义化的css。对于sass提供的工具你已经有了一个比较深入的了解，同时也掌握了何时使用这些工具的指导原则。

变量是sass提供的最基本的工具。通过变量可以让独立的css值变得可重用，无论是在一条单独的规则范围内还是在整个样式表中。变量、混合器的命名甚至sass的文件名，可以互换通用_和-。同样基础的是sass的嵌套机制。嵌套允许css规则内嵌套css规则，减少重复编写常用的选择器，同时让样式表的结构一眼望去更加清晰。sass同时提供了特殊的父选择器标识符&，通过它可以构造出更高效的嵌套。

你也已经学到了sass的另一个重要特性，样式导入。通过样式导入可以把分散在多个sass文件中的内容合并生成到一个css文件，避免了项目中有大量的css文件通过原生的css @import带来的性能问题。通过嵌套导入和默认变量值，导入可以构建更强有力的、可定制的样式。混合器允许用户编写语义化样式的同时避免视觉层面上样式的重复。你不仅学到了如何使用混合器减少重复，同时学习到了如何使用混合器让你的css变得更加可维护和语义化。最后，我们学习了与混合器相辅相成的选择器继承。继承允许你声明类之间语义化的关系，通过这些关系可以保持你的css的整洁和可维护性。
### 学习路径：
[Sass中文网](https://www.sass.hk/docs/)





# Css-Demo
#### 修真院免费提供css、js、java、ios、android等技术的练手小项目。通过完成修真院平台的css模块的15个任务。我的css水平提升了很多，感谢修真院。
#### 对css的自适应，响应式，浮动，定位，flex布局，css sprite（雪碧图）等进行自学，以及制作下拉菜单和轮播图（纯css写的），掌握了bootstrap和sass的使用，并运用到项目里。在做项目遇到很多问题，在通过解决问题中，
#### 掌握了这几个方面的优缺点，例如浮动，一个元素，里面的子元素浮动，会导致父元素的高度变为0，原因是子元素浮动，脱离了文档流所导致的。
#### 解决办法：给父元素添加伪类：after来清除浮动。
# [修真院](http://www.jnshu.com/occupation/1/task)   
# TASK1：九宫格    
[demo展示](https://chenjiezi.github.io/Css-Demo/task1/index.html)    
![九宫格](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t1.gif)
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
![em](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/em.png)

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
[demo展示](https://chenjiezi.github.io/Css-Demo/task3/index.html)    
![魔镜](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t3.gif)
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
[demo展示](https://chenjiezi.github.io/Css-Demo/task4/index.html)    
![登录页](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t4.gif)     
### demo总结：
#### 掌握positioning。
### 学习路径：
[position 使用 relative, absolute, fixed 的区别是什么？](https://www.zhihu.com/question/53545802)



# TASK5：护工个人主页——一个最常见的移动端页面    
[demo展示](https://chenjiezi.github.io/Css-Demo/task5/index.html)    
![个人主页](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t5.gif)
### demo总结：
#### 用css3的方法更好地拉伸背景图
### 学习路径：
[CSS3 背景](http://www.runoob.com/css3/css3-backgrounds.html)



# TASK6：护工列表页——一个最常见的移动端页面   
[demo展示](https://chenjiezi.github.io/Css-Demo/task6/index.html)    

### demo总结：
#### 1.解决垂直居中； 2.模拟下拉选框； 3.做出复杂的列表页; 4.掌握雪碧图的使用
[任务六的总结](http://www.jnshu.com/daily/50637?dailyType=others&total=8&page=4&uid=21822&sort=0&orderBy=3)
### 学习路径：
[模拟下拉选框](http://biaoyansu.com/13.3)    
[background-position和雪碧图(CSS Sprites)用法](http://blog.csdn.net/bingkingboy/article/details/51059209)
[自动生动雪碧图（工具)](https://www.toptal.com/developers/css/sprite-generator)
[css实现垂直居中6种方法](https://www.cnblogs.com/Yirannnnnn/p/4933332.html)

# TASK7：桌游精灵——一个完整的webApp，以bootstrap为基础满足更多不同的需求 
#### PS:github pages加载网页有点慢，毕竟是免费的，所以想观看我的作品的话，耐心等待个几秒哈！！！
#### [demo展示1](https://chenjiezi.github.io/Css-Demo/task7/index1.html)     
#### [demo展示2](https://chenjiezi.github.io/Css-Demo/task7/index2.html)     
#### [demo展示3](https://chenjiezi.github.io/Css-Demo/task7/index3.html)     
 
### demo总结：
#### 1.HTML5的audio定义音频流； 2.处理半透明； 3.CSS3动画
### 学习路径：
[Bootstrap 教程](http://www.runoob.com/bootstrap/bootstrap-tutorial.html)
      

# TASK8：任务8:修真院——一个PC端的企业网站，以bootstrap为基础满足更多不同的需求   
#### [demo展示1](https://chenjiezi.github.io/Css-Demo/task9/index1.html)     
#### [demo展示2](https://chenjiezi.github.io/Css-Demo/task9/index2.html)     
#### [demo展示3](https://chenjiezi.github.io/Css-Demo/task9/index3.html)     

### demo收获：
#### 从一开始切图到完成公用布局以及全局布局，做了一个详细记录笔记，欢迎参考。
#### [任务八总结](http://www.jnshu.com/daily/52131?dailyType=others&total=8&page=1&uid=21822&sort=0&orderBy=3)
#### 完成一个比较完整的PC端项目,项目实现了轮播图，以及运用flex进行布局，掌握一些自适应的布局方法。
### 学习路径：
[利用HTML和CSS实现常见的布局](https://segmentfault.com/a/1190000003931851)     
[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)     
[这可能是史上最全的CSS自适应布局总结教程](http://www.cnblogs.com/qieguo/p/5421252.html?f=tt)     
[手把手教你用纯css3实现轮播图效果](https://www.jianshu.com/p/28643f36011e)     
      
            
# TASK9：修真院——一个响应式的企业网站 （可以在移动端进行浏览） 
#### [demo展示1](https://chenjiezi.github.io/Css-Demo/task9/index1.html)     
#### [demo展示2](https://chenjiezi.github.io/Css-Demo/task9/index2.html)     
#### [demo展示3](https://chenjiezi.github.io/Css-Demo/task9/index3.html)         
![9-1](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t9-1.png) 
![9-2](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t9-2.png) 
### demo总结：
#### 在任务八的基础上，运用了媒体查询技术，做到响应式。增加网站布局开发的熟练度； 获得一个响应式的网站
### 学习路径：
[《媒体查询——响应式设计》](https://www.w3cplus.com/css/advanced-html-css-lesson4-responsive-web-design.html)
      
      
# TASK10：51包装——一个常见的表单页面  
[demo展示](https://chenjiezi.github.io/Css-Demo/task10/index.html)      
![包装](https://raw.githubusercontent.com/chenjiezi/Css-Demo/master/pic/t10.png)    
### demo总结：
#### CSS制作流程图； CSS模拟表单元素； 熟练响应式布局

# TASK11-15：对前面4，5，6，7，8，9任务用sass进行重构页面。
### ps：我的sass代码在上面的11-14任务里面
### demo总结：
本文介绍了sass最基本部分,你可以轻松地使用sass编写清晰、无冗余、语义化的css。对于sass提供的工具你已经有了一个比较深入的了解，同时也掌握了何时使用这些工具的指导原则。

变量是sass提供的最基本的工具。通过变量可以让独立的css值变得可重用，无论是在一条单独的规则范围内还是在整个样式表中。变量、混合器的命名甚至sass的文件名，可以互换通用_和-。同样基础的是sass的嵌套机制。嵌套允许css规则内嵌套css规则，减少重复编写常用的选择器，同时让样式表的结构一眼望去更加清晰。sass同时提供了特殊的父选择器标识符&，通过它可以构造出更高效的嵌套。

你也已经学到了sass的另一个重要特性，样式导入。通过样式导入可以把分散在多个sass文件中的内容合并生成到一个css文件，避免了项目中有大量的css文件通过原生的css @import带来的性能问题。通过嵌套导入和默认变量值，导入可以构建更强有力的、可定制的样式。混合器允许用户编写语义化样式的同时避免视觉层面上样式的重复。你不仅学到了如何使用混合器减少重复，同时学习到了如何使用混合器让你的css变得更加可维护和语义化。最后，我们学习了与混合器相辅相成的选择器继承。继承允许你声明类之间语义化的关系，通过这些关系可以保持你的css的整洁和可维护性。
### 学习路径：
[Sass中文网](https://www.sass.hk/docs/)





