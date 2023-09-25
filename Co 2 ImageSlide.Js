var i=0;
var img=document.getElementById("img");
img.src="cmp3.jpg";
var array=["cmp3.jpg","python.jpg","java.jpg","js.jpg","html.jpg","C++.jpg","C.jpg","cmp1.jpg","cmp2.jpg"]
function previous()
{
     if(i==0){
        i=9;
    }
    i--;
    img.src=array[i];
}
   
function next(){
    if(i==9){
        i=0;
    }
    i++;
    img.src=array[i];     
}