document.addEventListener("DOMContentLoaded", () => {

    // 1. MENU HAMBÚRGUER
    const botaoMenu = document.querySelector("#menu-toggle");
    const menu = document.querySelector("#menu-principal");

    function fecharMenu() {
        menu.classList.remove("aberto");

        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
    }

    botaoMenu.addEventListener("click", () => {
        const estaAberto = menu.classList.toggle("aberto");

        botaoMenu.setAttribute(
            "aria-expanded",
            String(estaAberto)
        );

        botaoMenu.setAttribute(
            "aria-label",
            estaAberto ? "Fechar menu" : "Abrir menu"
        );
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            fecharMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 720) {
            fecharMenu();
        }
    });


    // 2. SAUDAÇÃO DINÂMICA

    const elementoSaudacao = document.querySelector("#saudacao");
    const hora = new Date().getHours();

    if (hora >= 5 && hora < 12) {
        elementoSaudacao.textContent = "Bom dia, seja bem-vindo(a)!";
    } else if (hora >= 12 && hora < 18) {
        elementoSaudacao.textContent = "Boa tarde, seja bem-vindo(a)!";
    } else {
        elementoSaudacao.textContent = "Boa noite, seja bem-vindo(a)!";
    }


    // 3. MODO CLARO E ESCURO

    const botaoTema = document.querySelector("#tema-toggle");
    const iconeTema = document.querySelector("#icone-tema");

    function atualizarTema(modoEscuro) {
        document.body.classList.toggle("modo-escuro", modoEscuro);

        iconeTema.textContent = modoEscuro ? "☀" : "☾";

        botaoTema.setAttribute(
            "aria-label",
            modoEscuro ? "Ativar modo claro" : "Ativar modo escuro"
        );
    }

    botaoTema.addEventListener("click", () => {
        const modoEscuroAtivo =
            document.body.classList.contains("modo-escuro");

        atualizarTema(!modoEscuroAtivo);
    });


    // 4. ANO AUTOMÁTICO NO RODAPÉ

    const elementoAno = document.querySelector("#ano");

    elementoAno.textContent = new Date().getFullYear();

    });

