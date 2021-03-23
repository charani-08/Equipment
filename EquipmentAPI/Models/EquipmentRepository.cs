using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EquipmentAPI.Models
{
    public class EquipmentRepository : IEquipmentRepository
    {
        private readonly EquipmentDbContext _equipmentDbContext;
        public EquipmentRepository(EquipmentDbContext equipmentDbContext)
        {
            _equipmentDbContext = equipmentDbContext;
        }


        public void Add(Equipment equipment)
        {
            _equipmentDbContext.Equipments.Add(equipment);
            _equipmentDbContext.SaveChanges();
        }

        public Equipment Find(int equipmentId)
        {
            var data = _equipmentDbContext.Equipments.Find(equipmentId);
            return data;
        }

        public IEnumerable<Equipment> GetAll()
        {
            return _equipmentDbContext.Equipments.ToList();
        }

        public Equipment Remove(int equipmentId)
        {
            var equipdelete = Find(equipmentId);
            _equipmentDbContext.Equipments.Remove(equipdelete);
            _equipmentDbContext.SaveChanges();
            return equipdelete;
        }



        public void Update(Equipment equipment)
        {
            _equipmentDbContext.Entry(equipment).State = EntityState.Modified;
            _equipmentDbContext.SaveChanges();
        }
    }
}

    

