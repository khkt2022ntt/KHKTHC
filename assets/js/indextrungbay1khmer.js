var items = [
    {
      type: "text",
      title: "រួប ព្រះពោធិសត្វ(អវលោកិតេស្វរៈ)",
      picturePath: "assets/images/tb1/tuongthanvishnu.jpg",
      description: "<b> វត្ថុធាតុ៖ </b> ថ្មភក់ (វត្ថុបុរាណធើ្វឡើងវិញ)",
      position: {
        left: 130,
        top: 300
      }
    },
    {
      type: "text",
      title: "ព្រះវិស្ណុ",
      picturePath: "assets/images/tb1/tuongthanvishnu.jpg",
      description: "<b> វត្ថុធាតុ៖ </b> ថ្មភក់ <b> យុគសម័យ៖ </b> សតវត្សរ៍ទី៨  <b> ប្រភព៖ </b> ភូមិជំនិក ឃុំឡីវងីបអាញ់ ស្រុកត្រាគូ ខេត្តត្រាវិញ",
      position: {
        left: 370,
        top: 280
      }
    },
    {
      type: "text",
      title: "ព្រះវិស្ណុ",
      picturePath: "assets/images/tb1/vishnu.png",
      description: "<b> វត្ថុធាតុ៖ </b> ថ្មភក់ <b> យុគសម័យ៖ </b> សតវត្សរ៍ទី៨  <b> ប្រភព៖ </b> ភូមិជំនិក ឃុំឡីវងីបអាញ់ ស្រុកត្រាគូ ខេត្តត្រាវិញ",
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
