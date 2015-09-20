function start(num){
    var language = setLanguage(num);
    enter();
    greet(language);

    function enter(){
        var overlay = document.getElementById("start");
        var bg = document.getElementById("background");
        var start_content = document.getElementById("start_content");
        var start_sheep = document.getElementById("start_sheep");
        //overlay.style.animation = "start_anim 2.5s ease 0s 1 running forwards";
        start_sheep.style.background = "url('assets/imgs/start_sheep_walk.png') left"
        start_sheep.style.animation = "sheep_start .8s steps(6) infinite";
        start_sheep.style.transform = "translate(80vh,0)";
        overlay.style.transform = "translate(0,-100vh)";
        start_content.style.transform = "translate(0,-150vh)";
        bg.style.filter = "blur(0px)";
    }

    function greet(lang){
        var greet = {"english": "Welcome!",
                     "portugues": "Bem vindo!",
                     "deutsch": "Willkommen!"};
        document.getElementById("greet").innerHTML = greet[lang];
        document.getElementById("greet").style.animation = "greet_text 2s forwards 2s";
        document.getElementById("fields").style.filter = "opacity(100%)";
    }
}

function setLanguage(num){
    var lang = "";

    switch(num){
        case 1:
            lang = "english";
            break;
        case 2:
            lang = "portugues";
            break;
        case 3:
            lang = "deutsch";
            break;
    }

    return lang;
}
