function api() {
    fetch("https://www.omdbapi.com?apikey=f0cbdcd6&s=avenger").then((res) => {
        return res.json();
    }).then((res) => {
        movie(res.Search);
        // console.log(res.Search);
    }).catch((e) => {
        console.log(e);
    })
}
api();
function api1() {
    fetch("https://www.omdbapi.com?apikey=f0cbdcd6&s=marvel").then((res) => {
        return res.json();
    }).then((res) => {
        movie(res.Search);
        // console.log(res.Search);
    }).catch((e) => {
        console.log(e);
    })
}
api1();
function movie(data) {
    let container = document.querySelector("#container");
    // container.innerHTML = "";
    data.map((elem) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let date = document.createElement("p");
        let name = document.createElement("p");
        img.src = elem.Poster;
        name.innerHTML = elem.Title;
        date.innerHTML = elem.Year;

        div.append(img, name, date);
        container.append(div);
        div.addEventListener("click", function () {
            userClick(elem)
        })
    })

}
document.querySelector("#search").addEventListener("search", function () {
    let data = document.querySelector("#search").value;
    let container = document.querySelector("#container");
    container.innerHTML = "";
    search(data);
})
function search(value) {

    fetch("https://www.omdbapi.com?apikey=f0cbdcd6&s=" + value).then((res) => {
        return res.json();
    }).then((res) => {
        movie(res.Search);
        // console.log(res.Search);
    }).catch((e) => {
        console.log(e);
    })
}
function userClick(value) {
    let container = document.querySelector("#container");
    container.innerHTML="";
    let div = document.createElement("div");
    let img = document.createElement("img");
    let date = document.createElement("p");
    let name = document.createElement("p");
    img.src = value.Poster;
    name.innerHTML = value.Title;
    date.innerHTML = value.Year;
    div.append(img,name, date);
    container.append(div);
}
