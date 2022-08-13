let icecream = document.querySelector("#show_icecream .grid-container");
let cut_ice = document.querySelector("#show_ice .container .row");

let generateIce = () => {
    //============= 冰淇淋 =============//
    icecream.innerHTML = iceItemsData.slice(0, 9) //商品項目1~9
        .map((x, index) => {
            let { id, name, img } = x;
            let dir = parseInt(index / 3) == 1 ? 'left' : 'right'; //商品項目除3餘1的AOS動畫向左跑，其餘AOS動畫向右跑
            return `
            <div id=${id} class="grid_item" data-aos="zoom-in-${dir}" onclick = "saveImg(${index})">
                <p>${name}</p>
                <a href="product_details/product_details.html"> 
                    <img src="${img}" alt="">
                </a>
            </div>
            `;
        })
        .join(""); //去除逗號

    //============= 剉冰 =============//
    cut_ice.innerHTML = iceItemsData.slice(9) //商品項目9以後，不包括9
        .map((x, index) => {
            let { id, name, img } = x;
            return `
            <div id=${id} class="pic col-12 col-sm-6 col-md-4" onclick = "saveImg(${index + 9})">
                <p>${name}</p>
                <a href="product_details/product_details.html">
                    <img src="${img}" alt="">
                </a>
            </div>
            `;
        })
        .join("");

};

generateIce();

//============= 點擊圖片時，把陣列位置存到localstorage =============//
let saveImg = (e) => {
    localStorage.setItem("index", JSON.stringify(e));
};