// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
const ballonsMap = ['green', 'red', 'blue', 'yellow', 'pink', 'purple', 'orange', 'grey', 'orange', 'coral', 'green', 'red', 'blue', 'yellow', 'pink', 'purple', 'orange', 'grey', 'orange', 'coral'];
const activeBalloons = ballonsMap.filter(color => color != null).length
// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    ballonsMap[position] = "null";
    activeBalloons--;
    render();
}



const render = () => {

    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        if (color === "null") return `<div class="balloon popped" id="${position}" style="background-color:${color}"></div>`;
        return `<div class="balloon active" id="${position}" style="background-color:${color}"></div>`; // <--- render each balloon
    });
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM
    ballonsMap.forEach((color, position) => {
        if (color != null) {
            const element = document.getElementById(position);
            if (element) {
                element.addEventListener("click", () => popBalloon(position))
            }
        }
    })




    document.querySelector("#balloon-count").innerHTML = activeBalloons // <-- render the balloon count into the DOM
    if (activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();