const game=['S','W','G'];
let userscore=0,computerscore=0;
let Total=0;
let mood=confirm("Do you wanna start the game");
if(mood)
{
    let inp=prompt("Enter 'G','S' or 'W' ");
    let random_val=Math.floor(Math.random()*3);
    Total++;
    console.log( game[random_val],inp);
    if(inp==game[random_val])
    {
        alert("Tie");
        Total--;
    }
    else if(inp=='W')
    {
        if(game[random_val]=='G')
        {
            userscore++;
            alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);

        }
        else if(game[random_val]=='S')
        {
            computerscore++;
            alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);
        }
    }
    else if(inp=='S')
    {
        if(game[random_val]=='G')
        {
            computerscore++;
            alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);

        }
        else if(game[random_val]=='W')
        {
            userscore++;
            alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);
        }
    }
    else if(inp=='G')
    {
        if(game[random_val]=='W')
        {
            userscore++;
            alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);

        }
        else if(game[random_val]=='S')
        {
            computerscore++;
            alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);
        }
    }
    else{
        alert("Enter a valid value");
        Total--;
    }

    let runagain=false;
    runagain=confirm("Do you want to play  again");
    while(runagain)
    {
         inp=prompt("Enter 'G','S' or 'W' ");
         random_val=Math.floor(Math.random()*3);
         Total++;
        if(inp==game[random_val])
        {
            Total--;
            alert(` That's a tie , Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);
        }
        else if(inp=='W')
        {
            if(game[random_val]=='G')
            {
                userscore++;
                alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);
    
            }
            else if(game[random_val]=='S')
            {
                computerscore++;
                alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);
            }
        }
        else if(inp=='S')
        {
            if(game[random_val]=='G')
            {
                computerscore++;
                alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);
    
            }
            else if(game[random_val]=='W')
            {
                userscore++;
                alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);
            }
        }
        else if(inp=='G')
        {
            if(game[random_val]=='W')
            {
                userscore++;
                alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);
    
            }
            else if(game[random_val]=='S')
            {
                computerscore++;
                alert(`Your current score is: ${userscore} and my current score is ${computerscore} and Total matches played till now = ${Total}`);
            }
        }
        else{
            alert("Enter a valid value");
            Total--;
        }
        runagain=confirm("Do you want to play  again");
    }
}

