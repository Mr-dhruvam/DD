const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/Brown/1.jpg",
      price: 74,
      cat: "Brown Diamond",
      
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver 2",
      imgg: "/Diamond/white/2.png",
      price: 74,
      cat: "White Diamond",
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/Brown/3.jpg",
      price: 74,
      cat: "Brown Diamond",
      
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver 2",
      imgg: "/Diamond/white/4.jpg",
      price: 74,
      cat: "White Diamond",
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/fancy/5.jpg",
      price: 74,
      cat: "Fency Diamond",
      
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver 2",
      imgg: "/Diamond/white/6.jpg",
      price: 74,
      cat: "White Diamond",
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/brown/7.jpg",
      price: 74,
      cat: "Brown Diamond",
      
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver 2",
      imgg: "/Diamond/white/8.jpg",
      price: 74,
      cat: "White Diamond",
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/yellow/9.jpg",
      price: 74,
      cat: "Yellow Diamond",
      
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver 2",
      imgg: "/Diamond/yellow/10.jpg",
      price: 74,
      cat: "Yellow Diamond",
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/fancy/11.jpg",
      price: 74,
      cat: "Fency Diamond",
      
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver 2",
      imgg: "/Diamond/white/12.jpg",
      price: 74,
      cat: "White Diamond",
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/white/13.jpg",
      price: 74,
      cat: "White Diamond",
      
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/yellow/15.jpg",
      price: 74,
      cat: "Yellow Diamond",
      
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver 2",
      imgg: "/Diamond/yellow/16.jpg",
      price: 74,
      cat: "Yellow Diamond",
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/fancy/17.jpg",
      price: 74,
      cat: "Fency Diamond",
      
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver 2",
      imgg: "/Diamond/white/18.png",
      price: 74,
      cat: "White Diamond",
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/brown/19.jpg",
      price: 74,
      cat: "Brown Diamond",
      
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver 2",
      imgg: "/Diamond/white/20.jpg",
      price: 74,
      cat: "White Diamond",
    },
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      imgg: "/Diamond/fancy/21.jpg",
      price: 74,
      cat: "Fency Diamond",
    },
  ];


const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");


const displayProducts = (filteredProduct) =>{
    productsContainer.innerHTML = filteredProduct.map((product) =>
       `
       <div class="product">
        <img class="imggs" src=${product.imgg} alt=""/>
        <span class="name">${product.name}</span>
        <span class="priceText">$${product.price}</span>
      </div>  
        `
    ).join("");
}

displayProducts(data);

searchInput.addEventListener("keyup",(e) =>{
    const value = e.target.value.toLowerCase();

    if(value)
    {
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1 ))
    }else{
        displayProducts(data)
    }
})

const setCategories = () =>{
    const allCats = data.map(item => item.cat)
    const categories = ["All" , ...allCats.filter((item,i) => {
        return allCats.indexOf(item) === i;
    })];

    categoriesContainer.innerHTML = categories.map(cat=>
        `
            <span class="cat" >${cat}</span>

        `).join("");


    categoriesContainer.addEventListener("click",(e)=>{
        const selectedCat = e.target.textContent;

        selectedCat === "All" 
        ? displayProducts(data) : 
        displayProducts(data.filter(item => item.cat === selectedCat));
    })
};

const setPrices = () =>{
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList)
    const maxPrice = Math.max(...priceList)

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter((item) => item.price <= e.target.value));
    })
}

setCategories();
setPrices();