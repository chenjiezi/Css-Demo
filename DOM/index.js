function showPic(whilepic){
  
  // var a = whilepic.getElementsByTagName('a')[0];
  //当点击链接图片是就获得元素节点，不用再次获得该元素
  //这条语句是多余的,在元素节点在获得该元素节点，这个逻辑
  //有问题。
  
  var source = whilepic.getAttribute('href');
  
  var pic = document.getElementById('pic');
  
  // var a = pic.getAttribute('src');
  //这里仅仅是获取src的属性的值，在下一条语句，将
  //属性值修改为source是没有意义的。
  //正确做法是在该元素节点的src属性上进行值的修改。

  pic.setAttribute('src',source);
  //source是一个变量，不需要单引号，而src是一个？
  //猜测：是不是src是网页获取来的东西，所以应该用单引号括起来。
  var box = document.getElementsByTagName('p');
  var text = whilepic.getAttribute('title')
  box[0].firstChild.nodeValue = text;
}

// alert(box[0].firstChild.nodeValue);