function cardGenerate(deckSize)
{
    let container = document.querySelector('.cards');

    container.replaceChildren();

    let imageArray = [];
    let tmp = [];

    for(let i = 1; i <= deckSize/2; i++)
    {
        tmp[i] = i;
    }

    for(let i = 1; i <= deckSize/2; i++)
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

    let disableClicks = false;
    let flippedcards = 0;
    let firstclicked = null;
    let secondclicked = null;
    let imagefirst = "";
    let imagesecond = "";
    let score = 0;
	let back_viewFirstclicked;
	let back_viewSecondclicked = "";
    let matchedCardsarray = [];

    for (let i = 0; i <= deckSize-1; i++)
    {
        //letrehozok annyi kartyat amennyit beallit a felhasznalo deckSize-nak
        let card = document.createElement("li");
        card.className = "card";

        card.innerHTML = "<div class='view back_view'>" + "<img src='img/img-" + imageArray[i] + ".png'>" + "</div>" + "<div class='view front_view' id='front_view_" + i + "'>" + "<span class='material-icons'>question_mark</span>" + "</div>";
        container.appendChild(card);

        let front_view = card.getElementsByTagName('div')[1];



        card.addEventListener('click', function cardflip() {

            // Ha tiltva van a klikkeles akkor vege.
            if (disableClicks)
                return;

            // Ha mar fel van forditva akkor ujbol nem lehet felforditani.
            if (firstclicked == front_view || secondclicked == front_view) {
                console.log('Kartya mar felforditva');
                return;
            }

            // Ha egy kartya mar paroztatva lett akkor mar nincs mit tenni.
            if (matchedCardsarray.includes(card)) {
                console.log('Kartya mar paroztatva');
                return;
            }
            //ha ranyomok a kartyara akkor eltuntetem rola a kerdojelet es szamolom hogy mennyiszer kattintottam mar
            front_view.style.display = "none";
            flippedcards++;
            //elmentem az elsonek es masodikank kattintott kartyanak az adatait
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

            //megnezem mennyi kartya van felforditva 
            if(flippedcards == 2)
            {
                //az elso kepet meg a masodik kepet hasonlitom, hogy egyeznek-e
                //ha nem egyezik akkor 1mp-ig nem engedjuk neki, hogy klikkeljen
                //visszaallitom a klikkelt elemeknek a a displayet(visszaforditom a kartyat) 
                if(imagefirst != imagesecond)
                {
                    disableClicks = true;
                    setTimeout(() => {
                        firstclicked.style.display = "flex";
                        secondclicked.style.display = "flex";
                        flippedcards = 0;
                        console.log("eltelt 1mp");
                        firstclicked = "";
                        secondclicked = "";
                        disableClicks = false;
                    }, "1000")
                }
                // ha egyezik a ketto akkor atlatszova teszem oket
                //belerakom egy tombbe, hogy kesobb tudjam, hogy ezeknek van-e mar parja(felforditva marad)
                else
                {
                    back_viewFirstclicked.style.opacity = "0.5";
                    back_viewSecondclicked.style.opacity = "0.5";
                    firstclicked = "";
                    secondclicked = "";
                    matchedCardsarray.push(back_viewFirstclicked.parentElement);
                    matchedCardsarray.push(back_viewSecondclicked.parentElement);
                    score++;
                    score++;
                    document.getElementById('score').innerHTML = "score: " + score;
                    if(score == deckSize)
                    {
                        alert('nyertél');
                    }
                }

                flippedcards = 0;
            }
        })
    }
}
// URL-bol kivesszuk a deckSize-t, hogy tudjuk mennyi kartyat kell letrehozni
// ha nincs deckSize url-ben akkor alapertelmezetten 6ot fog csinalni
var url = new URL(window.location.href);
var deckSize = url.searchParams.get('deckSize');
if (!deckSize)
    deckSize = 6;
cardGenerate(deckSize);

// Start new button click eseten uj jatek inditas.
document.getElementById('startnewgamebtn').addEventListener('click', (event) => {
    event.preventDefault();
    deckSize = document.querySelector('.deckSize').value;
    score = 0;
    document.getElementById('score').innerHTML = "score: " + score;
    cardGenerate(deckSize);
    
});

// Start new button click eseten uj jatek inditas.
document.getElementById('restartBtn').addEventListener('click', (event) => {
    event.preventDefault();
    score = 0;
    document.getElementById('score').innerHTML = "score: " + score;
    cardGenerate(deckSize);
});
