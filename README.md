# G4F-MRE

Pré requisitos: 

- Node.js 18.19.1
- npm 10.2.1
- npx 10.2.1
- Docker 26.0.2
- Docker-compose 2.26.1
- Git

## Instruções para rodar o projeto sem Docker

Para rodar o projeto localmente (sem Docker e somente o frontend):

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

4. Vá até o arquivo G4F-MRE/cep-e-noticias/src/config/api.ts e descomente a linha 4 e comente a linha 3.

5. Execute o projeto:
```bash
npm start
```

5. Acesse o projeto no navegador:
```bash
http://localhost:3000
```

## Instruções para rodar o projeto com Docker

Para rodar o projeto localmente (com Docker com o frontend e backend):

1. Clone o repositório:
```bash
git clone git@github.com:ailtonaires/G4F-MRE.git
```

2. Clone o repositório:
```bash
git clone clone git@github.com:ailtonaires/G4F-MRE-API.git
```

3. Acesse a pasta do projeto:
```bash
cd G4F-MRE/
```

4. Vá até o arquivo G4F-MRE-API/src/config/apiNoticias.ts e descomente a linha 3 e comente a linha 4.

5. Execute o projeto:
```bash
make run
```

6. Acesse o projeto no navegador:
```bash
http://localhost:3000
```

7. Para derrubar o projeto:
```bash
make down
```

## Estrutura do projeto

```
cep-e-noticias/
.
├── Dockerfile
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── favicon.png
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── static
│       ├── css
│       └── js
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



