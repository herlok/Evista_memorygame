//dynamic memory game js

$(document).ready(function () {

    $(".button").click(function () {        
        // get the value from the input
        var numCards = parseInt($('select').val());

        for (var i = 1; i <= numCards; i++) {
            // create the cards
            $(".container").append("<div class='card" + i + " cards'></div>") &&
            $(".card" + i).clone().appendTo(".container");
        }

        // randomize cards in stack
        var cards = $(".cards");
        for (var i = 0; i < cards.length; i++) {
            var target = Math.floor(Math.random() * cards.length - 1) + 1;
            var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
            var target3 = Math.floor(Math.random() * cards.length - 1) + 1;
            cards.eq(target).before(cards.eq(target2)).before(cards.eq(target3));
        }
    });
});


