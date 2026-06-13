using backend.DB;
using backend.Repositories;
using backend.Service;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("LoparklubbarDb"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173", "http://127.0.0.1:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

//Event
builder.Services.AddScoped<IEventService, EventService>();
builder.Services.AddScoped<IEventRepository, EventRepository>();
//Runclub
builder.Services.AddScoped<IRunclubService, RunclubService>();
builder.Services.AddScoped<IRunclubRepository, RunclubRepository>();

var app = builder.Build();


//Seeded data
using (var scope = app.Services.CreateScope()) 
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated();
    DbSeeder.Seed(db);
}


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
else
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
    
}


app.UseCors("AllowReact");

app.UseHttpsRedirection();
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthorization();

app.MapControllers();

app.Run();
