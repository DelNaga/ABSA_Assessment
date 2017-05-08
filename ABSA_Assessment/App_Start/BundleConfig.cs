using System.Web;
using System.Web.Optimization;

namespace ABSA_Assessment
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular")
            .Include("~/Scripts/angular.min.js")
            .Include("~/Scripts/angular-route.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/ABSA_Assessment")
            .IncludeDirectory("~/Scripts/Controllers", "*.js")
            .Include("~/Scripts/ABSA_Assessment.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
