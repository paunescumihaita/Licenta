using System.Collections.Generic;
using System.Threading.Tasks;

namespace api{
    public interface IComanda{
        Task<List<Comanda>>  GetAll();
        Task CreateNew(Comanda u);
       
      
    }
}