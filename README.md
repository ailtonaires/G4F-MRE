# G4F-MRE

Pré requisitos: 

- Node.js 18.19.1
- npm 10.2.1
- npx 10.2.1
- Docker 26.0.2
- Docker-compose 2.26.1
- Git

## Instruções para rodar o projeto sem Docker

Para rodar o projeto localmente (sem Docker):

1. Clone o repositório:
```bash
git clone git@github.com:ailtonaires/G4F-MRE.git
```

2. Acesse a pasta do projeto:
```bash
cd G4F-MRE
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o projeto:
```bash
npm start
```

5. Acesse o projeto no navegador:
```bash
http://localhost:3000
```

## Instruções para rodar o projeto com Docker

Para rodar o projeto localmente (com Docker):

1. Clone o repositório:
```bash
git clone git@github.com:ailtonaires/G4F-MRE.git
```

2. Acesse a pasta do projeto:
```bash
cd G4F-MRE/cep-e-noticias/
```

3. Execute o projeto:
```bash
docker-compose up
```

4. Acesse o projeto no navegador:
```bash
http://localhost:3000
```

## Estrutura do projeto

```
cep-e-noticias/
.
├── Dockerfile
├── Dockerfile.dev
├── README.md
├── docker-compose.yml
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── favicon.png
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── assets
│   ├── config
│   │   └── api.ts
│   ├── index.css
│   ├── index.tsx
│   ├── pages
│   │   ├── BuscaCep
│   │   ├── Container
│   │   └── Noticias
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
└── tsconfig.json



```



