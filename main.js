const searchbar = document.querySelector(".search")

function modifyScreen(width, height) {
    const newWindow = window.open(searchbar.value, 'newWindow', `width=${width},height=${height}`);
};