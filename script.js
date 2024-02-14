const dice1 = document.querySelector('.one');
const dice2 = document.querySelector('.two');
const rollBtn = document.querySelector('.roll');
let balance = document.getElementById("balance").innerHTML;
let current;
balance = Number(balance);
const bet = document.getElementById("bet");
const reset = document.getElementById("reset");
const result = document.getElementById("result");
const errormsg = document.getElementById("errormsg");
reset.onclick = function()
{
    document.getElementById("balance").innerHTML=10000;
    balance=10000;
}
bet.onmouseover = function(){
    result.innerHTML="Place Your Bet !!!"
}
bet.onclick = function()
{
    errormsg.innerHTML="Bet amount should be greater than 0 and less than available balance";
    document.getElementById("error").style.display = "none";
    current = Number(document.getElementById("current").value);
    let selection = document.getElementsByName("check");
    if((selection[0].checked==false && selection[1].checked==false && selection[2].checked==false))
    {
        errormsg.innerHTML="Select an option";
        document.getElementById("error").style.display = "flex";
    }       
    else if(current>balance || current<=0)
    {
        document.getElementById("error").style.display = "flex";
    }
    else{
        let d1 = randomDice1();
        let d2 = randomDice2();
        setTimeout(() => {
        let sel = 0;
        if(selection[1].checked)
            sel = 1;
        else if(selection[2].checked)
        sel = 2;
        if(current<=balance)
        {
            let curr = d1+d2;
            if(curr<7 && sel == 2 || curr==7 && sel==1 || curr>7 && sel==0)
            {
                balance +=current;
                if(curr==7 && sel==1)
                    balance+= current;
                result.innerHTML="You Won !!"
            }
            else
            {
                balance -=current;
                result.innerHTML="You Lose"
            }
            balance.innerHTML=balance;
        }
        document.getElementById("balance").innerHTML=balance;
        console.log(sel);
        }, 5000);
    }
}

const randomDice1 = () => {

    const random1 = Math.floor(Math.random() * 6 + 1);
        rollDice1(random1);
        return random1;
}
const randomDice2 = () => {

  const random2 = Math.floor(Math.random() * 6 + 1);
    rollDice2(random2);
    return random2;
}
const rollDice1 = random1 => {

    dice1.style.animation = 'rolling 4s';

    setTimeout(() => {

        switch (random1) {
            case 1:
                dice1.style.transform = 'rotateX(0deg) rotateY(0deg)';
                break;

            case 6:
                dice1.style.transform = 'rotateX(180deg) rotateY(0deg)';
                break;

            case 2:
                dice1.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                break;

            case 5:
                dice1.style.transform = 'rotateX(90deg) rotateY(0deg)';
                break;

            case 3:
                dice1.style.transform = 'rotateX(0deg) rotateY(90deg)';
                break;

            case 4:
                dice1.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                break;

            default:
                break;
        }

        dice1.style.animation = 'none';
    }, 4050);

}
const rollDice2 = random2 => {

  dice2.style.animation = 'rolling 4s';

  setTimeout(() => {

      switch (random2) {
          case 1:
              dice2.style.transform = 'rotateX(0deg) rotateY(0deg)';
              break;

          case 6:
              dice2.style.transform = 'rotateX(180deg) rotateY(0deg)';
              break;

          case 2:
              dice2.style.transform = 'rotateX(-90deg) rotateY(0deg)';
              break;

          case 5:
              dice2.style.transform = 'rotateX(90deg) rotateY(0deg)';
              break;

          case 3:
              dice2.style.transform = 'rotateX(0deg) rotateY(90deg)';
              break;

          case 4:
              dice2.style.transform = 'rotateX(0deg) rotateY(-90deg)';
              break;

          default:
              break;
      }
      dice2.style.animation = 'none';
  }, 4050);
}