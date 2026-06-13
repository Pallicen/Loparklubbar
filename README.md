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
Frontend kommunicerar med backend via fetch i filen `frontend/api.ts`.

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

## Snabb verifiering av hela flödet
Det här är det kortaste sättet för en lärare/reviewer att bekräfta att integrationen fungerar:

1. Starta backend (`dotnet run` i `backend`)
2. Starta frontend (`npm install` och `npm run dev` i `frontend`)
3. Öppna frontend på `http://localhost:5173`
4. Kontrollera att sidan **Events** visar seedade lopp från `GET /api/event`
5. Kontrollera att sidan **Runclubs** visar seedade klubbar från `GET /api/runclub`
6. Skapa ett nytt lopp via **CreateEvent**
7. Gå tillbaka till **Events** och verifiera att det nya loppet visas i listan
8. Skapa en ny löparklubb via **CreateRunClub**
9. Gå tillbaka till **Runclubs** och verifiera att den nya klubben visas i listan

`backend/backend.http` innehåller motsvarande GET/POST-anrop för samma dataflöde så att API:t kan verifieras direkt mot backend.

## Bildhantering för runclubs
Projektet använder i nuläget ingen riktig filuppladdning. I stället sparas `image` som en vanlig sträng i backend, och frontend stödjer nu samma två varianter:

- filnamn som redan finns i `backend/wwwroot/Images`, till exempel `2.png`
- fullständig bild-URL, till exempel `https://...`

Det gör att UI, API och dokumentation använder samma enkla prototyp-flöde utan att låtsas att en riktig uppladdning sker.


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
- Runclub-bilder laddas inte upp till backend som filer i denna version; bildfältet sparas som en sträng enligt avsnittet ovan.
- Projektet är en fungerande prototyp där huvudflödet för att hämta och skapa data finns på plats.

## Live-app
- https://loparklubb-app-kbj78.ondigitalocean.app/