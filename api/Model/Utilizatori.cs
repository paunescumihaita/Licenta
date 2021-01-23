using Microsoft.WindowsAzure.Storage.Table;

namespace api{

    public class Utilizatori: TableEntity
    {
        public Utilizatori(string username, string parola)
        {
            this.PartitionKey=username;
            this.RowKey=parola;
        }
        public Utilizatori(){}
        public string nume{get;set;}
        public string prenume{get;set;}
        public string CNP{get;set;}


    }

}