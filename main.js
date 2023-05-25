const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuBurger = document.querySelector('.menuBurger')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const menuShoppingCart = document.querySelector('.my-order')
const cardsContainer = document.querySelector('.cards-container')
const productList = []

productList.push({
    name: 'Nike Air',
    price: 3200,
    image: './images/principe-Nike-air-blancaynegra.jpg'
})
productList.push({
    name: 'Nike Just Do It',
    price: 3200,
    image: './images/principe-Nike-justdoit-xl.jpg'
})
productList.push({
    name: 'Nike Off-White',
    price: 3200,
    image: './images/principe-Nike-roja-basquet-xxl.jpg'
})

function renderProduct(arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImage = document.createElement('img')
        productImage.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
        const productPrice = document.createElement('p')
        productPrice.innerText = '$ ' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        productInfoDiv.append(productPrice, productName)
        productInfo.append(productInfoDiv)
    
        const productInfoFigure = document.createElement('figure')
        const productImageCarrito = document.createElement('img')
        productImageCarrito.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImageCarrito)
        productInfo.append(productInfoFigure)
    
        productCard.append(productImage, productInfo)
    
        cardsContainer.appendChild(productCard)
    }
} 

renderProduct(productList)


navEmail.addEventListener('click', toggleDesktopMenu)
menuBurger.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleShoppingCartMenu)


function toggleDesktopMenu() {
    if (!menuShoppingCart.classList.contains('inactive')) {
        menuShoppingCart.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    if (!menuShoppingCart.classList.contains('inactive')) {
        menuShoppingCart.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCartMenu() {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive')
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }

    menuShoppingCart.classList.toggle('inactive')
}