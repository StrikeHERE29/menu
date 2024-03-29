const menu = [
    {
        id:1,
        title: "Burger",
        category: "lunch",
        price: "$14.99",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:"Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing mrs few. Mrs for hour game room want are fond dare. For detract charmed add talking age."
    },
    {
        id:2,
        title: "Omelette",
        category: "breakfast",
        price: "$4.99",
        img: "https://plus.unsplash.com/premium_photo-1671403963864-6d46f3b62352?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:"Shy resolution instrument unreserved man few. She did open find pain some out. If we landlord stanhill mr whatever pleasure supplied concerns so."
    },
    {
        id:3,
        title: "Waffles",
        category: "breakfast",
        price: "$3.99",
        img: "https://images.pexels.com/photos/2228075/pexels-photo-2228075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"Certain but she but shyness why cottage. Gay the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution."
    },
    {
        id:4,
        title: "Steak",
        category: "dinner",
        price: "$24.99",
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:"My indulged as disposal strongly attended. Parlors men express had private village man. Discovery moonlight recommend all one not. Indulged to answered prospect it bachelor is he bringing shutters. Pronounce forfeited mr direction oh he dashwoods ye unwilling."
    },
    {
        id:5,
        title: "Roasted Ribs",
        category: "dinner",
        price: "$30.99",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:"Ladies others the six desire age. Bred am soon park past read by lain. As excuse eldest no moment. An delight beloved up garrets am cottage private. The far attachment discovered celebrated decisively surrounded for and."
    },
    {
        id:6,
        title: "Pasta",
        category: "lunch",
        price: "$10.99",
        img: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:"Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become. Done may bore quit evil old mile. If likely am of beauty tastes."
    }
];
let btns = document.querySelectorAll(".filter-btn");
let itemContainer = document.querySelector(".item-container");

window.addEventListener("DOMContentLoaded",function(){
    showItems(menu)

})

function showItems(menuItems){
    let displayMenu = menu.map(function(item){
        // console.log(item)
        return `<article class="items">
        <img src=${item.img}>
        <div class="info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="text">${item.description}</p>
 
                    </div>
           
         </article>`
     });
 
     displayMenu = displayMenu.join("")
 
 itemContainer.innerHTML = displayMenu;
}




btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        console.log("Button clicked");
        const category = e.currentTarget.dataset.id;
        console.log("Selected category:", category);
        const menuCategory = menu.filter(function(menuItem){
           if (menuItem.category === category) {
          return menuItem;}
        });
        console.log("Filtered items:", menuCategory);
        if(category === "all"){
            showItems(menu);
        } else {
            showItems(menuCategory);
        }
    });
});

