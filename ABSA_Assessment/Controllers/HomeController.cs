using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ABSA_Assessment.Context;
using ABSA_Assessment.Models;

namespace ABSA_Assessment.Controllers
{
    public class HomeController : Controller
    {
        private ABSA_DbContext mDataContext;

        public HomeController()
        {
            mDataContext = new ABSA_DbContext();
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetClient()
        {
            return  Json(mDataContext.Clients.Select(x=>new {x.FirstName,x.Surname }).FirstOrDefault(),JsonRequestBehavior.AllowGet);
        }


        public ActionResult SetClient(Client input)
        {
            mDataContext.Clients.Add(input);
            mDataContext.SaveChanges();
            return Json(mDataContext.Clients.FirstOrDefault());
        }
    }
}