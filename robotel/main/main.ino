#include "Conexiune.h"

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  Serial.println("ss");
  c.Conexiune_init();
   
 Serial.println("ss");

 

}

void loop() {
a();

}

void a()
{
  int i=0;
  while(1)
  {
    i++;
    Serial.println(i);
    if(i>2000){
    Conexiune();
    c.partitionKey=NULL;
    break;}
    
  }
}
