# Frontend – Loparklubbar

Detta är frontend-delen av projektet Loparklubbar, byggd med React, Vite och TypeScript.

## Syfte
Frontend ansvarar för användargränssnittet och kommunicerar med backend-API:t för att:
- hämta löparklubbar
- hämta event/lopp
- skapa nya löparklubbar
- skapa nya lopp

## Koppling till backend
Frontend använder fetch via filen `frontend/api.ts`.

- Lokalt proxas `/api` och `/Images` automatiskt från Vite till `http://localhost:5020`
- Vid separat deployment kan backend-adressen sättas via `VITE_API_BASE_URL`

Anrop som används:
- GET /api/event
- POST /api/event
- GET /api/runclub
- POST /api/runclub

## Viktiga komponenter
- src/components/EventList.tsx som hämtar och visar event
- src/components/RunclubList.tsx som hämtar och visar runclubs
- src/components/CreateEvent.tsx som skickar formulär för att skapa event
- src/components/CreateRunClub.tsx som skickar formulär för att skapa runclub

## Starta frontend lokalt
npm install
npm run dev

Frontend startar normalt på "http://localhost:5173"

## Viktigt vid lokal körning
För att frontend ska fungera behöver backend köras samtidigt på `http://localhost:5020`, eftersom Vites utvecklingsserver proxyar vidare API- och bildanrop dit.

## Bildhantering i nuvarande prototyp
Runclub-formuläret använder nu samma kontrakt som backend redan stödjer: fältet `image` sparas som en sträng.

- Ange antingen ett filnamn som redan finns i `backend/wwwroot/Images` (t.ex. `2.png`)
- eller ange en fullständig bild-URL (`https://...`)

Det finns alltså ingen riktig filuppladdning i denna version, men frontend, backend och dokumentationen använder nu samma enkla lösning.