function updateTime(){
  let stockholm = document.querySelector("#stockholm");
  let stockholmDate = stockholm.querySelector(".date");
  let stockholmTime = stockholm.querySelector(".time");

  stockholmDate.innerHTML = moment().format("MMMM Do, YYYY");
  stockholmTime.innerHTML = moment()
    .tz("Europe/Stockholm")
    .format("hh:mm:ss [<bold>]A[</bold>]");


  let tokyo = document.querySelector("#tokyo");
  let tokyoDate = tokyo.querySelector(".date");
  let tokyoTime = tokyo.querySelector(".time");

  tokyoDate.innerHTML = moment().format("MMMM Do, YYYY");
  tokyoTime.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<bold>]A[</bold>]");


  let newyork = document.querySelector("#newyork");
  let newyorkDate = newyork.querySelector(".date");
  let newyorkTime = newyork.querySelector(".time");

  newyorkDate.innerHTML = moment().format("MMMM Do, YYYY");
  newyorkTime.innerHTML = moment()
    .tz("America/New_York")
    .format("hh:mm:ss [<bold>]A[</bold>]");

 
  let iceland = document.querySelector("#iceland");
  let icelandDate = iceland.querySelector(".date");
  let icelandTime = iceland.querySelector(".time");

  icelandDate.innerHTML = moment().format("MMMM Do, YYYY");
  icelandTime.innerHTML = moment()
    .tz("Atlantic/Reykjavik")
    .format("hh:mm:ss [<bold>]A[</bold>]");
}

  updateTime();
  setInterval(updateTime, 1000);

  function updateCity(event){
    let timezone = event.target.value;
    if (timezone === "current"){
        timezone = moment.tz.guess();
    }
    let cityName = timezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(timezone);
    let changeCity = document.querySelector("#cities");
    changeCity.innerHTML = `<div class="city">
            <div><h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss ")}<bold>${cityTime.format("A")}</bold></div>
        </div>
        <a href="index.html" class="back">🔙</a>`;
  }

  let chooseCityHere = document.querySelector("#chooseCity");
  chooseCityHere. addEventListener("change", updateCity)


    
    
