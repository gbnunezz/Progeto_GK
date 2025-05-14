import { cadastro } from './auth.js';

const buttonCadastro = document.getElementById("buttonCadastro");
const display = document.getElementById("display");

buttonCadastro.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    try {
        const res = await cadastro(email, senha);
        console.log(res)
        if (res.success) {
            window.location.href = "login.html";
        } else {
            display.innerHTML = res.message || "Erro ao cadastrar.";
        }
    } catch (error) {
        display.innerHTML = "Erro ao tentar cadastrar. Tente novamente.";
        console.error(error);
    }
});
