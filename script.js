
const btn=document.getElementById("search-button");
const input=document.getElementById("city-input");
const cityName=document.getElementById("city-Name")
const cityTime=document.getElementById("city-Time")
const cityTem=document.getElementById("city-Tem")

async function getData(cityname){
   const promise=await fetch(
        `http://api.weatherapi.com/v1/current.json?key=e4ac3c2bc2aa4bd4bfe143104230306 &q=${cityname}&aqi=yes`
    );
    return  await promise.json();
    
}

btn.addEventListener('click', async()=>{
     const value=input.value;
     const result= await getData(value);
     console.log(result);
     cityName.innerText=`${result.location.name},${result.location.region},${result.location.country}`
     cityTime.innerText=result.location.localtime;//backtick and $sign used when multiple data show
     cityTem.innerText=result.current.temp_c;
});

//http://api.weatherapi.com/v1/current.json?key=e4ac3c2bc2aa4bd4bfe143104230306 &q=London&aqi=yes
