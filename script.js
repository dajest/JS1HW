let url = 'https://635d0154cb6cf98e56aa96bd.mockapi.io/productCards'
let wrapper  = document.querySelector(".cards-list");
let producerList = ["TOSHIBA", "APPLE", "HP", "ACER", "ASUS", "LENOVO", "DELL"];

function render(list, parent) {
  parent.innerHTML = '';

}


























// let x;

async function getx() {
  let res = await fetch('https://635d0154cb6cf98e56aa96bd.mockapi.io/productCards')
  let dataResp = await res.json()
  let data = dataResp[0].data
  console.log(dataResp);

}

getx();

