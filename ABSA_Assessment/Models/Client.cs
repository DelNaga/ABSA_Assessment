using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace ABSA_Assessment.Models
{
    public class Client
    {
        [Key]
        public int ClientId { get; set; }
        public string Surname { get; set; }
        public string FirstName { get; set; }
        public int IdentificationId { get; set; } 
        //To avoid eager loading of the identification type model with each client.
        public virtual Identification IdentificationType { get; set; }
        public string IdNumber { get; set; }
        //Date remains local, as DOB is not subject to UTC corrections.
        public DateTime DateOfBirth { get; set; }
    }
}