const deleteProduct = (btn) => {
  //console.log(document.querySelector("[name=productId]").value);
  //console.log(btn.parentNode.querySelector("[name=productId]").value);
  const csrf = btn.getAttribute("data-csrf");
  const prodId = btn.getAttribute("data-product-id");
  console.log("csrf: ", csrf);
  console.log("prodId: ", prodId);

  fetch("/admin/product/" + prodId, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
