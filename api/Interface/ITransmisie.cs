using System.Collections.Generic;
using System.Threading.Tasks;

namespace api{
    public interface ITransmisie{
        Task<List<Transmisie>>  GetAll();
        Task CreateNew(Transmisie u);
        Task<string> add(string a,string b);
        Task Delete(string a,string b);
       
      
    }
}