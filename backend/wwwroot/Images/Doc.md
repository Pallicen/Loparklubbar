1. Det är samma repo som tidigare inlämningsuppgift, app.html och readme.md är uppdaterad efter behov. 

2. Det finns minst 15 komponenter med hjälp av tsx. 

3. Projektet uppfyller kravet på en Error Boundary-komponent eftersom ErrorBoundary finns implementerad och används som wrapper runt appens komponentträd i App.tsx.

5. PostForm går att återanvända enkelt för framtida enkla formulär där man vill publicera en bild med en text. Det finns även flexibilitet med att ändra utifrån vilken rubrik och placeholder man vill ha, samt flexibilitet med att välja vilka props som ska finnas med. 

6. Jag använder React Context API för att skapa ett gemensamt tillstånd i applikationen. I frontend/auth/context.tsx hanteras autentisering via AuthProvider. Denna wrappas runt applikationen i main.tsx, vilket gör att komponenter som LoginForm, RegisterForm och LoginMeny kan dela samma tillstånd oberoende av var de ligger i React-trädet.

7. Det finns minst 4 endpoints, och dessa är dokumenterade i readme.md-filen. 

8. REST-API är väl avgränsade från UI-logiken/komponenterna. Det finns en felhantering med kodstatus för REST-API vid oväntad svar/ej tillgänglig endpoint.

10. Jag har valt att göra komponenten PostForm.tsx återanvändningasbar. Syftet med komponenten i den här applikationen är att man ska kunna lägga till en bild och en beskrivande text i ett formulär. 
Den kan vara återanvändningsbar i andra applikationer där man vill kunna använda ett formulär för bild och text inmatning. Det finns standardvärden för rubrik, placeholder och submit-knapp, som är frivilliga att ha med då propsen har ett frågetecken, där det i andra applikationer går att ändra utifrån vad som passar. 