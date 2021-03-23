using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EquipmentAPI.Models
{
    public interface IEquipmentRepository
    {
        void Add(Equipment equipment);
        IEnumerable<Equipment> GetAll();
        Equipment Find(int equipmentId);
       Equipment Remove(int equipmentId);


        void Update(Equipment equipment);
    }
}
