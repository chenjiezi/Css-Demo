# Css-Demo
#### 修真院免费提供css、js、java、ios、android等技术的练手小项目。通过完成修真院平台的css模块。我的css水平提升好高好高，感谢修真院。    
# [修真院](http://www.jnshu.com/occupation/1/task)   
## TASK1：九宫格    
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
