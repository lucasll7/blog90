//filter
$(document).ready(function() {
    $(".filtro-item").click(function() {
        const value = $(this).attr("data-filtro");
        if (value === "todos") {
            $(".post-box").show("1000");
        } else {
            $(".post-box")
                .not("." + value)
                .hide("1000");
            $(".post-box")
                .filter("." + value)
                .show("1000");
        }
    });
    //btn active
    $(".filtro-item").click(function() {
        $(this).addClass("filtro-ativo").siblings().removeClass("filtro-ativo");
    })
});
//background scroll

let header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})





