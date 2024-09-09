using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Dotnet server started!");

// Show a startup message
Console.WriteLine("Dotnet server has started. Listening on port 5000...");

app.Run();
