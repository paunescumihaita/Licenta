using System.Collections.Generic;
using System.Threading.Tasks;

namespace api{
    public interface IUtilizatori{
        Task<List<Utilizatori>>  GetAll();
        Task CreateNew(Utilizatori u);
        Task<bool>LogIn(LogInStub i);
    }
}