function cardGenerate()
{
    var deckSize = document.querySelector('.deckSize');
    var selectValue = deckSize.value; 
    let container = document.querySelector('.cards');

    container.replaceChildren(); 

    for (let i = 1; i <= selectValue; i++) 
    {
            let card = document.createElement("li");
            card.className = "card";
            card.innerHTML = "<div class='view back_view'>" + "<img src='img/img-1.png'>" + "</div>" + "<div class='view front_view'>" + "<span class='material-icons'>question_mark</span>" + "</div>";            
            container.appendChild(card);
    }
}
