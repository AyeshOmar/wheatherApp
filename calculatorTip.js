


let cpt=0;
function accrementation(){
cpt+=1
const hetDivNbr=document.getElementById('nbr')
hetDivNbr.innerText=cpt
total()
}



function deccrementation(){
	
	if(cpt)
cpt-=1

const hetDivNbr=document.getElementById('nbr')
hetDivNbr.innerText=cpt
total()
}


function total(){
const billDiv=document.getElementById('billInput')
let bill=Number(billDiv.value)
const TipDiv=document.getElementById('TipInput')
let Tip=Number(TipDiv.value)/100

let total=bill + (bill*Tip)
const hetDivNbr=document.getElementById('nbr')
let nbrPeople=Number(hetDivNbr.innerText)
let totalPerPerson=total / nbrPeople

const TotalDiv=document.getElementById('totalPerPersone')
TotalDiv.innerText= `$${totalPerPerson.toFixed(2).toLocaleString('en-US')}`




}

//clear page ^^Refrech
function refrech(){

	document. location. reload() 
}






