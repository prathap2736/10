let body = document.body;
let themer = document.querySelector(".themer");
const followButtons = document.querySelectorAll(".follow-button");

themer.addEventListener("click", toggleTheme);

/*function toggleTheme() {
    if (body.className === "light.theme") {
        body.className = "dark-theme";
        themer.innerText = "light";
    } else {
        body.className = "light-theme";
        themer.innerText = "dark";
    }
}*/

function toggleTheme() {
    if (body.className === "light-theme") {
        body.className = "dark-theme";
        themer.innerText = "light";
    } else {
        body.className = "light-theme";
        themer.innerText = "dark";
    }
}


followButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => followUnFollow(e.target));
});

/*function followUnFollow(button) {
    button.classlist.toggle("followed");
    if (button.innerText == "follow") button.innerText = "unfollow";
    else button.innerText = "follow";
} */

    function followUnFollow(button) {
        button.classList.toggle("followed");
        if (button.innerText === "follow") {
            button.innerText = "unfollow";
        } else {
            button.innerText = "follow";
        }
    }
    