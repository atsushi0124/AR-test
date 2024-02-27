let video = document.getElementById("my-video");
let text = document.getElementById("text");

video.addEventListener("loadeddata", function () {
  console.log("loadeddata発生");
});

AFRAME.registerComponent("link", {
  init: function () {
    let touchDownHandler = function (e) {
      const url = "https://koo-inc.jp/";
      window.open(url, "_blank");
      console.log("クリックされました");
    };
    window.addEventListener("mousedown", touchDownHandler);
    window.addEventListener("touchstart", touchDownHandler);
  },
});

AFRAME.registerComponent("marker", {
  init: function () {
    const marker = this.el;

    marker.addEventListener("markerFound", function () {
      console.log("マーかーが見つかりました");
      video.play();
    });

    marker.addEventListener("markerLost", function () {
      console.log("マーカーが見失われました");
      video.pause();
    });
  },
});
