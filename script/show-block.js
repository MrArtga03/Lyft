//show block yes-or-no
const block = document.querySelector(".yes-or-no");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

//show block "yes-or-no" after 15000ms
setTimeout(() => { block.style.display = "block"; }, 15000);

const modalWindow = document.querySelector(".modal-window");
const cross = document.querySelector(".cross-to-close")

noBtn.addEventListener("click", () => {
    if (noBtn) {
        modalWindow.style.display = "block";
        block.style.display = "none";
    }
});

//close modal window by the cross or by tap on the window
cross.addEventListener("click", () => { if (cross) modalWindow.style.display = "none" });
window.addEventListener("click", (e) => {
    if (e.target == modalWindow) {
        modalWindow.style.display = "none";
    }
}) ;
