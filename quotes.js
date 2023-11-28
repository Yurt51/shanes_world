document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "when you completely empty your mind you become a conduit for anything. you can lose yourself entirely and become a walmart if you meditate inside of one. always have a focused emptiness. a blank slate staring at a wendy's chili is essentially indistinguishable from a wendy's chili",
        "do not sleep under a roof. carry no money or food. go alone to places frightening to the common brand of men. become a criminal of purpose. be  put in jail, and extricate yourself by your own wisdom",
        "everybody wants to be a bodybuilder, but don't nobody want to life no heavy-ass wights",
        "culturally we've almost reached peak everything and the only alternative left is nothing",
        "high in the bass pro shop with my hands behind my back like its the louvre",
        "everything is important",
        "a timeless and unanswerable question. something to always ponder. not to be solved just to be asked",
        "when you find complete stillness within yourself inside a walmart, you can hear every word ever spoken and every sound yet to be heard echoing off the walls individually and at once",
        "you musn't let in too much literature",
        "put some raspberries and blueberries in a bowl and mash em up with a spoon and scoop in a bunch of unflavored unsweetened icelandic yogurt and mix that together then drop in some whole blackberries and then eat that",
        "there's something really beautiful in the air today i think its the air",
        "does anyone know of any good untrod territory for me to explore",
        "having a lot of thoughts and ideas now. notions. concepts whirring in my brain bouncing off of each other. smart ones too. yeah, ive thought about a thing or two in my time. and i'll do it again too. its all happening up here. its all happening",
        "excess of sorrow laughs, excess of joy weeps",
        "is it wrong to burn a candle in my car? i just really like this candle",
        "a cucumber from a friends garden is a very special treat",
        "the axe soon forgets, but the tree always remembers",
        "i learned my lesson i will never have a little bit of fun again its time to have a lot of fun",
        "i think ive probably had 4 concussions",
        "ive been meaning to have a random encounter with true beauty sometime",
        "the stars appear in the sky every night. all is well",
        "as a new form of illiteracy rises, a post literacy based in words which have known forms and no meanings, visual media reemerges as the main mode of worldview storytelling with a new sense of spirituality inserted and wrapped in an iteration of faith based understanding",


    ];

    const quoteContainer = document.getElementById('quote-container');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.textContent = randomQuote;
});
