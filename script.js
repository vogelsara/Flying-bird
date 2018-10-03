function initSite() {
    var bird = document.getElementById("birdImage");
    var position = 0;
    var id = setInterval(frame, 20);
    var body = document.getElementById("body");
    var birdWidth = bird.clientWidth;
    var bodyWidth = body.clientWidth;

    function frame() {
        if (position == (bodyWidth - birdWidth)){
            clearInterval(id);
        } else {
            position++;
            bird.style.left = position + 'px';
        }
    }
}