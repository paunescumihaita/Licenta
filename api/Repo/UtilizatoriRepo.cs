using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;


namespace api{
    public class UtilizatoriRepo : IUtilizatori
    {
        private CloudTableClient Client;
        private CloudTable Table;
        public UtilizatoriRepo()
        {
            Task.Run(async () => {await InitTable() ;})
            .GetAwaiter()
            .GetResult();
        }
        public async Task CreateNew(Utilizatori u)
        {
            var insertop =TableOperation.Insert(u);
            await Table.ExecuteAsync(insertop);
        }

        public async Task<List<Utilizatori>> GetAll()
        {
            var u = new List<Utilizatori>();
            TableQuery<Utilizatori> query=new TableQuery<Utilizatori>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Utilizatori> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            return u;

        }
        public async Task<bool>LogIn(LogInStub i)
        {
            var u = new List<Utilizatori>();
            TableQuery<Utilizatori> query=new TableQuery<Utilizatori>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Utilizatori> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);

            foreach(Utilizatori j in u)
            {
                if(j.PartitionKey==i.PartitionKey &&
                   j.RowKey==i.RowKey)
                   return true;
            }


            return false;

        }


        private async  Task InitTable()
        {
            string conect ="DefaultEndpointsProtocol=https;AccountName=datc;AccountKey=IK3FdIeFdddY9G4O4iRo/z+68xaHta1/pvoI4Bo4v2rDkCYJdLCedfpPOtSSCjisEdjdw0fFYwScoHKmvZbcvQ==;EndpointSuffix=core.windows.net";
            var acc=CloudStorageAccount.Parse(conect);
            Client=acc.CreateCloudTableClient();
            Table=Client.GetTableReference("utilizatori");
            await Table.CreateIfNotExistsAsync();
        }

       
    }
}