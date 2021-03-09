using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;


namespace api{
    public class TratamentRepo : ITratament
    {
        private CloudTableClient Client;
        private CloudTable Table;
        public TratamentRepo()
        {
            Task.Run(async () => {await InitTable() ;})
            .GetAwaiter()
            .GetResult();
        }
        public async Task CreateNew(Tratament u)
        {
            u.icon=0;
            var insertop =TableOperation.Insert(u);
            await Table.ExecuteAsync(insertop);
        }
       public async Task<List<Tratament>> Update(string a,int b)
       {
           var u = new List<Tratament>();
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach( Tratament i in u)
            {
                if(a==i.PartitionKey)
                {
                    i.icon=b;
                    var operation = TableOperation.Replace(i);
                    await Table.ExecuteAsync(operation);
                }
            }

           return u;
       }

        public async Task<List<Tratament>> GetAll()
        {
            var u = new List<Tratament>();
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            return u;

        }

         public async Task<List<Tratament>> Get()
        {
            var u = new List<Tratament>();
            var v= new List<Tratament>();
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach(Tratament i in u)
            {
                if(i.icon==1)
                {
                    v.Add(i);
                }
            }


            return v;

        }
        public async Task<List<Tratament>> GetById(string id)
        {
            var u = new List<Tratament>();
            var v = new List<Tratament>();
            TableQuery<Tratament> query=new TableQuery<Tratament>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Tratament> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach(Tratament i in u)
            {
                if(i.RowKey==id)
                v.Add(i);
            }

            return v;

        }

        private async  Task InitTable()
        {
            string conect ="DefaultEndpointsProtocol=https;AccountName=datc;AccountKey=IK3FdIeFdddY9G4O4iRo/z+68xaHta1/pvoI4Bo4v2rDkCYJdLCedfpPOtSSCjisEdjdw0fFYwScoHKmvZbcvQ==;EndpointSuffix=core.windows.net";
            var acc=CloudStorageAccount.Parse(conect);
            Client=acc.CreateCloudTableClient();
            Table=Client.GetTableReference("tratament");
            await Table.CreateIfNotExistsAsync();
        }

       
    }
}