var items = [
    {
      type: "text",
      title: "BUDDHA STATUE (AVALOKITESVARA)",
      picturePath: "assets/images/tb1/tuongthanvishnu.jpg",
      description: "<b> Material: </b> Sandstone (Restorated item)",
      position: {
        left: 130,
        top: 300
      }
    },
    {
      type: "text",
      title: "VISHNU STATUE",
      picturePath: "assets/images/tb1/tuongthanvishnu.jpg",
      description: "<b> Material: </b> Sandstone. <b> Dated: </b> 8th century.  <b> Origin: </b> Luu Cu II Hamlet, Luu Nghiep Anh Commune, Tra Cu District, Tra Vinh Province.",
      position: {
        left: 370,
        top: 280
      }
    },
    {
      type: "text",
      title: "VISHNU STATUE",
      picturePath: "assets/images/tb1/vishnu.png",
      description: "<b> Material: </b> Sandstone. <b> Dated: </b> 8th century.  <b> Origin: </b> Luu Cu II Hamlet, Luu Nghiep Anh Commune, Tra Cu District, Tra Vinh Province.",
      position: {
        left: 630,
        top: 280
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
