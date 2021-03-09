using System.Collections.Generic;
using System.Threading.Tasks;

namespace api{
    public interface IPacienti{
        Task<List<Pacienti>>  GetAll();
        Task CreateNew(Pacienti u);
        Task<List<Pacienti>>  GetByName(string nume);
        Task<Pacienti>  GetById(string nume);
      
    }
}