let css = document.getElementsByClassName("cssCode")[0];
var color1 = document.getElementsByName("color1")[0];
let color2 = document.getElementsByName("color2")[0];

function changeGradiant() {
    document.body.style.background = "linear-gradient(to right,"
        + color1.value
        + ", "
        + color2.value
        + " )";

    css.textContent = document.body.style.background;

    var c = color1.value.substring(1);      // strip #
    var rgb = parseInt(c, 16);   // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff;  // extract red
    var g = (rgb >> 8) & 0xff;  // extract green
    var b = (rgb >> 0) & 0xff;  // extract blue

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    c = color2.value.substring(1);
    rgb = parseInt(c, 16); 
    r = (rgb >> 16) & 0xff;
    g = (rgb >> 8) & 0xff;
    b = (rgb >> 0) & 0xff;

    var luma2 = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

    if (luma < 40 || luma2<40) {
        document.body.style.color = "#f0f8ff";
        css.style.color = "#f0f8ff";

    } else {

        document.body.style.color = "#151515";
        css.style.color = "#16161a";
    }

}

color1.addEventListener("input", changeGradiant)
color2.addEventListener("input", changeGradiant)
