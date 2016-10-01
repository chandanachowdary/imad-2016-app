console.log('Loaded!');
// to change the html content
var element= document.getElementById('main-text');
element.innerHTML='new value';
// to move an elemnt on click
var img=document.getElementById('madi');
function moveRight(){
    marginLefft=marginLeft+2;
    img.style.marginleft=marginLeft+'px';
}
img.onClick=function(){
    var interval=setinterval(moveRight,10);
};
