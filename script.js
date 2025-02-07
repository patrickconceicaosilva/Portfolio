languagesSelect = document.getElementById("languages");

window.onload = function() {
    languagesSelect.value = "English";
}

function changeLanguage() {
    if (languagesSelect.value == "Portugues") {
        document.getElementById("mainText").innerHTML = "Hey, Eu sou Patrick";
        document.getElementById("mainP").innerHTML = "Sou Desenvolvedor Front-End e Desenvolvedor Python. Sinta-se à vontade para entrar em contato comigo através das minhas redes sociais ou do meu Whatsapp abaixo. Agende um projeto comigo!"
    } else if (languagesSelect.value == "English") {
        document.getElementById("mainText").innerHTML = "Hey, I'm Patrick";
        document.getElementById("mainP").innerHTML = "I’m a Front-End Developer and Python Developer. Feel free to connect with me through my social networks listed above. Schedule a project with me"
    }
}

languagesSelect.addEventListener("change", changeLanguage);
