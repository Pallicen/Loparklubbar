En plattform för Sveriges löparklubbar och lopp att synliggöra sig.

## Projektnamn
RunWithUs

## Om projektet
Detta projekt består av en frontend byggd med React, Vite och TypeScript, samt en backend byggd med ASP.NET Core Web API och Entity Framework Core.

Syftet med applikationen är att visa upp löparklubbar och lopp, samt göra det möjligt att lägga till nya löparklubbar och event/lopp via formulär i frontend som skickar data till backend-API:t.

## Projektstruktur
- Frontend är en React-applikation med användargränssnitt
- Backend består av ASP.NET Core Web API med controllers, services, repositories och seedad data.

## Hur frontend och backend hänger ihop
Frontend kommunicerar med backend via fetch i filen frontend/api.ts.

Frontend använder följande API-anrop:
- GET /api/event – hämtar alla events/lopp
- POST /api/event – skapar ett nytt event/lopp
- GET /api/runclub – hämtar alla löparklubbar
- POST /api/runclub – skapar en ny löparklubb

Dessa anrop används i frontend-komponenterna:
- EventList.tsx – hämtar och visar lopp
- RunclubList.tsx – hämtar och visar löparklubbar
- CreateEvent.tsx – skickar formulärdata till backend för att skapa ett lopp
- CreateRunClub.tsx – skickar formulärdata till backend för att skapa en löparklubb

## Backend-arkitektur
Backend är uppdelad i flera lager för att göra lösningen tydlig:
- Controllers tar emot HTTP-anrop.
- Services innehåller logik och mappar mellan modeller och DTO:er.
- Repositories ansvarar för dataåtkomst
- AppDbContext hanterar databasen via Entity Framework Core

Projektet använder en InMemory-databas, vilket betyder att datan lagras i minnet när applikationen körs. Vid omstart återställs databasen och den seedade datan läser in igen.

## API-endpoints
## Event
- GET /api/event
- GET /api/event/{id}
- POST /api/event

## Runclub
- GET /api/runclub
- GET /api/runclub/{id}
- POST /api/runclub

## Så kör du projektet lokalt
Frontend och backend körs i varsin terminal.

## 1. Starta backend
cd backend
dotnet restore
dotnet run

Backend körs lokalt på:
- http://localhost:5020

## 2. Starta frontend
cd frontend
npm install
npm run dev

Frontend körs lokalt på:
- http://localhost:5173


## Tekniker
- React
- TypeScript
- Vite
- ASP.NET Core Web API
- C#
- Entity Framework Core
- InMemory Database

## Begränsningar i nuvarande version
- Backend använder en InMemory-databas och sparar därför inte data permanent.
- Runclub-bilder är ännu inte uppladdade till backend som riktiga filer. Fältet "image" skickas idag som text, vilket betyder att bildhanteringen inte är fullt färdigkopplad mellan frontend och backend.
- Projektet är en fungerande prototyp där huvudflödet för att hämta och skapa data finns på plats.

## Live-app
https://loparklubb-app-kbj78.ondigitalocean.app/