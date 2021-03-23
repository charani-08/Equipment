using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EquipmentAPI.Models
{
    public class Equipment
    {
        [Key]
        
        public int EquipmentId { get; set; }
        [Required]
        
        public string EquipmentName { get; set; }
        [Required]
        [DataType(DataType.Currency)]
        [Range(1,300000)]
        public int EquipmentCurrency { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime EquipmentPurchasedate { get; set; }
    }
}
