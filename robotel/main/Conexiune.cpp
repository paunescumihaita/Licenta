#include "Conexiune.h"

SoftwareSerial esp8266 (11,3);//Arduino TX (ESP8266 RX) connected to Arduino Pin 2, Arduino RX(ESP8266 TX) connected to Arduino Pin 3
Con c;
String st[2];
String getValue(String data, char separator, int index);


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

    
    st[0]=getValue(partitionKey,'|',0);
    st[1]=getValue(partitionKey,'|',1);

   

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

void stergere()
{

  String a="/c.php?p="+String(c.partitionKey)+"&r="+String(c.rowKey);

  c.path=a;

    c.request = String("GET ") +c.path + " HTTP/1.1\r\n" + "Host:" + server + "\r\n" + "Connection: keep-alive\r\n\r\n";
  c.requestLength = String(c.request.length());

  //while(c.partitionKey == NULL )
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
