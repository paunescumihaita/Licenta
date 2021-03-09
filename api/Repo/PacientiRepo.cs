using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;

namespace api{
    public class PacientiRepo : IPacienti
    {
        private CloudTableClient Client;
        private CloudTable Table;
        public PacientiRepo()
        {
            Task.Run(async () => {await InitTable() ;})
            .GetAwaiter()
            .GetResult();
        }
        public async Task CreateNew(Pacienti u)
        {
            var insertop =TableOperation.Insert(u);
            await Table.ExecuteAsync(insertop);
        }

        public async Task<List<Pacienti>> GetAll()
        {
            var u = new List<Pacienti>();
            TableQuery<Pacienti> query=new TableQuery<Pacienti>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Pacienti> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            return u;

        }

         public async Task<List<Pacienti>> GetByName(string nume)
        {
            var u = new List<Pacienti>();
            var v = new List<Pacienti>();
            TableQuery<Pacienti> query=new TableQuery<Pacienti>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Pacienti> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach(Pacienti p in u)
            {
                if(p.RowKey.Length>nume.Length ||p.RowKey.Length==nume.Length ){
                string a=p.RowKey.Substring(0,nume.Length);
                Console.WriteLine(nume+"   "+a);
                if(a==nume)
                v.Add(p);
                }
                   
            }
         




            return v;

        }
        public async Task<Pacienti>  GetById(string nume)
        {
              var u = new List<Pacienti>();
              
            TableQuery<Pacienti> query=new TableQuery<Pacienti>();
            TableContinuationToken token=null;
            do{
                TableQuerySegment<Pacienti> resultSegment=await Table.ExecuteQuerySegmentedAsync(query,token);
                u.AddRange(resultSegment.Results);
            }while(token!=null);
            foreach( Pacienti i in u)
            {
                if(i.PartitionKey==nume)
                return i;

            }
            return null;

       

        }
       

        private async  Task InitTable()
        {
            string conect ="DefaultEndpointsProtocol=https;AccountName=datc;AccountKey=IK3FdIeFdddY9G4O4iRo/z+68xaHta1/pvoI4Bo4v2rDkCYJdLCedfpPOtSSCjisEdjdw0fFYwScoHKmvZbcvQ==;EndpointSuffix=core.windows.net";
            var acc=CloudStorageAccount.Parse(conect);
            Client=acc.CreateCloudTableClient();
            Table=Client.GetTableReference("pacienti");
            await Table.CreateIfNotExistsAsync();
        }

       
    }
}