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
        card.innerHTML = "<div class='view back_view'>" + "<img src='img/img-" + i + ".png'>" + "</div>" + "<div class='view front_view'>" + "<span class='material-icons'>question_mark</span>" + "</div>";            
        container.appendChild(card);

        let back_view = card.getElementsByTagName('div')[0];
        let front_view = card.getElementsByTagName('div')[1];
        
        card.addEventListener('click', (e) => {
            if(card.value=="back_view")
            {
                back_view.style.display = "none";
                console.log('back click volt');
            }
            else
            {
                console.log(front_view);
                front_view.style.display = "none";
                console.log('front click volt');
            }
        })
        


        /*let back_view = document.createElement("div");
        back_view.innerHTML = 'back';
        back_view.addEventListener('click', (e) => {
            console.log('back view click volt');
        })
        container.appendChild(back_view);
        
        let front_view = document.createElement("div");
        front_view.innerHTML = 'front';
        front_view.addEventListener('click', (e) => {
            console.log('front_view  click volt');
        })
        container.appendChild(front_view);*/
    }
}
