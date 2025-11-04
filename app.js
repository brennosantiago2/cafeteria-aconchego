
// Busca no cardápio: filtra cards por nome
(function(){
  const input = document.querySelector('#busca');
  if (input) {
    input.addEventListener('input', () => {
      const termo = input.value.trim().toLowerCase();
      document.querySelectorAll('.produto, .card').forEach(el => {
        const nome = (el.getAttribute('data-name') || el.textContent || '').toLowerCase();
        el.style.display = nome.includes(termo) ? '' : 'none';
      });
    });
  }
})();


// Botão voltar ao topo
(function(){
  const btn = document.querySelector('#voltar-topo');
  if (!btn) return;
  const toggle = () => {
    const show = window.scrollY > 400;
    btn.classList.toggle('visivel', show);
  };
  window.addEventListener('scroll', toggle, {passive: true});
  toggle();
  btn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
})();

