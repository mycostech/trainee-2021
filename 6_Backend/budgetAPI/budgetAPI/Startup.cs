using budgetAPI.Service;
using budgetAPI.Service.Interface;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace budgetAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "budgetAPI", Version = "v1" });
            });

            services.AddDbContext<budgetDBv2Context>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("BudgetApp")));

            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ITransactionService, TransactionService>();
            services.AddScoped<ITransactionDetailService, TransactionDetailService>();
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<ITypeService, TypeService>();

            // ต่อหน้าบ้าน
            services.AddCors(options =>
                options.AddPolicy("default",
                    builder =>
                        builder.AllowAnyMethod()
                        .AllowAnyHeader()
                        // .AllowAnyOrigin()
                        // .WithOrigins("http://localhost:3000", "http://45.79.23.120:3001", "http://45.79.23.120:3002")
                        .SetIsOriginAllowed(origin => true)
                        .AllowCredentials()));
            // ต่อหน้าบ้าน


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            // ต่อหน้าบ้าน
            app.UseCors("default");
            // ต่อหน้าบ้าน

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "budgetAPI v1"));

            }
            

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

         


        }
    }
}
