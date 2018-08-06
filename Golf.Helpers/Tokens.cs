

using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Golf.Models;
using Golf.Models.Enum;
using Newtonsoft.Json;

namespace Golf.Helpers
{
    public class Tokens
    {
      public static async Task<string> GenerateJwt(ClaimsIdentity identity, IJwtFactory jwtFactory,string userName, JwtIssuerOptions jwtOptions, JsonSerializerSettings serializerSettings, Role role)
      {
        var response = new
        {
          id = identity.Claims.Single(c => c.Type == "id").Value,
          auth_token = await jwtFactory.GenerateEncodedToken(userName, identity, role),
          expires_in = (int)jwtOptions.ValidFor.TotalSeconds
        };

        return JsonConvert.SerializeObject(response, serializerSettings);
      }
    }
}
