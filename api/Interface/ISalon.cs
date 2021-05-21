using System.Collections.Generic;
using System.Threading.Tasks;

namespace api{
    public interface ISalon{
        Task<List<Salon>>  GetAll();
        Task CreateNew(Salon u);
        Task<string> add(string a,string b);
        Task Delete(string a,string b);
       
      
    }
}