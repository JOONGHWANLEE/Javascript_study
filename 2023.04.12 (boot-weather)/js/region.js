// 1. 전체 url 가져오기
const currentURL = location.href;
console.log(currentURL);

// 2. 쿼리 스트링 파라메터 가져오기
const urlObj = new URL(currentURL);

// 파라메터에 대한 정보가 들어있다.
const params = urlObj.searchParams;
console.log(params);

// 파라메터의 값을 구한다. params.get("변수명");
const q = params.get("q");
const krcity = params.get("krcity");

console.log(q, krcity);

// 3. ajax 이용해서 전체 날씨 정보 얻어오기
function getCityWeather(q) {
  var temp = {};
  var urlAPI =
    "https://api.openweathermap.org/data/2.5/weather?appid=4622ee8d7b7c919a8cbf6728f84e524d&units=metric&lang=kr";
  urlAPI += "&q=" + q;
  var humidity = {};

  $.ajax({
    type: "GET",
    url: urlAPI,
    dataType: "json",
    async: false, // 동기상태 => ajax는 기본적으로 비동기다.
    success: function (data) {
      console.log(data);
      const celsius = data.main.temp;
      const icon = data.weather[0].icon;
      const humidity = data.main.humidity;
      const windspeed = data.wind.speed;
      const description = data.weather[0].description;
      const realfeel = data.main.feels_like;
      const cloud = data.clouds.all;

      temp.celsius = celsius.toFixed(0);
      temp.icon = icon;
      // $(".region-weather").text(`${celsius.toFixed(0)}℃`);
      temp.humidity = humidity.toFixed(0);
      temp.windspeed = windspeed.toFixed(2);
      temp.description = description;
      temp.realfeel = realfeel;
      temp.clouds = cloud.toFixed(0);
    },
    error: function (request, status, error) {
      console.log("code:" + request.status);
      console.log("message:" + request.responseText);
      console.log("error:" + error);
    },
  });

  return temp;
}

// 4. 데이터 바인딩 작업
$(".region-title").text(`${krcity} 상세날씨`);

let temp = getCityWeather(q);

for (const city of q) {
  // 각 도시의 날씨를 구한다.
  let temp = getCityWeather(q);
  console.log(q, temp);

  // 온도
  // $(".city > .celsius")
  // $("." + q + " > .celsius").text(`${temp.celsius}℃`);
  $(".celsius").text(`현재 날씨 : ${temp.celsius}℃`);

  // 이미지
  // $(".city > .icon > img")
  var iconURL = "https:openweathermap.org/img/wn/" + temp.icon + ".png";

  // $("." + q + "> .icon > img").attr("src", iconURL);
  $(".q > img").attr("src", iconURL);

  // 습도
  $(".humidity").text(`${temp.humidity} %`);

  // 풍속
  $(".windspeed").text(`${temp.windspeed}`);

  // 기상
  $(".weatherdescription").text(`${temp.description}`);

  // 체감온도
  $(".weatherrealfeel").text(`${temp.realfeel}℃`);

  // 구름
  $(".weatherclouds").text(`${temp.clouds}%`);
}
