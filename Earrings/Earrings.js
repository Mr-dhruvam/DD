const data = [
    {
      id: 1,
      name: "DJ-ER-1",
      imgg: "/Earrings/1.jpg",
      price: 0,
      cat: "Stud & Tops", 
    },
    {
      id: 11,
      name: "DJ-ER-2",
      imgg: "/Earrings/2.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 2,
      name: "DJ-ER-3",
      imgg: "/Earrings/3.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 3,
      name: "DJ-ER-4",
      imgg: "/Earrings/4.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 5,
      name: "DJ-ER-5 ",
      imgg: "/Earrings/6.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    
    {
      id: 4,
      name: "DJ-ER-6 ",
      imgg: "/Earrings/8.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 5,
      name: "DJ-ER-7 ",
      imgg: "/Earrings/9.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 3,
      name: "DJ-ER-8",
      imgg: "/Earrings/10.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 4,
      name: "DJ-ER-9 ",
      imgg: "/Earrings/11.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 5,
      name: "DJ-ER-10 ",
      imgg: "/Earrings/12.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 3,
      name: "DJ-ER-11",
      imgg: "/Earrings/13.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 4,
      name: "DJ-ER-12 ",
      imgg: "/Earrings/14.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 5,
      name: "DJ-ER-13 ",
      imgg: "/Earrings/15.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    
    {
      id: 4,
      name: "DJ-ER-14 ",
      imgg: "/Earrings/17.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    
    {
      id: 4,
      name: "DJ-ER-15",
      imgg: "/Earrings/19.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 5,
      name: "DJ-ER-16",
      imgg: "/Earrings/20.jpg",
      price: 0,
      cat: "Stud & Tops",
    },
    {
      id: 5,
      name: "DJ-ER-17",
      imgg: "/Earrings/21.png",
      price: 0,
      cat: "Stud & Tops",
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