function cardGenerate()
{
    var deckSize = document.querySelector('.deckSize');
    var selectValue = deckSize.value; 
    let container = document.querySelector('.cards');

    container.replaceChildren(); 

    let imageArray = [];
    let tmp = [];

    for(let i = 1; i <= selectValue/2; i++)
    {
        tmp[i] = i;
    }

    for(let i = 1; i <= selectValue/2; i++)
    {
        imageArray.push(tmp[i]);
        imageArray.push(tmp[i]);
    }

    function shuffle(array) 
    {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }

    shuffle(imageArray);

    let flippedcards = 0;
    let flippedcardsarray = [];
    let firstclicked = "";
    let secondclicked = "";
    let imagefirst = "";
    let imagesecond = "";
    let score = 0;
	let back_viewFirstclicked = "";
	let back_viewSecondclicked = "";

    for (let i = 0; i <= selectValue-1; i++) 
    {

        let card = document.createElement("li");
        card.className = "card";

        card.innerHTML = "<div class='view back_view'>" + "<img src='img/img-" + imageArray[i] + ".png'>" + "</div>" + "<div class='view front_view' id='front_view_" + i + "'>" + "<span class='material-icons'>question_mark</span>" + "</div>";            
        container.appendChild(card);

        let front_view = card.getElementsByTagName('div')[1];
        


        card.addEventListener('click', function cardflip() {
            if(front_view.id=="front_view_"+i)
            {
                front_view.style.display = "none";
                flippedcards++;
                flippedcardsarray.push(front_view.id);
                if(firstclicked)
                {
                    imagesecond = card.getElementsByTagName('img')[0].src;
                    secondclicked = document.getElementById('front_view_' + i);
					back_viewSecondclicked = card.getElementsByTagName('div')[0];
                }
                else
                {
                    imagefirst = card.getElementsByTagName('img')[0].src;
                    firstclicked = document.getElementById('front_view_' + i);
					back_viewFirstclicked = card.getElementsByTagName('div')[0];
                }

                console.log(imagefirst);
                console.log(imagesecond);
                console.log(flippedcards);

                
				if(flippedcards == 2)
				{
					if(imagefirst != imagesecond)
					{
						setTimeout(() => {
							firstclicked.style.display = "flex";
							secondclicked.style.display = "flex";
							flippedcards = 0;
							console.log("eltelt 1mp");
							firstclicked = "";
							secondclicked = "";
						}, "1000")
					}
					else
					{
						console.log("stimmel a ketto");
						back_viewFirstclicked.style.opacity = "0.5";
						back_viewSecondclicked.style.opacity = "0.5";
						firstclicked = "";
						secondclicked = "";
					}
					
					flippedcards = 0;

				}
				
                
                
                    
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
