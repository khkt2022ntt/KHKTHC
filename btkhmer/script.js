var slideIndex = 1;
        showSlides(slideIndex);

        // Next/previous controls
        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        // Thumbnail image controls
        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

        function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        }
        
        // Xử lý sự kiện khi click vào nút Previous và Next
        prevBtn.addEventListener("click", () => {
        plusSlides(-1);
        });
        
        nextBtn.addEventListener("click", () => {
        plusSlides(1);
        });
        
        // Xử lý sự kiện khi click vào các nút tròn ở phần dưới slideshow
        for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => {
        currentSlide(i + 1);
        });
        };
        function openPopup() {
            // Mở cửa sổ pop-up
            window.open("index.html", "popup", "width=auto,height=auto");
          }
// Lấy thẻ nút
var btn = document.getElementById("myBtn");

// Lấy thẻ cửa sổ pop-up
var modal = document.getElementById("myModal");

// Lấy thẻ span đóng cửa sổ pop-up
var span = document.getElementsByClassName("close")[0];

// Khi nhấp vào nút, hiển thị cửa sổ pop-up
btn.onclick = function() {
  modal.style.display = "block";
}

// Khi nhấp vào nút đóng cửa sổ pop-up, ẩn cửa sổ đó đi
span.onclick = function() {
  modal.style.display = "none";
}

// Khi nhấp vào bất kỳ đâu bên ngoài cửa sổ pop-up, ẩn cửa sổ đó đi
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showPopup(data) {
    console.log("data: " + data.getAttribute('data-id'));
    document.getElementById('tour3d-popup-wrapper').classList.add('show');

}

function hidePopup(data) {
    document.getElementById("tour3d-popup-wrapper").classList.remove('show');
}
