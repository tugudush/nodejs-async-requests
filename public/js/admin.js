const deleteProduct = (btn) => {
  //console.log(document.querySelector("[name=productId]").value);
  //console.log(btn.parentNode.querySelector("[name=productId]").value);
  const productId = btn.getAttribute('data-product-id');
  console.log(productId);
};
