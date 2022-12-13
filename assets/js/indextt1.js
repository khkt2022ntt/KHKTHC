var items = [
  {
    type: "text",
    title: "TƯỢNG QUAN THẾ ÂM BỒ TÁT (AVALOKITESVARA)",
    picturePath: "assets/images/tb1/tuongthanvishnu.jpg",
    description: "<b> Chất liệu: </b> Đá sa thạch (Hiện vật phục chế)",
    position: {
      left: 130,
      top: 300
    }
  },
  {
    type: "text",
    title: "TƯỢNG THẦN VISHNU",
    picturePath: "assets/images/tb1/tuongthanvishnu.png",
    description: "<b> Chất liệu: </b> Đá sa thạch. <b> Niên đại: </b> Thế kỷ 8.  <b> Nguồn gốc: </b> Ấp Lưu Cừ II, xã Lưu Nghiệp Anh, huyện Trà Cú, tỉnh Trà Vinh.",
    position: {
      left: 370,
      top: 280
    }
  },
  {
    type: "text",
    title: "TƯỢNG THẦN VISHNU",
    picturePath: "assets/images/tb1/vishnu.png",
    description: "<b> Chất liệu: </b> Đá sa thạch. <b> Niên đại: </b> Thế kỷ 8.  <b> Nguồn gốc: </b> Ấp Lưu Cừ II, xã Lưu Nghiệp Anh, huyện Trà Cú, tỉnh Trà Vinh.",
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