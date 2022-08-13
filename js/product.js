let icecream = document.querySelector("#show_icecream .grid-container");
let cut_ice = document.querySelector("#show_ice .container .row");
let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateIce = () => {
    //============= 冰淇淋 =============//
    icecream.innerHTML = iceItemsData.slice(0, 9) //商品項目1~9
        .map((x, index) => {
            let { id, name, img } = x;
            let search = basket.find((x) => x.id === id) || [];
            let dir = parseInt(index / 3) == 1 ? 'left' : 'right'; //商品項目除3餘1的AOS動畫向左跑，其餘AOS動畫向右跑
            return `
            <div id=product-id-${id} class="grid_item" data-aos="zoom-in-${dir}">
                <p>${name}</p>
                <a href="product_details/product_details.html"> 
                    <img src="../material/${img}" alt="" onclick="saveImg(${id})">
                </a>
            </div>
            `;
        })
        .join(""); //去除逗號

    //============= 剉冰 =============//
    cut_ice.innerHTML = iceItemsData.slice(9) //商品項目9以後，不包括9
        .map((x) => {
            let { id, name, img } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
            <div id=product-id-${id} class="pic col-12 col-sm-6 col-md-4">
                <p>${name}</p>
                <a href="product_details/product_details.html">
                    <img src="../material/${img}" alt="" onclick="saveImg(${id})">
                </a>
            </div>
            `;
        })
        .join(""); //去除逗號
};

generateIce();

//============= 點擊圖片時，把資料存到localstorage =============//
let saveImg = (id) => {
    // alert(1);
    let selectedItem = id; //點擊加號時，取得每項物品的id
    let search = basket.find((x) => x.id === selectedItem.id); //點擊的商品數量等於每項物品的id

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};