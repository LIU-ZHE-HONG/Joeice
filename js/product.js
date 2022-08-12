let icecream = document.querySelector(".ice .grid-container");
let cut_ice = document.querySelector(".ice .container .row");
// let basket = JSON.parse(localStorage.getItem("data")) || [];

// (012) (345) (678)
//  right 
let generateIce = () => {
    icecream.innerHTML = iceItemsData.slice(0, 9)
        .map((x, index) => {
            let { id, name, img } = x;
            // let search = basket.find((x) => x.id === id) || [];
            let dir = parseInt(index / 3) == 1 ? 'left' : 'right';
            return `
            <div id=product-id-${id} class="grid_item" data-aos="zoom-in-${dir}">
                <p>${name}</p>
                <a href="product_details/product_details.html"> 
                    <img src=${img} alt="">
                </a>
            </div>
            `;
        })
        .join(""); //去除逗號

    // 剉冰
    cut_ice.innerHTML = iceItemsData.slice(9)
        .map((x) => {
            let { id, name, img } = x;
            // let search = basket.find((x) => x.id === id) || [];
            return `
            <div id=product-id-${id} class="pic col-12 col-sm-6 col-md-4">
                <p>${name}</p>
                <a href="product_details/product_details.html">
                    <img src=${img} alt="">
                </a>
            </div>
            `;
        })
        .join(""); //去除逗號
};

generateIce();