var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const movieURL =
  "https://api.themoviedb.org/3/movie/popular?api_key=6183623a470f943b579a800e1e8d5781&language=ko-KR&page=1&region=KR";

$.ajax({
  type: "GET",
  url: movieURL,
  dataType: "json",
  async: false, // 동기상태 => ajax는 기본적으로 비동기다.
  success: function (data) {
    console.log("전체 data", data);
    const results = data.results;
    console.log("영화 목록", results);

    for (const i in results) {
      console.log(results[i]);
    }

    let imgURL = "https://image.tmdb.org/t/p/w500";

    // 슬라이드 1
    $("#movie-img1").append(`<img src="${imgURL + results[0].poster_path}">`);
    $("#movie-title1").append(results[0].title);
    $("#movie-release1").append(" " + results[0].release_date);
    $("#movie-score1").append(" " + results[0].vote_average);
    $("#movie-score_count1").append(results[0].vote_count);
    $("#movie-overview1").append(" " + results[0].overview);
    // 슬라이드 2
    $("#movie-img2").append(`<img src="${imgURL + results[1].poster_path}">`);
    $("#movie-title2").append(results[1].title);
    $("#movie-release2").append(" " + results[1].release_date);
    $("#movie-score2").append(" " + results[1].vote_average);
    $("#movie-score_count2").append(results[1].vote_count);
    $("#movie-overview2").append(" " + results[1].overview);
    // 슬라이드 3
    $("#movie-img3").append(`<img src="${imgURL + results[2].poster_path}">`);
    $("#movie-title3").append(results[2].title);
    $("#movie-release3").append(" " + results[2].release_date);
    $("#movie-score3").append(" " + results[2].vote_average);
    $("#movie-score_count3").append(results[2].vote_count);
    $("#movie-overview3").append(" " + results[2].overview);
    // 슬라이드 4
    $("#movie-img4").append(`<img src="${imgURL + results[3].poster_path}">`);
    $("#movie-title4").append(results[3].title);
    $("#movie-release4").append(" " + results[3].release_date);
    $("#movie-score4").append(" " + results[3].vote_average);
    $("#movie-score_count4").append(results[3].vote_count);
    $("#movie-overview4").append(" " + results[3].overview);
    // 슬라이드 5
    $("#movie-img5").append(`<img src="${imgURL + results[4].poster_path}">`);
    $("#movie-title5").append(results[4].title);
    $("#movie-release5").append(" " + results[4].release_date);
    $("#movie-score5").append(" " + results[4].vote_average);
    $("#movie-score_count5").append(results[4].vote_count);
    $("#movie-overview5").append(" " + results[4].overview);
    // 슬라이드 6
    $("#movie-img6").append(`<img src="${imgURL + results[5].poster_path}">`);
    $("#movie-title6").append(results[5].title);
    $("#movie-release6").append(" " + results[5].release_date);
    $("#movie-score6").append(" " + results[5].vote_average);
    $("#movie-score_count6").append(results[5].vote_count);
    $("#movie-overview6").append(" " + results[5].overview);
    // 슬라이드 7
    $("#movie-img7").append(`<img src="${imgURL + results[6].poster_path}">`);
    $("#movie-title7").append(results[6].title);
    $("#movie-release7").append(" " + results[6].release_date);
    $("#movie-score7").append(" " + results[6].vote_average);
    $("#movie-score_count7").append(results[6].vote_count);
    $("#movie-overview7").append(" " + results[6].overview);
    // 슬라이드 8
    $("#movie-img8").append(`<img src="${imgURL + results[7].poster_path}">`);
    $("#movie-title8").append(results[7].title);
    $("#movie-release8").append(" " + results[7].release_date);
    $("#movie-score8").append(" " + results[7].vote_average);
    $("#movie-score_count8").append(results[7].vote_count);
    $("#movie-overview8").append(" " + results[7].overview);
    // 슬라이드 9
    $("#movie-img9").append(`<img src="${imgURL + results[8].poster_path}">`);
    $("#movie-title9").append(results[8].title);
    $("#movie-release9").append(" " + results[8].release_date);
    $("#movie-score9").append(" " + results[8].vote_average);
    $("#movie-score_count9").append(results[8].vote_count);
    $("#movie-overview9").append(" " + results[8].overview);
    // 슬라이드 10
    $("#movie-img10").append(`<img src="${imgURL + results[9].poster_path}">`);
    $("#movie-title10").append(results[9].title);
    $("#movie-release10").append(" " + results[9].release_date);
    $("#movie-score10").append(" " + results[9].vote_average);
    $("#movie-score_count10").append(results[9].vote_count);
    $("#movie-overview10").append(" " + results[9].overview);
    // 슬라이드 11
    $("#movie-img11").append(`<img src="${imgURL + results[10].poster_path}">`);
    $("#movie-title11").append(results[10].title);
    $("#movie-release11").append(" " + results[10].release_date);
    $("#movie-score11").append(" " + results[10].vote_average);
    $("#movie-score_count11").append(results[10].vote_count);
    $("#movie-overview11").append(" " + results[10].overview);
    // 슬라이드 12
    $("#movie-img12").append(`<img src="${imgURL + results[11].poster_path}">`);
    $("#movie-title12").append(results[11].title);
    $("#movie-release12").append(" " + results[11].release_date);
    $("#movie-score12").append(" " + results[11].vote_average);
    $("#movie-score_count12").append(results[11].vote_count);
    $("#movie-overview12").append(" " + results[11].overview);
    // 슬라이드 13
    $("#movie-img13").append(`<img src="${imgURL + results[12].poster_path}">`);
    $("#movie-title13").append(results[12].title);
    $("#movie-release13").append(" " + results[12].release_date);
    $("#movie-score13").append(" " + results[12].vote_average);
    $("#movie-score_count13").append(results[12].vote_count);
    $("#movie-overview13").append(" " + results[12].overview);
    // 슬라이드 14
    $("#movie-img14").append(`<img src="${imgURL + results[13].poster_path}">`);
    $("#movie-title14").append(results[13].title);
    $("#movie-release14").append(" " + results[13].release_date);
    $("#movie-score14").append(" " + results[13].vote_average);
    $("#movie-score_count14").append(results[13].vote_count);
    $("#movie-overview14").append(" " + results[13].overview);
    // 슬라이드 15
    $("#movie-img15").append(`<img src="${imgURL + results[14].poster_path}">`);
    $("#movie-title15").append(results[14].title);
    $("#movie-release15").append(" " + results[14].release_date);
    $("#movie-score15").append(" " + results[14].vote_average);
    $("#movie-score_count15").append(results[14].vote_count);
    $("#movie-overview15").append(" " + results[14].overview);
  },
  error: function (request, status, error) {
    console.log("code:" + request.status);
    console.log("message:" + request.responseText);
    console.log("error:" + error);
  },
});
