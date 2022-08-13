"use strict";

let ind = JSON.parse(localStorage.getItem("index"));
// console.log(ind, iceItemsData[ind]);


//============= 把資料放在網頁上 =============//
let setImg = () => {
    let { id, name, img, description, price} = iceItemsData[ind];
    let obj = document.querySelector(".container");
    obj.innerHTML = `
                <div class="left">
                    <img src="../${img}" alt="" width="300px">
                </div>

                <div class="right">
                    <h1>${name}</h1>
                    <p>NT$ ${price}</p>
                    <article>
                        <p>${description}</p>
                    </article>

                    <form action="#" method="#">
                        <div class="item_block">
                            <p>購買數量:</p>
                            <div class="shop_block">
                                <i class="fa-solid fa-minus"></i>
                                <input type="text" value="1" min="1">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                        <div class="item_block">
                            <a href="../shop.html">
                                <button type="button">加入購物車</button>
                            </a>
                        </div>
                    </form>
                </div>
                `;
}

setImg();