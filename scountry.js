fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json =>{
        var _scountry=document.getElementById("scountry")
        json.forEach(element => {
            var opt1=document.createElement("option")
            opt1.innerHTML=element.name.common
            _scountry.appendChild(opt1)
        });
      })
function test(){
    var _scountry=document.getElementById("scountry")
    var _scountryvalue=_scountry.value
    // var _karim=document.getElementById("karim")
    var _scity=document.getElementById("scity")
    // _karim.innerHTML=" "
    _scity.innerHTML=" "
     fetch('https://apiallcity.onrender.com')
      .then(response => response.json())
      .then(json =>{
        var _scity=document.getElementById("scity")
        for (let i = 0; i < json.length; i++) {
            // console.log(json[0].city)
        if(_scountryvalue==json[i].country){
        var opt2=document.createElement("option")
            opt2.innerHTML=json[i].city
            _scity.appendChild(opt2)
        }
    }
      })
}
