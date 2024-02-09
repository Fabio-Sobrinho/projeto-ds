        const botao = document.querySelector(".btn-plataforma");
        const elementoPlataformas = document.querySelector(".btn-plataforma .plataforma");
        
        botao.addEventListener("click", () =>{
               elementoPlataformas.classList.toggle("ativo");
        });