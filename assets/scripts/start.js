function start(num){
    enter();
    greet(num);

    function enter(){
        var overlay = document.getElementById("start");
        var bg = document.getElementById("background");
        var start_sheep = document.getElementById("start_sheep");
        //overlay.style.animation = "start_anim 2.5s ease 0s 1 running forwards";
        start_sheep.style.background = "url('assets/imgs/start_sheep_walk.png') left"
        start_sheep.style.animation = "sheep_start .8s steps(6) infinite";
        start_sheep.style.transform = "translate(80vh,0)";
        overlay.style.transform = "translate(0,-100vh)";
        bg.style.filter = "blur(0px)";
    }

    function greet(num){
        var greet = "";

        switch (num){
            case 1:
                greet = "Welcome!";
                break;
            case 2:
                greet = "Bem vindo!";
                break;
            case 3:
                greet = "Wilkommen!";
                break;
        }

        document.getElementById("greet").innerHTML = greet;
        document.getElementById("greet").style.animation = "greet_text 2s forwards 2s";
    }
}
