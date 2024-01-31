const data = [
 
    {
      id: 4,
      name: "DJ-ERZ-1",
      imgg: "/Earrings/jhumkas/5.jpg",
      price: 0,
      cat: "Jhumkas",
    },
    {
      id: 3,
      name: "DJ-ERZ-2",
      imgg: "/Earrings/jhumkas/7.jpg",
      price: 0,
      cat: "Jhumkas",
    },
    {
      id: 3,
      name: "DJ-ERZ-3",
      imgg: "/Earrings/jhumkas/16.jpg",
      price: 0,
      cat: "Jhumkas",
    },
    {
      id: 5,
      name: "DJ-ERZ-4 ",
      imgg: "/Earrings//jhumkas/18.jpg",
      price: 0,
      cat: "Jhumkas",
    },
    {
      id: 3,
      name: "DJ-ERZ-5",
      imgg: "/Earrings/jhumkas/19.jpg",
      price: 0,
      cat: "Jhumkas",
    },
    {
      id: 3,
      name: "DJ-ERZ-6",
      imgg: "/Earrings/jhumkas/20.jpg",
      price: 0,
      cat: "Jhumkas",
    },
    {
      id: 5,
      name: "DJ-ERZ-7 ",
      imgg: "/Earrings//jhumkas/21.jpg",
      price: 0,
      cat: "Jhumkas",
    },
    {
      id: 3,
      name: "DJ-ERZ-8",
      imgg: "/Earrings/jhumkas/22.jpg",
      price: 0,
      cat: "Jhumkas",
    },
    {
      id: 3,
      name: "DJ-ERZ-9",
      imgg: "/Earrings/jhumkas/23.jpg",
      price: 0,
      cat: "Jhumkas",
    },
    {
      id: 5,
      name: "DJ-ERZ-10 ",
      imgg: "/Earrings//jhumkas/24.jpg",
      price: 0,
      cat: "Jhumkas",
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