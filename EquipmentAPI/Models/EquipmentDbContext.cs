using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EquipmentAPI.Models
{
    public class EquipmentDbContext : DbContext
    {
        public EquipmentDbContext(DbContextOptions<EquipmentDbContext> options) : base(options)
        {

        }
        public DbSet<Equipment>Equipments { get; set; }
    }
}

