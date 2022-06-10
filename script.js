var rightChanger = document.getElementById('right');
var rightImage = document.getElementById('imageRight');
var rightList = document.getElementById('listRight');

function bgColorChange(clicked_id) {
    var clickedColor = document.getElementById(clicked_id);
    rightChanger.style.backgroundColor = clickedColor.value;
}

function textColorChange() {
    var clickedColor = document.getElementById('fontColor');
    rightChanger.style.color = clickedColor.value;
}

function textSizeChange() {
    var sizeChange = document.getElementById('fontSize');
    rightChanger.style.fontSize = sizeChange.value;
}

function borderChange() {
    var borderCheck = document.getElementById('imgBorder').checked;
    if (borderCheck) {
        rightImage.style.border = "1px solid white";
    } else {
        rightImage.style.border = "none";
    }
}

function listStyleChange(clicked_id) {
    var clickedStyle = document.getElementById(clicked_id);
    rightList.style.listStyleType = clickedStyle.value;
}