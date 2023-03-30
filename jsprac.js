

let num=Math.floor(Math.random() * 100);
let cnt=0;
// let inp=prompt("enter a number");
Number.parseInt(inp);
while(inp!=num)
{
    cnt++;
    if(inp>num)
    {
        inp=prompt(`number is smaller than ,${inp}, try again`);
        Number.parseInt(inp);
    }
    else if(inp<num){
        inp=prompt(`number is larger than,${inp} ,try again`);
        Number.parseInt(inp);
    }
    
     
}
console.log( "Your score is ",100-cnt);