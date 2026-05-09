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
            Title= "Midnattsloppet, 1 sep", 
            Description= "Ett lopp i flera städer vid midnatt", 
            EventLink="länk" 
        },
        new Event
        { 
            Id = 2, 
            Title= "Midnattsloppet, 1 sep", 
            Description= "Ett lopp i flera städer vid midnatt", 
            EventLink="länk" 
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
            Time="Onsdagar 18.30", 
            SocialMediaLink="länk",
            Image = "/Images/runclubimg1.png"
        },
        new Runclub
        { 
            Id = 2, 
            Name= "Stadslöpning + Fika", 
            Description= "Vi är en klubb som springer 3-7 km varje torsdag kl.17.30 och tar en fika efter passet. Vi fokuserar på att få in rörelse i vardagen och gemenskap. Alla är välkomna oavsett nivå!", 
            City="Jönköping", 
            Level="Medel", 
            Time="Onsdagar 18.30", 
            SocialMediaLink="länk",
            Image = "/Images/runclubimg2.png"
        }
      );
    }

    db.SaveChanges();
  }

}