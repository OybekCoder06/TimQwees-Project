const menu = document.getElementById("menu");
const menu_block = document.getElementById("menu-block");

menu.addEventListener('click', function () {
    if (menu_block.classList.contains("list-menu-desctop-none")) {
        menu_block.classList.remove("list-menu-desctop-none");
        menu_block.classList.add("list-menu-desctop");
    } else if (menu_block.classList.contains("list-menu-desctop")) {
        menu_block.classList.remove("list-menu-desctop");
        menu_block.classList.add("list-menu-desctop-none");
    }
});

$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
    });
});

function ScrollsBar() {
    const menu_elements = document.getElementById("container_menu_full");
    const menu_bar = document.getElementById("menu-block");
    const send_form_reg = document.getElementById("send-form-reg");

    if (this.scrollY < 10) {
        menu_elements.style.borderRadius = "0 0 25px 25px";
        menu_elements.style.transition = "1s ease";
        menu_elements.style.filter = "invert(0)";
        menu_elements.style.background = "transparent";
        menu_bar.style.filter = "invert(0)";
        send_form_reg.style.filter = "invert(0)";
    }
    else if (this.scrollY < 2500) {
        menu_elements.style.borderRadius = "0 0 25px 25px";
        menu_elements.style.transition = "1s ease";
        menu_elements.style.filter = "invert(0)";
        menu_elements.style.background = "white";
        menu_bar.style.filter = "invert(0)";
        send_form_reg.style.filter = "invert(0)";
    }
    else if (this.scrollY > 2550) {
        menu_elements.style.borderRadius = "0 0 25px 0";
        menu_elements.style.transition = "1s ease";
        menu_elements.style.filter = "invert(1)";
        menu_elements.style.background = "white";
        menu_bar.style.filter = "invert(0)";
        send_form_reg.style.filter = "invert(1)";
    }
}

window.addEventListener("scroll", ScrollsBar, false);


// DOT SLIDER

const dots = document.querySelectorAll('.dot'); //все классы

dots.forEach((dot, index) => { // забираем все элементы и под индекс
    dot.addEventListener('click', () => { //при нажатии
        dots.forEach(d => d.classList.remove('active')); //забираем все классы и удаляем active у всех
        dot.classList.add('active'); // устанавливаем active в текущем месте
    });
});

// MENU LIST

const list_menu = document.querySelectorAll('.menu_list');

list_menu.forEach((menu, index) => { // забираем все элементы и под индекс
    menu.addEventListener('click', () => { //при нажатии
        list_menu.forEach(m => m.classList.remove('active')); //забираем все классы и удаляем active у всех
        menu.classList.add('active'); // устанавливаем active в текущем месте
    });
});

// const button = document.querySelector('.btn');
// const system__visible = document.querySelector('.system-visible');
// const system__hidden = document.querySelector('.system-hidden');
// const check__system = document.querySelector('.click__system');
// const to = document.querySelector('.to');
// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     button.classList.add('btn--clicked');
//     document.querySelectorAll('span').forEach((element) => { element.classList.add('expanded'); to.classList.remove('to'); to.classList.add('expanded-to') })
//     setTimeout(() => { button.classList.remove("btn--clicked") }, 3600);
//     setTimeout(() => { check__system.classList.remove('click__system'); system__visible.classList.remove('system-visible'); system__visible.classList.add('system-hidden'); system__hidden.classList.remove('system-hidden'); system__hidden.classList.add('system-visible'); }, 3450);
//     setTimeout(() => { document.querySelectorAll('span').forEach((element) => { element.classList.remove('expanded') }) }, 1680);
//     setTimeout(() => { document.querySelectorAll('span').forEach((element) => { to.classList.add('to'); to.classList.remove('expanded-to') }) }, 3100)
// });

const button = document.querySelector('.btn');
const system__visible = document.querySelector('.system-visible');
const system__hidden = document.querySelector('.system-hidden');

button.addEventListener('click', (e) => {
    e.preventDefault();
    // Animatsiyani o'chirish va to'g'ridan-to'g'ri sahifaga o'tish
    system__visible.classList.remove('system-visible');
    system__visible.classList.add('system-hidden');
    system__hidden.classList.remove('system-hidden');
    system__hidden.classList.add('system-visible');
    system__hidden.classList.add('system-visible');
    system__visible.classList.add('system-hidden');
});

const button1 = document.querySelector('.btn'); // Tugmani tanlash
const systemDiv = document.querySelector('.system-visible'); // Div ni tanlash

button.addEventListener('click', (e) => {
    e.preventDefault(); // Tugma bosilganda sahifani yangilashni oldini olish
    systemDiv.remove(); // Div ni o'chirish
});

// CURSOR SETTIN REQUAER

console.clear();

const TAIL_LENGTH = 15;

// const cursor = document.getElementById('cursor');

// let mouseX = 0;
// let mouseY = 0;

// let cursorCircles;
// let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

// function onMouseMove(event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
// }

// function initCursor() {
//     for (let i = 0; i < TAIL_LENGTH; i++) {
//         let div = document.createElement('div');
//         div.classList.add('cursor-circle');
//         cursor.append(div);
//     }
//     cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'));
// }

// function updateCursor() {
//     cursorHistory.shift();
//     cursorHistory.push({ x: mouseX, y: mouseY });

//     for (let i = 0; i < TAIL_LENGTH; i++) {
//         let current = cursorHistory[i];
//         let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

//         let xDiff = next.x - current.x;
//         let yDiff = next.y - current.y;

//         current.x += xDiff * 0.35;
//         current.y += yDiff * 0.35;
//         cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i / TAIL_LENGTH})`;
//     }
//     requestAnimationFrame(updateCursor)
// }

// document.addEventListener('mousemove', onMouseMove, false);

// initCursor();
// updateCursor();