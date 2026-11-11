# Portfólio — Luis Gabriel

Portfólio pessoal desenvolvido com React + Vite, com foco em Análise de Dados e Automação.

## Requisitos
- Node.js 18 ou superior
- npm

## Executar localmente
```bash
npm install
npm run dev
```
Abra o endereço exibido no terminal (normalmente http://localhost:5173).

## Gerar versão de produção
```bash
npm run build
npm run preview
```

## Personalizações importantes antes de publicar
1. Em `src/main.jsx`, substitua `SEU_EMAIL@exemplo.com` pelo seu e-mail profissional.
2. Confira os links do LinkedIn e GitHub.
3. Adicione links públicos para os repositórios/demonstrações nos projetos. Os campos `link` estão vazios intencionalmente; não foram inventados.
4. Adicione imagens próprias dos dashboards e projetos somente se puder compartilhá-las. Remova nomes, dados e informações internas da empresa.
5. Revise a descrição da formação e da experiência para refletir sua situação atual.
6. Se quiser disponibilizar currículo, coloque o PDF em `public/curriculo.pdf` e adicione um link no componente.

## Publicar
Você pode publicar gratuitamente na Vercel:
1. Crie um repositório no GitHub e envie os arquivos.
2. Entre em https://vercel.com e conecte o GitHub.
3. Importe o repositório.
4. Framework: Vite. Build command: `npm run build`. Output directory: `dist`.
5. Faça o deploy.

Também é possível usar GitHub Pages, configurando o `base` do Vite conforme o nome do repositório.
