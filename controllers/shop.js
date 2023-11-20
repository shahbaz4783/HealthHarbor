import Item from '../models/Items.js';

export const getProducts = (req, res) => {
	Item.fetchAll((items) => {
		res.render('shop/products.ejs', {
			product: items,
			pageTitle: 'Shop - Health Harbour',
		});
	});
};

export const getCart = (req, res) => {
	res.render('shop/cart.ejs', {
		pageTitle: 'Your Cart'
	})
}
export const getOrders = (req, res) => {
	res.render('shop/orders.ejs', {
		pageTitle: 'Your Orders',
	});
};
export const getCheckout = (req, res) => {
	res.render('shop/checkout.ejs', {
		pageTitle: 'Your Orders',
	});
};
