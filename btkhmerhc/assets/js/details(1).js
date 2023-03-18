var id = location.href.split("=")[1];

var wavesurfer = WaveSurfer.create({
    barWidth: 1,
    container: '#wavesurfer',
    cursorWidth: 0,
    dragSelection: true,
    height: 50,
    hideScrollbar: true,
    interact: true,
    normalize: true,
    waveColor: 'rgba(0,0,0,.35)',
    progressColor: 'rgba(0,0,0,.75)'
});

$('.player').on('click', '#play', function () {

    wavesurfer.playPause();
});


wavesurfer.on('pause', function () {
    $('.button__play-iconplay').fadeIn();
    $('.button__play-iconpause').fadeOut();
    $('.recordplayer').removeClass('play');
    $('.recordplayer__disc').removeClass('animate');
    $('.artist__image').removeClass('play');
});

wavesurfer.on('play', function () {
    $('.button__play-iconplay').fadeOut();
    $('.button__play-iconpause').fadeIn();
    $('.recordplayer').addClass('play');
    $('.recordplayer__disc').addClass('animate');
    $('.artist__image').addClass('play');
});



fetch('https://datatour.isys.vn/api/bao-tang-khmers/' + id + '?populate=avatar&populate=images&populate=binhluans&populate=audio')
    .then(response => response.json())
    .then(data => {

        document.getElementById("article-name").innerHTML = data.data.attributes.title || "Chưa có thông tin"
        document.getElementById("article-material").innerHTML = data.data.attributes.material || "Chưa có thông tin"
        document.getElementById("article-size").innerHTML = data.data.attributes.size || "Chưa có thông tin"
        document.getElementById("article-chronology").innerHTML = data.data.attributes.chronology || "Chưa có thông tin"
        document.getElementById("article-place").innerHTML = data.data.attributes.place || "Chưa có thông tin"
        if (data.data.attributes.link3d) document.getElementById("link_tour_3d").src = data.data.attributes.link3d

        if (data.data.attributes.audio.data) {
            wavesurfer.load("https://datatour.isys.vn" + data.data.attributes.audio.data.attributes.url);
            wavesurfer.on('ready', function () {
                wavesurfer.playPause();
            });
        }


        document.getElementById("article-description").innerHTML = (data.data.attributes.description || "").replace(/\n/g, "<br />")

        //Slide image
        var html_gallery = "";
        if (data.data.attributes.images.data == null) {


        }
        else {
            for (let i = 0; i < data.data.attributes.images.data.length; i++) {

                html_gallery += ` 
                <div class="swiper-slide">
                <div class="slider__image"><img src="https://datatour.isys.vn`+ data.data.attributes.images.data[i].attributes.url + `"
                        alt="" /></div>
            </div>`

            }

            document.getElementById("images-gallery-thumb").innerHTML = html_gallery + html_gallery;
            document.getElementById("images-gallery").innerHTML = html_gallery + html_gallery;
            slideGallery();
        }



        var html_detail = "";
        // Comments

        // var html_comment = "";
        // for (let i = 0; i < data.data.attributes.binhluans.data.length; i++) {
        //     html_comment += ` 
        //     <div class="comments">
        //     <div class="row">
        //         <div class="col-md-6 col-12">
        //             <span class="comment-avatar" style="background-color: #`+ setBg() + `" >` + data.data.attributes.binhluans.data[i].attributes.name.split("")[0] + `</span>
        //             <span class="comment-name">`+ data.data.attributes.binhluans.data[i].attributes.name + `</span>
        //         </div>
        //         <div class="col-md-6 col-12">
        //             <div class="rating-star">`+ ratingStar(parseInt(data.data.attributes.binhluans.data[i].attributes.rating)) + `
        //             </div>
        //         </div>
        //     </div>
        //     <div class="comment-detail">`
        //         + data.data.attributes.binhluans.data[i].attributes.detail.replace(/\n/g, "<br />") +
        //         `</div>
        // </div>
        // <hr>`
        // }

        // document.getElementById("comments").innerHTML = html_comment;

    }
    );


fetch('https://datatour.isys.vn/api/bao-tang-khmers?populate=avatar&filters[isobject][$eq]%20=%20true')
    .then(response => response.json())
    .then(data => {
        var html_article_slide = "";
        for (let i = 0; i < data.data.length; i++) {
            html_article_slide += `<div class="swiper-slide"><a href="detail.html?id=` + data.data[i].id + `"> <img width="100%" src="https://datatour.isys.vn` + data.data[i].attributes.avatar.data.attributes.url + `"><p class="article-name-slider" style="">
            `+ data.data[i].attributes.title + `</p>
                <p style="font-weight: light; color: #666666; font-size: 15px; margin-top: 10px">Chất liệu: 
            `+ (data.data[i].attributes.material || "Chưa có thông tin") + `</p>
                <p  style="font-weight: light; color: #666666; font-size: 15px; margin-top: 10px">Niên đại: 
            `+ (data.data[i].attributes.chronology || "Chưa có thông tin") + `</p></a> </div>`
        }
        document.getElementById("article-slider").innerHTML = html_article_slide;
        sliderArticle();
    }
    );

function setBg() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor.length == 5) {
        randomColor = randomColor + "0"
    }
    return randomColor;
}

function ratingStar(star) {
    var stars = ""
    for (let i = 0; i < star; i++) {
        stars += `<img src="assets/img/icon/star.svg">`
    }
    for (let i = 0; i < 5 - star; i++) {
        stars += `<img src="assets/img/icon/nostar.svg" width="30px">`
    }
    return stars;
}
//Slide image
 var swiper = 
     new Swiper('.swiper-container',{
       slidesPerView: '1',
       spaceBetween: 0,
       autoplay: false,
       effect: 'coverflow',
       grabCursor: true,
       centeredSlides: true,
       slidesPerView: 'auto',
       coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows : true,
       },
       pagination: {
         el: '.swiper-pagination',
       },
     }
    );
//Slide image 1
function slideGallery() {
    const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev'
        },
        freeMode: true,
        breakpoints: {
            0: {
                direction: 'horizontal',
            },
            768: {
                direction: 'vertical',
            }
        }
    });

    const sliderImages = new Swiper('.slider__images .swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 32,
        mousewheel: true,
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev'
        },
        grabCursor: true,
        thumbs: {
            swiper: sliderThumbs
        },
        breakpoints: {
            0: {
                direction: 'horizontal',
            },
            768: {
                direction: 'vertical',
            }
        }
    });
}

//Show article 3D

function showPopup(data) {
    console.log("data: " + data.getAttribute('data-id'));
    document.getElementById('tour3d-popup-wrapper').classList.add('show');

}

function hidePopup(data) {
    document.getElementById("tour3d-popup-wrapper").classList.remove('show');
}

//Show form comments

function writeComments() {
    document.getElementById('writing-comment-popup-wrapper').classList.add('show');
}

function hideWriteComments() {
    document.getElementById("writing-comment-popup-wrapper").classList.remove('show');
}

function postComments() {
    fetch('https://datatour.isys.vn/api/binhluans?populate=bao_tang_ho_chi_minh', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "data": {
                "name": $("#comments-name").val(),
                "detail": $("#comments-content").val(),
                "rating": $('input[name=rating]:checked').val(),
                "email": $("#comments-email").val(),
                "bao_tang_ho_chi_minh": id
            }
        }),
    })
        .then(response => {
            showSuccess();
            hideWriteComments()
        })
        .catch((error) => {
            showDoNotSuccess();
            console.error('Error:', error);
        });
}

$("#contact").submit(function (event) {
    event.preventDefault();
    postComments()
});

//Show alert

function showSuccess() {
    document.getElementById('send-comment-success').classList.add('show-alert');
    setTimeout(() => document.getElementById("send-comment-success").classList.remove('show-alert'), 2000)
}
function showDoNotSuccess() {
    document.getElementById('send-comment-danger').classList.add('show-alert');
    setTimeout(() => document.getElementById("send-comment-danger").classList.remove('show-alert'), 2000)
}

function sliderArticle() {

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}



