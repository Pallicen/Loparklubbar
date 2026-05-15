# Loparklubbar
En plattform för Sveriges löparklubbar och lopp att synliggöra sig

# Projektnamn
RunWithUs

## Beskrivning
Detta är en React-applikation byggd med Vite och Typescript. Applikationen är en prototyp på delar av produktidén som visar hur designen kommer se ut och huvudsyftet med vad applikationen kommer användas för. Det finns en startsida med beskrivande och inspirerande text om sidan för användare, det finns en knapp för att skapa konto och för att logga in, sedan finns det en meny för att komma till löparklubbar och arrangerade lopp. Som inloggad användare finns det en funktion för att lägga till löparklubbar och lopp, samt att en prototyp av en profil visas.

## Funktioner
- Visar UI på hemsidan
- Navigering mellan sidor
- Enkel interaktion

## Installation
1. Klona projektet
2. Öppna 2 terminaler
3. I första terminal - gå till frontend-mappen:
   cd frontend
   npm install
   npm run build
   npm run dev
4. I andra terminal - gå till backned-mappen:
   cd backned
   dotnet run

## Tekniker
- React
- TypeScript
- Vite
- Dotnet
- C#

## Frontend + Backend
Hur samverkar dessa?
React-frontend tar hand om användargränssnittet, medans MVC-backend är ett api som levererar data. 
Frontend gör HTTP-anrop med fecth till api-endponts och backend tar emot dessa anrop, bearbetar datan och returnerar data som JSON. 

## Endpoints
API Anrop: 

Hämta alla lopp: api/event
Hämta ett lopp: api/event/{id}
Posta ett lopp: api/event

Hämta alla löparklubbar: api/runclub
Hämta en löparklubb: api/runclub/{id}
Posta en löparklubb: api/runclub

# Live-App
https://loparklubb-app-kbj78.ondigitalocean.app/