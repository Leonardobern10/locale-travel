# Locale Travel

Projeto front-end desenvolvido em React + TypeScript, com Vite e TailwindCSS, focado em responsividade, acessibilidade e boas práticas de desenvolvimento. O sistema simula uma landing page para uma empresa de viagens corporativas, com seções informativas, formulário de contato, valores, ofertas e diferenciais.

## Índice

- [Demonstração](#demonstração)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)
- [Testes](#testes)
- [Padrões e Boas Práticas](#padrões-e-boas-práticas)
- [Acessibilidade e Responsividade](#acessibilidade-e-responsividade)
- [Contribuição](#contribuição)

## Demonstração

<p align="center">
  <img src="public/Captura%20de%20tela%202025-07-09%20164214.png" alt="Tela principal" width="400"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20164235.png" alt="Seção de valores" width="400"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20165054.png" alt="Formulário de contato" width="400"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20165104.png" alt="Ofertas" width="400"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20165117.png" alt="Diferenciais" width="400"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20165129.png" alt="Mobile" width="200"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20165137.png" alt="Mobile" width="200"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20165148.png" alt="Mobile" width="200"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20165159.png" alt="Mobile" width="200"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20165230.png" alt="Mobile" width="200"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20165238.png" alt="Mobile" width="200"/>
  <img src="public/Captura%20de%20tela%202025-07-09%20165300.png" alt="Mobile" width="200"/>
</p>

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Estrutura de Pastas

```
├── public/
├── src/
│   ├── animation/           # Hooks e utilitários de animação
│   ├── assets/              # Imagens e ícones
│   ├── components/          # Componentes reutilizáveis
│   │   ├── ContactUs/
│   │   ├── Footer/
│   │   ├── Invite/
│   │   ├── LocaleWay/
│   │   ├── OurValue/
│   │   ├── Presentation/
│   │   ├── ReadAbout/
│   │   ├── WeDo/
│   │   ├── WeOffer/
│   ├── data/                # Dados estáticos e mockados
│   ├── hooks/               # Hooks customizados
│   ├── tests/               # Testes unitários
│   ├── types/               # Tipos TypeScript
│   ├── ui/                  # Componentes de UI genéricos
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Como Rodar o Projeto

1. **Clone o repositório:**
     ```sh
     git clone https://github.com/Leonardobern10/locale-travel
     cd locale-travel
     ```
2. **Instale as dependências:**
     ```sh
     npm install
     ```
3. **Rode o projeto em modo desenvolvimento:**
     ```sh
     npm run dev
     ```
4. **Acesse:**
     - [http://localhost:5173](http://localhost:5173)

---

## Testes

- Para rodar todos os testes unitários:
     ```sh
     npm run test
     ```
- Os testes cobrem renderização, estilização, acessibilidade e integração dos principais componentes.
- Utilize `data-testid` para facilitar a seleção de elementos nos testes.

## Padrões e Boas Práticas

- Componentização e reutilização de código.
- Tipagem forte com TypeScript.
- Separação de dados, lógica e apresentação.
- Uso de hooks customizados para lógica compartilhada.
- Responsividade com TailwindCSS (`flex-col md:flex-row`, breakpoints, etc).
- Acessibilidade: uso de alt, labels, campos controlados e roles semânticos.
- Testes automatizados com cobertura relevante.

## Acessibilidade e Responsividade

- Layout mobile-first, adaptando para desktop com breakpoints do Tailwind.
- Imagens e ícones com alt e roles apropriados.
- Formulários com labels, validação e feedback visual.
- Navegação por teclado garantida nos principais componentes.

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`
4. Push para o fork: `git push origin minha-feature`
5. Abra um Pull Request

## Licença

Este projeto é open-source e está sob a licença MIT.
