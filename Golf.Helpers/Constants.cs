
namespace Golf.Helpers
{
  public static class Constants
  {
    public static class Strings
    {
      public static class JwtClaimIdentifiers
      {
        public const string Role = "role", Id = "id";
      }

      public static class JwtClaims
      {
        public const string ApiAccessManager = "api_access_manager";
        public const string ApiAccessProductionTeam = "api_access_production_team";
      }

      public static class Roles
      {
        public const string Manager = "manager";
        public const string ProductionTeam = "prod_team";
      }
    }
  }
}
