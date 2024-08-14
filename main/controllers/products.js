const products = [];

const getAddProductPage = (req, res, next) => {
	res.render("add-product", {
		pageTitle: "Add Product",
		path: "/admin/add-product",
	});
};

const postNewProduct = (req, res, next) => {
	products.push({ title: req.body.title });
	res.redirect("/");
};

const getAllProducts = (req, res, next) => {
  res.render('shop', { prods: products, pageTitle: "My Shop", path: '/'})
}

module.exports = {
	getAddProductPage,
  postNewProduct,
  products,
  getAllProduct
};
