const ProductItemList = [];
let url;
for (let i = 1; i <= 25; i++) {
  if (i < 10) {
    ProductItemList.push(`./Image/Product/img-0${i}.png`);
  } else ProductItemList.push(`./Image/Product/img-${i}.png`);
}

export default ProductItemList;
