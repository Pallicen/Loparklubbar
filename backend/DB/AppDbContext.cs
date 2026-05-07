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
}