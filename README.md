# Tasuta mängude leht

Tasuta mängude leht on React + TypeScript rakendus, mis kasutab Free-to-Play Games API-t. Rakenduses saab vaadata tasuta mänge, otsida mänge nime järgi, filtreerida žanri ja platvormi järgi, sorteerida tulemusi, avada ühe mängu detailvaate ning lisada mänge lemmikutesse.

## Funktsioonid

- Mängude laadimine välisest API-st
- Mängude kuvamine loeteluna
- Otsing mängu nime järgi
- Filtreerimine žanri järgi
- Filtreerimine platvormi järgi
- Sorteerimine nime või väljalaske kuupäeva järgi
- Ühe mängu detailvaade
- Lemmikute süsteem
- Lemmikute salvestamine `localStorage` abil
- Loading state API päringu ajal
- Error handling API vea korral
- Responsive kujundus
- Bootstrap UI raamistik
- React Router navigeerimine

## Kasutatud API

Rakendus kasutab Free-to-Play Games API-t.

API dokumentatsioon:
https://www.freetogame.com/api-doc

Kasutatud endpointid:

```txt
https://www.freetogame.com/api/games
https://www.freetogame.com/api/game?id={id}
```

FreeToGame API ei vaja API key-d.

## Kasutatud tehnoloogiad

- React
- TypeScript
- Vite
- React Router DOM
- Axios
- Bootstrap
- localStorage

## Projekti struktuur

```txt
src/
├── components/
│   ├── ErrorMessage.tsx
│   ├── GameCard.tsx
│   ├── Loading.tsx
│   └── Navbar.tsx
├── pages/
│   ├── About.tsx
│   ├── Favorites.tsx
│   ├── GameDetails.tsx
│   ├── Games.tsx
│   └── Home.tsx
├── services/
│   ├── favoritesService.ts
│   └── gameService.ts
├── styles/
│   └── App.css
├── types/
│   └── Game.ts
├── App.tsx
└── main.tsx
```

## Käivitamine

Paigalda paketid:

```bash
npm install
```

Käivita arendusserver:

```bash
npm run dev
```

Rakendus avaneb tavaliselt aadressil:

```txt
http://localhost:5173
```

## Build

```bash
npm run build
```

## GitHubi lisamine

```bash
git init
git add .
git commit -m "Initial Tasuta mängude leht project"
git branch -M main
git remote add origin SINU_GITHUB_REPO_LINK
git push -u origin main
```
