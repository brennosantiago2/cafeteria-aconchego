# Cafeteria Aconchego

Trabalho prático da disciplina **Programação Web – Faculdade Anhanguera**.

## ✨ Funcionalidades
- Cardápio com itens e imagens otimizado para mobile.
- Seção de contato com links para redes sociais (agora com **ícones SVG acessíveis**).
- **Busca no cardápio** (JavaScript): filtre itens por nome em tempo real.
- **Tema claro/escuro** (persistente via `localStorage`).
- **Voltar ao topo** com rolagem suave.
- **Contador de total** opcional: se os botões dos itens tiverem `data-add="R$ 9,90"`, o total é somado em um selo fixo.

## 🗂 Estrutura
```
cafeteria_aconchego/
├─ index.html
├─ styles.css
├─ app.js
└─ images/...
```

## 🚀 Como executar localmente
1. Baixe ou clone este repositório.
2. Abra `index.html` no seu navegador (duplo clique).
   - Dica: use uma extensão de *Live Server* no VS Code para auto‑reload.

## 🔧 Como editar
- **Ícones**: são SVGs inline (sem dependências externas). Estão inseridos diretamente em `index.html`.
- **Tema**: as variáveis CSS do tema ficam em `styles.css`. O modo escuro aplica `body.dark`.
- **Busca**: campo `#busca` filtra elementos com classe `.produto` ou `.card`. Adiciona `data-name="nome do item"` manualmente se criar novos cards.
- **Total**: adicione `data-add="R$ 12,90"` em um botão do card para habilitar a soma.

## 🛠 Tecnologias
- HTML5 semântico • CSS3 com variáveis • JavaScript vanilla (sem dependências).

## 📦 Publicar no GitHub (passo a passo)
1. **Criar repositório** no GitHub (público): `cafeteria-aconchego`.
2. No computador, dentro da pasta do projeto, execute:
   ```bash
   git init
   git add .
   git commit -m "Versão inicial do site"
   git branch -M main
   git remote add origin https://github.com/<seu-usuario>/cafeteria-aconchego.git
   git push -u origin main
   ```
3. **Ativar GitHub Pages**:
   - No repositório, *Settings* → **Pages** → *Branch*: `main` (pasta `/root`) → **Save**.
   - A URL ficará assim: `https://<seu-usuario>.github.io/cafeteria-aconchego/`.

> Se sua pasta for diferente, publique os arquivos **na raiz** do repositório (onde está `index.html`).

## 🧪 Checklist de QA rápido
- [ ] Links de redes sociais abrem em nova aba (`target="_blank"` + `rel="noopener"`).
- [ ] Imagens possuem `alt` descritivo.
- [ ] Contraste de cores OK nos dois temas.
- [ ] Navegação por teclado: foco visível nos botões/links.
- [ ] HTML validado no https://validator.w3.org/ (opcional).

## 📄 Licença
Uso educacional. Sinta-se à vontade para reutilizar com créditos.
