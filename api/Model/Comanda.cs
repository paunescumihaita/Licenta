using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
namespace api{

    public class Comanda: TableEntity
    {
        public Comanda(string isPacient, string salon)
        {
            this.PartitionKey=isPacient;
            this.RowKey=salon;
        }
        public Comanda(){}
      
      
    

       


    }

}