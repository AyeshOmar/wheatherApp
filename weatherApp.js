


 const hetInputSearch =document.getElementById('Search')
const DivTitle =document.getElementById('titreCountryy')
const apiKey=`38421cc0f26681880fb7766c5d03668d`
const hetDIV1 =document.getElementById('div1')
const hetDIV2 =document.getElementById('div2')
const hetDIV3 =document.getElementById('div3')
const hetDIV4 =document.getElementById('div4')
	function data(){


	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${hetInputSearch.value}&appid=${apiKey}`)
	.then(response => response.json())
	.then( response => {

		console.log(response.main.temp)
   DivTitle.innerText=response.name
  hetDIV1.innerText=`${response.weather[0].description}`
  hetDIV2.innerText=`${response.main.temp}`
  hetDIV3.innerText=`${response.main.temp_min}`
  hetDIV4.innerText=`${response.main.temp_max}`
	


	})}
	
