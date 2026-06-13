1.	Ditt inlämnade git-repo är samma som i tidigare inlämningsuppgift, men med tydligt noterat hur versionshantering mellan de olika "releaserna" är hanterade. Tex med en branching-strategi eller releaser. 

Mitt git-repo är samma som tidigare. Jag lade till två brancher utöver main, som är "vecka-3" och "next". jag jobbar i vecka-3 branchen och skickar det till next och sedan när allt från veckan är klart i next branchen så skickar jag det till main. Till varje kommande vecka gör jag en ny branch, t.ex. vecka-4, vecka-5 osv, som sedan skickas till next innan main. 

2.	Ditt inlämnade git-repo ska innehålla en readme.md fil som kort beskriver vad som behöver göras för att man ska kunna bygga och besöka applikationen via webbläsaren. Den givna beskrivningen ska vara utförlig och korrekt.

Jag har i README.md filen beskrivit vad det är för typ av projekt och hur man bygger och startar det i webbläsaren. 

3.	Ditt repo skall vara lanserad (produktionssatt) och readme.md filen innehåller en länk till den publicerade applikationen.

Mitt repo är lanserat och det finns en länk i README.md filen för att besöka den publicerade applikationen.

4.	Din källkod (javascript-filer, och ev. andra filer) ska kunna transpileras med ett byggsystem beskrivet i readme.md-filen.

Ja, det går att transpilera och bygga källkoden med hjälp av kommando (npm run build och npm run dev) beskrivet i README.med filen.

5.	Endast lämpliga filer som inte kan genereras av byggsystemet, eller som kan installeras, ska vara versionshanterade.

Projektet har .gitignore som exkluderar de olämpliga genererade filer. 

6.	Projektet innehåller en fil döpt till krav.md som innehåller en lista med svar på de krav som finns för App med en beskrivning över vilka krav som är lösta med en kort förklaring hur.

Här finns filen krev.md där kraven för projektet för veckan står med, samt mina svar som beskriver de lösta kraven. 

7. När app besöks i webbläsaren ska din prototyp renderas med React.

Ja, när användare kör "npm run dev" ritar React upp projektet. 

8.	React-trädet som renderas som ska bestå av minst 5st komponenter som du skrivit själv och som finns med i källkoden. (alla komponenter behöver inte renderas samtidigt)

Jag har fler än 5 komponenter som ritas upp och används. Det är Events.tsx, Home.tsx, LoginForm.tsx, RegisterForm.tsx, Runclubs.tsx, EventCard.tsx, LoginMeny.tsx, Meny.tsx, RunclubCard.tsx, ScrollToTop.tsx. 

9.	Dina React komponenter är skrivna med JSX syntaxen.

Dem är ej skrivna i JSX syntaxen, men dem är skrivna i TSX syntaxen.

15.	I app används egen css, eller ett bibliotek för att ge dina komponenter stil och form.

Jag använder css i flera filer där en är för varje sida av applikatonen för färg, form, storlek m.m.

16.	I app används egen css för att ge dina komponenter rörelser.

Jag använder animationer på knapparna. På "Logga in" och "Skapa konto" har jag en hover effekt där knappen ändrar färg-nyans. På "Hem", "Löparklubbar" och "Event" har jag en hover effekt där en linje åker från mitten till kanterna. 