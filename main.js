let video = document.getElementById("my-video");
let text = document.getElementById("text");

video.addEventListener("loadeddata", function () {
  console.log("loadeddata発生");
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

AFRAME.registerComponent("cursor-listener", {
  init: function () {
    this.el.addEventListener("click", function (evt) {
      window.open(data.url, "_blank");
      console.log("クリックされました");
    });
    this.el.addEventListener("click", function (evt) {
      console.log(evt.detail.intersection.point);
    });
  },
});
