
#ifndef Conexiune_h
#define Conexiune_h


#include <Arduino.h>
#include <SoftwareSerial.h>
#include <WiFi.h>
#include <ArduinoJson.h>



const String ssid = "HUAWEI-NnFn";
const String password = "m6n87sAn";
const String path1 = "/a.php";
const String server = "paunescumihai.ro";

const int timeout = 2000;
extern void Conexiune();
extern void stergere();
extern void adaugare();
extern void sters();


extern int par;
class Con {
private:
    
    String result;
  
    void setupESP8266();
    void connectToWiFi();
       void startTCPConnection();
    
 //   String sendGetRequest();
    
public:
  String atCommand(String command, int timeout);
    void GetJson();
    void Conexiune_init();   
    StaticJsonDocument<200> doc;
    char *partitionKey=NULL;
    char *rowKey=NULL;

     String requestLength;
  String sendGetRequest();
     String path = " ";
     String request="";
     void closeTCPConnection();
};

extern Con c;
#endif
