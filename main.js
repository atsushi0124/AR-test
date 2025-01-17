let video = document.getElementById("my-video");
let text = document.getElementById("text");

video.addEventListener("loadeddata", function () {
  const load = document.getElementById("load");
  load.style.display = "none";
  console.log("loadeddata発生");
});



// AFRAME.registerComponent("customLink", {
//   // "link"から"customLink"に名前を変更
//   init: function () {
//     let touchDownHandler = function (e) {
//       const url = "https://koo-inc.jp/";
//       window.open(url, "_blank");
//       console.log("クリックされました");
//     };
//     window.addEventListener("mousedown", touchDownHandler);
//     window.addEventListener("touchstart", touchDownHandler);
//   },
// });

AFRAME.registerComponent("click-link", {
  schema: {
    url: {type: "string"},
  },
  init: function () {
    let data = this.data;
    this.el.addEventListener("click", () => {
      console.log("クリックされました。");
      window.open(data.url, "_blank");
    });
  },
});

AFRAME.registerComponent("marker", {
  init: function () {
    const marker = this.el;

    marker.addEventListener("markerFound", function () {
      console.log("マーカーが見つかりました");
      video.play();
      if (video) {
        video.addEventListener("ended", function () {
          video.currentTime = 0;
        });
      } else {
        console.log("video要素が見つかりません。");
      }
    });

    marker.addEventListener("markerLost", function () {
      console.log("マーカーが見失われました");
      video.pause();
    });
  },
});


