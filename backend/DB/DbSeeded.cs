using backend.Models;

namespace backend.DB;

public static class DbSeeder 
{

  public static void Seed(AppDbContext db) 
  {
    if(!db.Events.Any()) {
      db.Events.AddRange(
        new Event
        { 
            Id = 1, 
            Title= "Vårruset, våren 2026", 
            Description= "Sveriges största motionsturné för tjejer!", 
            Distance= "5km",
            EventLink="https://varruset.se" 
        },
        new Event 
        { 
            Id = 2, 
            Title= "Göteborgsvarvet, 23 maj", 
            Description= "En stad och ett publikstöd som måste upplevas!", 
            Distance= "21km",
            EventLink="https://www.goteborgsvarvet.se" 
        },
        new Event
        { 
            Id = 3, 
            Title= "Ultravasan, 15 Augusti", 
            Description= "Naturupplevelsen med ljusa tallskogar, ringlande vattendrag, upptrampade stigar och pittoreska fäbodmiljöer", 
            Distance= "92km",
            EventLink="https://vasaloppet.se/lopning/ultravasan-90/" 
        },
        new Event
        { 
            Id = 4, 
            Title= "Jönköping Marathon, 29 Augisti", 
            Description= "Spring genom vackra Jönköping och huskvarna för att sedan gå i målgång mitt på munksjöbron", 
            Distance= "21km",
            EventLink="https://jonkopingmarathon.se" 
        },
        new Event
        { 
            Id = 5, 
            Title= "Midnattsloppet, 1 sep 2026", 
            Description= "Ett lopp i flera städer vid midnatt", 
            Distance= "10km",
            EventLink="https://midnattsloppet.com" 
        },
        new Event
        { 
            Id = 6, 
            Title= "Lidingöloppet, 25 sep", 
            Description= "Anta utmaningen i Sveriges största terränglopp!", 
            Distance= "30km",
            EventLink="https://www.lidingoloppet.se" 
        }
      );
    }
    if(!db.Runclubs.Any()) 
    {
      db.Runclubs.AddRange(
        new Runclub 
        { 
            Id = 1, 
            Name= "Stadslöpning + Fika", 
            Description= "Vi är en klubb som springer 3-7 km varje torsdag kl.17.30 och tar en fika efter passet. Vi fokuserar på att få in rörelse i vardagen och gemenskap. Alla är välkomna oavsett nivå!", 
            City="Jönköping", 
            Level="Medel", 
            Time="Torsdagar 17.30", 
            SocialMediaLink="länk", 
            Image = "2.png"
        },
        new Runclub
        { 
            Id = 2, 
            Name= "Nordic Run", 
            Description= "Vi är en klubb som springer 5-10 km varje onsdag kl.18.00. Vi fokuserar på att utvecklas i tempo utifrån sin egna förmåga. Välkommen!", 
            City="Göteborg", 
            Level="Medel", 
            Time="Onsdagar 18.30", 
            SocialMediaLink="länk",
            Image = "4.png"
        },
        new Runclub
        { 
            Id = 3, 
            Name= "Löpning för kvinnor", 
            Description= "Vi är en nystartad klubb som springer 5-15 km varje lördag kl.10.00, stanna gärna en stund efter passet! Vi vill att vi ska få en positiv gemenskap och utveklas tillsammans med andra tjejer!", 
            City="Örebro", 
            Level="Svår", 
            Time="Lördagar 10.00", 
            SocialMediaLink="länk",
            Image = "7.png"
        },
        new Runclub
        { 
            Id = 4, 
            Name= "Långdistans klubben", 
            Description= "Vi är en klubb som fokuserar på att springa lite längre pass, ca 10km-30km. Vii springer i tempon 5-7 min/km, där du kan anpassa din egen förmåga!", 
            City="Stockholm", 
            Level="Svår", 
            Time="Sista lördagen i månaden, 10.00", 
            SocialMediaLink="länk",
            Image = "5.png"
        },
        new Runclub
        { 
            Id = 5, 
            Name= "Borås runclub", 
            Description= "Vi är ett härligt gäng som älskar löpning, kom och va med!", 
            City="Borås", 
            Level="Medel", 
            Time="Onsdagar 18.00", 
            SocialMediaLink="länk",
            Image = "10.png"
        },
        new Runclub
        { 
            Id = 6, 
            Name= "Run-it Gävle", 
            Description= "Vi är en klubb som vill utmana varandra och ständigt förbättra löpningen tillsammans. Vi springer 5-15km, häng på!", 
            City="Gävle", 
            Level="Medel", 
            Time="Söndagar 18.00", 
            SocialMediaLink="länk",
            Image = "3.png"
        },
        new Runclub
        { 
            Id = 7, 
            Name= "Senior running", 
            Description= "Vi riktar oss mot dem som är 55+ och vill hålla igång löpningen. Tempot anpassas efter egen förmåga, välkommen!", 
            City="Sundsvall", 
            Level="Lätt", 
            Time="Fredagar 10.00", 
            SocialMediaLink="länk",
            Image = "9.png"
        },
        new Runclub
        { 
            Id = 8, 
            Name= "Karlstads löpning för nybörjare", 
            Description= "Vi vill bidra till dem som vill börja med löpning och vill springa tillsammans med teknik-tips ska få möjliheten till att komma igång!", 
            City="Karlstad", 
            Level="Lätt", 
            Time="Fredagar 15.00", 
            SocialMediaLink="länk",
            Image = "8.png"
        }
      );
    }

    db.SaveChanges();
  }

}