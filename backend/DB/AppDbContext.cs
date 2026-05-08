using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.DB;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<Event> Events => Set<Event>();
    public DbSet<Runclub> Runclubs => Set<Runclub>();


//   protected override void OnModelCreating(ModelBuilder modelBuilder)
//   {
//     modelBuilder.Entity<Event>().HasData(
//         new Event 
//         { 
//             Id = 1, 
//             Title= "Midnattsloppet, 1 sep", 
//             Description= "Ett lopp i flera städer vid midnatt", 
//             EventLink="länk" 
//         },
//         new Event
//         { 
//             Id = 2, 
//             Title= "Midnattsloppet, 1 sep", 
//             Description= "Ett lopp i flera städer vid midnatt", 
//             EventLink="länk" 
//         }
//     );
  
//     modelBuilder.Entity<Runclub>().HasData(
//         new Runclub 
//         { 
//             Id = 1, 
//             Name= "Stadslöpning + Fika", 
//             Description= "Vi är en klubb som springer 3-7 km varje torsdag kl.17.30 och tar en fika efter passet. Vi fokuserar på att få in rörelse i vardagen och gemenskap. Alla är välkomna oavsett nivå!", 
//             City="Jönköping", 
//             Level="Medel", 
//             Time="Onsdagar 18.30", 
//             SocialMediaLink="länk",
//             Image = ""
//         },
//         new Runclub
//         { 
//             Id = 2, 
//             Name= "Stadslöpning + Fika", 
//             Description= "Vi är en klubb som springer 3-7 km varje torsdag kl.17.30 och tar en fika efter passet. Vi fokuserar på att få in rörelse i vardagen och gemenskap. Alla är välkomna oavsett nivå!", 
//             City="Jönköping", 
//             Level="Medel", 
//             Time="Onsdagar 18.30", 
//             SocialMediaLink="länk",
//             Image = ""
//         }
//     );
//    }
}