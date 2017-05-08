using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using ABSA_Assessment.Models;

namespace ABSA_Assessment.Context
{
    public class ABSA_DbContext : DbContext
    {
        public ABSA_DbContext()
            : base("name=ABSA_Assessment")
        { }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Identification> IdentificationTypes { get; set; }
    }
}