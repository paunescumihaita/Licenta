
#ifndef Conexiune_h
#define Conexiune_h


#include <Arduino.h>
#include <SoftwareSerial.h>
#include <WiFi.h>
#include <ArduinoJson.h>



const String ssid = "iPhone";
const String password = "paunescu69";
const String path = "/a.php";
const String server = "paunescumihai.ro";
const String request = String("GET ") + path + " HTTP/1.1\r\n" + "Host:" + server + "\r\n" + "Connection: keep-alive\r\n\r\n";
const String requestLength = String(request.length());
const int timeout = 2000;
extern void Conexiune();


class Con {
private:
    
    String result;
    String atCommand(String command, int timeout);
    void setupESP8266();
    void connectToWiFi();
    void startTCPConnection();
    void closeTCPConnection();
    String sendGetRequest();
    
public:
    void GetJson();
    void Conexiune_init();   
    StaticJsonDocument<200> doc;
    char *partitionKey=NULL;
    char *rowKey=NULL;
    
     
};

extern Con c;
#endif
