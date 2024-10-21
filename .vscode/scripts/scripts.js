// Validação do Formulário
document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Aqui você pode adicionar sua lógica de validação

    // Se a validação passar, envie os dados com EmailJS ou outro serviço de API
    alert('Formulário enviado com sucesso!');

    // Limpar o formulário
    this.reset(); // Isso irá redefinir todos os campos do formulário
});
