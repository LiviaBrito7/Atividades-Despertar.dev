document.getElementById("form-login").addEventListener("submit", async (event) => {
    event.preventDefault(); 

    const username = document.getElementById("nome").value;
    const password = document.getElementById("senha").value;
    const email = document.getElementById('email').value;
  
    async function cadastroFormulario() {
      const novoUsuario = {
        'name': username,
        'password': password,
        'login': email,
      }
  
      try {
        const response = await api.post('/users', novoUsuario);
        if (response.status === 201) {
          alert('Usuário cadastrado com sucesso!');
        }
        localStorage.setItem('userSession', JSON.stringify(userSession));
      } catch (error) {
        console.error('Usuário não cadastrado', error);
      }
    } 
    cadastroFormulario();
  });
  
document.getElementById('bt-login').addEventListener('click', () => {
    const userSession = localStorage.getItem('userSession');
  
    if (!userSession) {
    window.location.href = "tela_de_login.html"; 
    } else {
    window.location.href = "http://127.0.0.1:5500/"; 
    }
  });