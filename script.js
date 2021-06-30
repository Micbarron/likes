var likeCount = 3;
var likeSpan = document.querySelector("#someUser")



function like() {

    likeCount++;
    likeSpan.innerText = likeCount + " like(s)";
}