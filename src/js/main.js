let blocks = document.querySelectorAll('.view');

function checkBlocksVisibility() {
    let windowHeight = window.innerHeight;

    blocks.forEach(block => {
        let blockPosition = block.getBoundingClientRect().top;

        if (blockPosition < windowHeight - 75) {
            block.style.opacity = "1";
            block.style.transform = "translateY(0)";
        } else {
            block.style.opacity = "0";
            block.style.transform = "translateY(10rem)";
        }
    });
}

checkBlocksVisibility();

window.addEventListener('scroll', checkBlocksVisibility);