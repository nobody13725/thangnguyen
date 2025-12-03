function calculatePrice(product) {
    const DISCOUNT_BY_TYPE = {
        electronics: 0.10,
        clothing: 0.20,
        food: 0.05
    };

    function getTypeDiscount(type) {
        return DISCOUNT_BY_TYPE[type] || 0;
    }

    let price = product.price;

    price -= price * getTypeDiscount(product.type);

    if (product.quantity > 10) {
        price -= 5;
    }

    if (product.isMember) {
        price -= 10;
    }

    return price;
}
