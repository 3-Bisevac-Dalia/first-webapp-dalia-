// Add JavaScript code for your web site here and call it from index.html.
document.getElementById("myBtn")?.addEventListener("click",() => {
    let input = document.getElementById("myInput").value;
    document.getElementById("myPara").innerHTML = " Hello  " + input + "! Explore this page to learn all about  Matel's old Barbie Movies and their rankings!";
 })

 document.getElementById("submitMovieBtn")?.addEventListener("click", function () {
    let favoriteMovie = document.getElementById("favoriteMovie").value;
    document.getElementById("responseMessage").innerHTML = favoriteMovie + ", that's a great choice! Remember, every movie has some of that Barbie magic, so the only ranking that really matters is the one in your heart!";
    document.getElementById("favoriteMovie").value = "";
 });
