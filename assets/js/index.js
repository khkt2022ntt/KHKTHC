var items = [
    {
      type: "text",
      title: "TƯỢNG PHẬT THÍCH CA",
      picturePath: "assets/images/tuong_phat_thich_ca_giua.png",
      description: "diễn tả gì ở đây",
      Audio: "audio/lehoi.mp3",
      position: {
        left: 300,
        top: 450
      }
    },
  ];
  
  var options = {
    allowHtml: true,
    shareBox: false
  };
  
  $(document).ready(function() {
    $("#my-interactive-image").interactiveImage(items, options);
  });