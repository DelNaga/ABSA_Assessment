using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace ABSA_Assessment.Models
{
    public class Identification
    {
        [Key]
        public int IdentificationId { get; set; }
        public string IdentificationDescription { get; set; }
        public virtual ICollection<Client> Clients { get; set; }
    }
}