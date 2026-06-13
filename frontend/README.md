# Frontend – Loparklubbar

Detta är frontend-delen av projektet Loparklubbar, byggd med React, Vite och TypeScript.

## Syfte
Frontend ansvarar för användargränssnittet och kommunicerar med backend-API:t för att:
- hämta löparklubbar
- hämta event/lopp
- skapa nya löparklubbar
- skapa nya lopp

## Koppling till backend
Frontend använder fetch via filen api.ts och anropar backend på "http://localhost:5020".

Anrop som används:
- GET /api/event
- POST /api/event
- GET /api/runclub
- POST /api/runclub

## Viktiga komponenter
- src/components/EventList.tsx - hämtar och visar event
- src/components/RunclubList.tsx - hämtar och visar runclubs
- src/components/CreateEvent.tsx - formulär för att skapa event
- src/components/CreateRunClub.tsx - formulär för att skapa runclub

## Starta frontend lokalt
npm install
npm run dev

Frontend startar normalt på "http://localhost:5173"

## Viktigt vid lokal körning
För att frontend ska fungera behöver backend köras samtidigt på "http://localhost:5020", eftersom frontendens API-anrop är kopplade dit.

## Nuvarande begränsning
Bilderna för runclubs är inte helt implementerat som riktig filuppladdning till backend. Just nu finns ett formulärfält för bildval i frontend, men backend tar inte emot och sparar uppladdade bildfiler korrekt.