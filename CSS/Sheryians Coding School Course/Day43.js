var arr = [
    { name: "Floki", img: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=3009&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "Strangers" },
    { name: "Tina", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=3088&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "Strangers" },
    { name: "Paresh", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", status: "Strangers" }
]

function display() {
    var clutter = "";
    arr.forEach(function (val, index) {
        clutter += `<div id="card">
        <div id="img">
        <img src="${val.img}"/>
        </div>
        <h3>${val.name}</h3>
        <h5>${val.status}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi maiores quas iste</p>
        <button id="${index}">Add Friend</button>
    </div>`;
    })
    document.querySelector("#main").innerHTML = clutter;
}
display();

document.querySelector("#main").addEventListener("click", function (details) {
    arr[details.target.id].status = "Friends";
    display();
})