
let DivnamePlayer1=document.getElementById('DivNamePlayer1')

let DivnamePlayer2=document.getElementById('DivNamePlayer2')
let p1AttackBtn=document.getElementById('P1Attack')
let p2AttackBtn = document.getElementById('P2Attack')
let p1Heal = document.getElementById('P1Health')
let p2Heal = document.getElementById('P2Health')
let DivScore1 = document.getElementById('score1')
let DivScore2 = document.getElementById('score2')
let DivResultWinner = document.getElementById('result')
let btnReset = document.getElementById('BtnReset')

let simulateBtn=document.getElementById('playy')


class player{

constructor(name,health,attackDamage){ 
this.name=name
this.health=health
this.attackDamage=attackDamage
}

getName(){
	return this.name
}

GetHealth(){
	return this.health
}


 strike() {

let damageRes=Math.floor(Math.random() * 10)
 let res=this.health-damageRes

this.health=res

return this.health

}


 strikeSimulate() {

let damageRes=Math.floor(Math.random() * 120)
 let res=this.health-damageRes

this.health=res

return this.health

}

 heealthSimulate() {
let PlusHealth=Math.floor(Math.random() * 100)
let reso =this.health+PlusHealth
console.log(reso)   

this.health=reso
console.log("hedhi" + this.health)
return this.health
}




}




class playGame {


keyboard(player){
	document.addEventListener('keydown',function(e){
if(e.key=="q"){
	console.log("you pressed q ")
	document.getElementById('fastpunch').play()
	DivScore2.innerText=p1.strike()
	this.getWinner(p1,p2)
	
}else if(e.key=="p"){
	console.log("you pressed p ")
	document.getElementById('punch').play()
	DivScore1.innerText=p2.strike()
	this.getWinner(p1,p2)
	
}else if(e.key=="a"){
	console.log("you pressed a ")
	document.getElementById('fastheal').play()
	DivScore1.innerText=p1.heealth()
	

}else if(e.key=="l"){

document.getElementById('quick').play()
DivScore2.innerText=p2.heealth()


}


	})
}

getWinner(p1,p2){
if(p1.health<=0){
DivResultWinner.innerText=`${p1.getName()} WINNER !!`
 document.getElementById('victory').play()

setTimeout( () => {
this.reset()
} , 3000 )



}else if(p2.health<=0){
DivResultWinner.innerText=`${p2.getName()} WINNER !!`
 document.getElementById('victory').play()
setTimeout( () => {
this.reset()
} , 3000 )
}
}
reset() {
   document. location. reload() 
   
  }


play(player){
	
DivnamePlayer1.innerText=p1.getName()
DivnamePlayer2.innerText=p2.getName()

this.keyboard(p1,p2)


// button attack 1
p1AttackBtn.onclick =()=> {

document.getElementById('fastpunch').play()
DivScore2.innerText=p1.strike()
console.log(p2.getName() +""+ p1.health)
this.getWinner(p1,p2)
}


// button atack 2
p2AttackBtn.onclick =()=> {

	document.getElementById('punch').play()
DivScore1.innerText=p2.strike()
console.log(p1.getName() +""+p2.health)
this.getWinner(p1,p2)
}


// button heal1
p1Heal.onclick =()=> {
document.getElementById('fastheal').play()

DivScore1.innerText=player.heealth()

}


// button heal2
p2Heal.onclick =()=> {

document.getElementById('quick').play()
DivScore2.innerText=player.heealth()

}

}

simulate(){

      DivScore2.innerText=p1.strikeSimulate(p1,p2)
      this.getWinner(p1,p2)
       DivScore1.innerText=p2.strikeSimulate(p2,p1);
      this.getWinner(p2,p1)
      DivScore2.innerText=p2.heealth(p2)

    DivScore1.innerText=p1.heealth(p1)
   
this.getWinner(p1,p2)
}

}

let player1 = new player("omar" ,100,10)
let player2 = new player("nour" ,100,10)

const game1= new playGame()
let p1=player1
let p2=player2
game1.play(p1,p2)
btnReset.onclick =()=>game1.reset()
simulateBtn.onclick =()=>game1.simulate()


