function addUser()
{
    p1name=document.getElementById("player1_name_input").value;
    p2name=document.getElementById("player2_name_input").value;
    localStorage.setItem("p1name",p1name);
    localStorage.setItem("p2name",p2name);
    window.location="game_page.html";
}
