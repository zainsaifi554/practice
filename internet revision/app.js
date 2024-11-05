// var flag=true;

// count=0;

// while (flag){
//     count +=5
//     console.log(count)
//     if(count >100){
// flag=false;
//     }
   
// }

//   

// var flag = true;
// var count =0;

// while (flag){
//     // count =count +1 
//     count +=5

//     if(count >100){
// flag =false;
//     }
//     console.log(count);
// }

// var i= 0 
// do{
// console.log(i)
// i++

// }while(false);



// use of his loop is it not working on index only loop on 
// array and see that alll values//
 
// var arr =['true','22323','zain','saifi',['333r24']];
// for(var v of arr){
//     console.log(v)
    
// } 

/*  mutiple lines commints
When a comment requires more than one line,
a block comment like this, with its opening
and closing tags, is the way to go.
*/
function submit(){
    var file = document.getElementById('file')
    // console.log()

    var image =document.getElementById('image');
    image.src = URL.createObjectURL(file.files [0]) ;
    image.style.display = 'block',style.width ='100';
    image.style.width = '200px';
    image.style.height = '200px';
}