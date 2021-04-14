using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
namespace api{

    public class Transmisie: TableEntity
    {
        public Transmisie(string isPacient, string salon)
        {
            this.PartitionKey=isPacient;
            this.RowKey=salon;
        }
        public Transmisie(){}
      
      
    

       


    }

}