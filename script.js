function game(){
    window.alert("Lets play Rock, PAPER ,SCISSORS");
    for(let i=1 ; i<6;i++)
    {
        window.alert(`Round ${i} of round 5`);
        let p_choice=parseInt(prompt("Enter PLayer Choice :"));
        let c_choice=getComputerChoice();
        rps(p_choice,c_choice);
    }
    if(x_score > y_score) {
        window.alert(`The winner is PLayer. `)
    }
    else{
        window.alert("The winner is computer.")
    }
   
}


const available_choices = ["rock","paper","scissors"]
function getComputerChoice() {
    const available_choices = ["rock","paper","scissors"]
    max=2
    min=0
    rand=Maath.floor(Math.random()*(max-min)+min)
    return available_choices[rand]
}

let x_score = 0, y_score =0;
function rps(playerSelection,computerSelection) {
    const available_choices = ["rock","paper","scissors"]
    window.confirm(`Your choice ${playerSelection}, computer choice ${computerSelection}`);
    x=playerSelection.toLowerCase();
    y=computerSelection.toLowerCase();
    if (x==y){
        console.log("Tied");
        x_score+=1;
        y_score+=1;
    }
    else if (x==available_choices[1])
    {
        if (y == available_choices[2])
        {
            y_score+=1;
        }
        else{
            x_score+=1;
        }
    }
    else if(x==available_choices[2])
    {
        if (y == available_choices[1])
        {
            x_score+=1;
        }
        else {
            y_score+=1;
        }
    }
    else if(x==available_choices[3])
    {
        if (y==available_choices[2])
        {
            x_score+=1;
        }
        else{
            y_score+=1;
        }
    }
    else{
        console.log("Wrong Choice ");
    }
    return
}
