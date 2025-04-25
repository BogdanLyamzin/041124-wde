// const menu = document.getElementById("menu");
// const menuItems = menu.querySelectorAll(".link");
// menuItems.forEach(el => el.addEventListener("click", function(e){
//     e.preventDefault();
//     const prevActiveElement = menu.querySelector(".active");
//     if(prevActiveElement !== e.target) {
//         prevActiveElement?.classList.remove("active");
//         e.target.classList.add("active");
//     }
// }));

const menu = document.getElementById("menu");
const menuItems = [
    {
        href: "#",
        text: "Home page",
    },
    {
        href: "#",
        text: "Products page",
    },
    {
        href: "#",
        text: "Contacts page",
    },
];
let activeIndex = 0;

const createMenuItems = ()=> {
    const elements = menuItems.map((item, index) => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.className = index === activeIndex ? "link active" : "link";
        link.href = item.href;
        link.textContent = item.text;
        li.append(link);
        link.addEventListener("click", function(event) {
            event.preventDefault();
            if(activeIndex !== index) {
                activeIndex = index;
                createMenuItems();
            }
        });

        return li;
    });
    
    menu.innerHTML = "";
    menu.append(...elements);
}

createMenuItems();