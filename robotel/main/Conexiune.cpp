#include "Conexiune.h"

SoftwareSerial esp8266 (11,3);//Arduino TX (ESP8266 RX) connected to Arduino Pin 2, Arduino RX(ESP8266 TX) connected to Arduino Pin 3
Con c;
String st[5];
String dt[5];
int parf=0;
String getValue(String data, char separator, int index);
int par;
int func(char*p);
String Con::atCommand(String command, int timeout) {
    String response = "";
    esp8266.println(command);
  Serial.begin(9600);
    long int time = millis();

    while( (time+timeout) > millis() ) {
        while(esp8266.available()) {
            char c = esp8266.read();
            response += c;
        }
    }
    
    Serial.println(response);

    return response;
}



void Con::setupESP8266() {
    atCommand("AT+RST", timeout);
    atCommand("AT+CWMODE=1", timeout);
}

void Con::connectToWiFi() {
    String connect = "AT+CWJAP=\"" +ssid+"\",\"" + password + "\"";
    atCommand(connect, 6000);
    atCommand("AT+CIFSR", timeout);
}

void Con::startTCPConnection() {
  String connect = "AT+CIPSTART=\"TCP\",\"" + server + "\",80";
    atCommand(connect, timeout);
}

void Con::closeTCPConnection() {
    atCommand("AT+CIPCLOSE", timeout);
}

String Con::sendGetRequest() {
    atCommand("AT+CIPSEND=" + requestLength, timeout);
    String response = atCommand(request, 6000);
    return response;
}

void Con::Conexiune_init()
{
    
    esp8266.begin(9600);
    setupESP8266();
    connectToWiFi();
}


void Con::GetJson()
{

    String respon;
    startTCPConnection();

    respon=sendGetRequest();
 //   Serial.println("fffff"+respon);
    int i;
    String a;
    char v[300];
    Serial.print("kk");
     Serial.println(respon);
    for(i=0;i<respon.length();i++){
        if(respon.charAt(i)=='['){
            a= respon.substring(i+1,respon.length()-8);
            a.toCharArray(v,respon.length()-8-i);
            break;
        }
    }
  
    Serial.println("-------------------");
    Serial.println(v);
    DeserializationError error = deserializeJson(doc, v);
    if (error) {
        Serial.print(F("deserializeJson() failed: "));
        Serial.println(error.f_str());
        Serial.println("fdddddddddddddddd");
        return;
    }
    
    partitionKey = doc["partitionKey"];
  
    rowKey = doc["rowKey"];



Serial.println(c.partitionKey);

    Serial.println(c.rowKey);
    parf=func(partitionKey);
    for(int i=0;i<=parf+1;i++){
    
    st[i]=getValue(partitionKey,'|',i);
    Serial.println(st[i]);

    dt[i]=getValue(rowKey,'|',i);
 
    }
   

    Serial.println(partitionKey);

    Serial.println(rowKey);
    closeTCPConnection();
}
extern String path;

void Conexiune()
{
  


  c.path=path1;
  c.request = String("GET ") + c.path + " HTTP/1.1\r\n" + "Host:" + server + "\r\n" + "Connection: keep-alive\r\n\r\n";
  c.requestLength = String(c.request.length());
 

  while(c.partitionKey == NULL )
  {
    Serial.println("------------------");

    c.GetJson();
    Serial.println("------------------");
  }
}


String getValue(String data, char separator, int index)
{
    int found = 0;
    int strIndex[] = { 0, -1 };
    int maxIndex = data.length() - 1;

    for (int i = 0; i <= maxIndex && found <= index; i++) {
        if (data.charAt(i) == separator || i == maxIndex) {
            found++;
            strIndex[0] = strIndex[1] + 1;
            strIndex[1] = (i == maxIndex) ? i+1 : i;
        }
    }
    return found > index ? data.substring(strIndex[0], strIndex[1]) : "";
}





void startTCPConnection() {
  String connect PROGMEM = "AT+CIPSTART=\"TCP\",\"" + server + "\",80";
  c.atCommand(connect, timeout);
}

void closeTCPConnection() {
  c.atCommand("AT+CIPCLOSE", timeout);
}

String sendGetRequestclose(String request12,String len) {

 
  c.atCommand("AT+CIPSEND="+len ,  timeout);
  String response  = c.atCommand(request12, 6000);
  Serial.println("jjjjjjjj");


  return response;
}


void stergere()
{
  digitalWrite(2, HIGH);
  String a="/c.php?p="+String(c.partitionKey)+"&r="+String(c.rowKey);

  
 
   
    String request = String("GET ") +a + " HTTP/1.1\r\n" + "Host:" + server + "\r\n" + "Connection: keep-alive\r\n\r\n";
   String requestLength =String( request.length());
  Serial.println( c.request);

  
    String respon;
    startTCPConnection();

    respon=sendGetRequestclose(request,requestLength);

    closeTCPConnection();

//  //while(c.partitionKey == NULL )
//  {
//    Serial.println("------------------");
//
//    c.GetJson();
//    Serial.println("------------------");
//  }
}


void adaugare()
{

   String a="/d.php?p="+dt[par]+"&r="+dt[par];



    String b = String("GET ") +a + " HTTP/1.1\r\n" + "Host:" + server + "\r\n" + "Connection: keep-alive\r\n\r\n";
  String r = "99";
while(1){
  startTCPConnection();
String   res=sendGetRequestclose(b,r);


 if(res.indexOf("succes") > 0)break;

}

  

  
}
void sters()
{

   String a="/s.php";



    String b = String("GET ") +a + " HTTP/1.1\r\n" + "Host:" + server + "\r\n" + "Connection: keep-alive\r\n\r\n";
  String r = "76";
while(1){
  startTCPConnection();
String   res=sendGetRequestclose(b,r);


 if(res.indexOf("[]") > 0)break;

}

  

  
}



int func(char *p)
{
  int i;
  int l=0;
  for(i=0;i<strlen(p);i++)
  {
    if(p[i]=='|')l++;
  }
  return l;
}
