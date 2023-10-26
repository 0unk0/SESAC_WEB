function number_inc(){
    console.log("버튼 클릭");
    result=document.getElementById('result').innerHTML; /*글자로 읽어와짐*/
    new_result=parseInt(result)+1;
    console.log("result=", result);
    document.getElementById('result').innerHTML=new_result;
}

function number_dec(){
    result=document.getElementById('result').innerHTML;
    new_result=parseInt(result)-1;
    document.getElementById('result').innerHTML=new_result;
}

