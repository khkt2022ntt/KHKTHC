fetch('https://datatour.isys.vn/api/bao-tang-khmers?populate=avatar&filters[isobject][$eq]%20=%20true')
    .then(response => response.json())
    .then(data => {
        var html = "";
        console.log((data.data[0].attributes.avatar.data.attributes.url))
        for (let i = 0; i < data.data.length; i++) {
            html += ` <div class="item">
            <a href="detail.html?id=`+ data.data[i].id + `">
            <img
                src="https://datatour.isys.vn`+ (data.data[i].attributes.avatar.data.attributes.url || "") + `">
                <p style="font-family: Times New Roman; font-size: 32px; font-style: italic; font-weight:500; color: #000000; margin-top: 25px">
            `+ data.data[i].attributes.title + `</p>
            <p style="color: #666666; font-size: 15px; margin-top: 20px; ">
                <span style="font-weight: bold; color: #4d4d4d; ">Chất liệu: 
            </span> <span style="font-weight: light;">
            `+ (data.data[i].attributes.material || "") + `</span></p>
            <br>
            <p style="color: #666666; font-size: 15px; margin-top: 10px;">
                <span  style="font-weight: bold; color: #4d4d4d">Niên đại: 
            </span>
            <span  style="font-weight: light;">
            `+ (data.data[i].attributes.chronology || "") + `</span>
            </p>
            </a>
        </div>`
        }
        document.getElementById("masonry").innerHTML = html;
    }
    );