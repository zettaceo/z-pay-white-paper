# Z-PAY — Programa Founding Clients

Página do programa Founding Clients da Z-PAY, parte do ecossistema ZETTA.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript 5.7**
- Deploy: **Vercel**

## Setup Local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

1. Faça push do repositório no GitHub
2. Conecte o repo na [Vercel](https://vercel.com)
3. Framework preset: **Next.js** (detectado automaticamente)
4. Deploy automático a cada push na `main`

## Estrutura

```
src/
├── app/
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Página principal
├── components/
│   ├── Divider.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── RevealObserver.tsx
│   ├── ScrollProgress.tsx
│   └── sections/
│       ├── Compliance.tsx
│       ├── Diferenciacao.tsx
│       ├── Ecossistema.tsx
│       ├── FoundingClients.tsx
│       ├── PainelContador.tsx
│       ├── Posicionamento.tsx
│       ├── Regulatorio.tsx
│       └── Roadmap.tsx
public/
└── assets/logo/zpay-logo.png
```

## Licença

Propriedade de ZETTA WORD. Todos os direitos reservados.
