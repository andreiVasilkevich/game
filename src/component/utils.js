export const CartTotalPrice = items => items.reduce((acc, gam) => acc += gam.price, 0) 