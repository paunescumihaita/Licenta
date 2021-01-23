using Microsoft.WindowsAzure.Storage.Table;

namespace api{

    public class LogInStub: TableEntity
    {
        public LogInStub(string username,string parola )
        {
            this.PartitionKey=username;
            this.RowKey=parola;
        }
        public LogInStub(){}
    }
}
