# NetworkInformationJS

**Now at [niclabs project](https://github.com/niclabs/NetworkInformation-Library).**

A Javascript Library to check the network information and download speed of client. Using the principle of front end.

For the network information, it use [IP-API](http://ip-api.com/docs/) for user network basic information and Google Maps to corroborate his data. And for the speed test, it use a  [fork](https://github.com/Michotastico/detectClientSpeed) of [detectClientSpeed](https://github.com/ashanbh/detectClientSpeed) to allow progress checking.

The original files are NI.js who uses javascript classes. His successor was NI-allbrowsers.js, who was factorized and separated in three classes: Heimdal.js, NetworkInformation.js and SpeedTest.js.

## Classes

<dl>
<dt><a href="#Heimdal">Heimdal</a></dt>
<dd><p>Main class who administrate the use of NetworkInformation &amp; SpeedTest classes</p>
</dd>
<dt><a href="#NetworkInformation">NetworkInformation</a></dt>
<dd><p>Class who get the information of the client network</p>
</dd>
<dt><a href="#NetworkUtilities">NetworkUtilities</a></dt>
<dd><p>Class with network utilities, as ping method. WARNING: This class is experimental, the methods contained here probably require a server.</p>
</dd>
<dt><a href="#SpeedTest">SpeedTest</a></dt>
<dd><p>Class in charge of make Speed Tests</p>|
</dd>
</dl>

<a name="Heimdal"></a>
## Heimdal
Main class who administrate the use of NetworkInformation & SpeedTest classes

**Kind**: global class  

* [Heimdal](#Heimdal)
    * [new Heimdal(server)](#new_Heimdal_new)
    * [.init(callback)](#Heimdal.init) ⇒ <code>undefined</code>
    * [.runTest(on, file)](#Heimdal.runTest) ⇒ <code>undefined</code>
    * [.sendData()](#Heimdal.sendData) ⇒ <code>undefined</code>
    * [.pingTest(callback)](#Heimdal.pingTest) ⇒ <code>undefined</code>
    * [.getNetworkInfo()](#Heimdal.getNetworkInfo) ⇒ <code>[NetworkInformation](#NetworkInformation)</code>
    * [.getSpeedTests()](#Heimdal.getSpeedTests) ⇒ <code>[SpeedTest](#SpeedTest)</code>
    * [.getUtilities()](#Heimdal.getUtilities) ⇒ <code>[NetworkUtilities](#NetworkUtilities)</code>

<a name="new_Heimdal_new"></a>
### new Heimdal(server)
Heimdal - Main class who administrate the use of NetworkInformation & SpeedTest classes


| Param | Type | Description |
| --- | --- | --- |
| server | <code>string</code> | URL of the server where the JSON will be send |

<a name="Heimdal.init"></a>
### Heimdal.init(callback) ⇒ <code>undefined</code>
init - Call to NetworkInformation to init his params and execute the
callback function

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | function when the network information was ready |

<a name="Heimdal.runTest"></a>
### Heimdal.runTest(on, file) ⇒ <code>undefined</code>
runTest - Start the Speed test

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  

| Param | Type | Description |
| --- | --- | --- |
| on | <code>function</code> | progress function. For loading stuff |
| file | <code>file</code> | used in the test |

<a name="Heimdal.sendData"></a>
### Heimdal.sendData() ⇒ <code>undefined</code>
sendData - Send all the data to the server

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  
<a name="Heimdal.pingTest"></a>
### Heimdal.pingTest(callback) ⇒ <code>undefined</code>
pingTest - Start the ping test to top sites

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function when the ping test was ready. |

<a name="Heimdal.getNetworkInfo"></a>
### Heimdal.getNetworkInfo() ⇒ <code>[NetworkInformation](#NetworkInformation)</code>
getNetworkInfo - Return the NetworkInformation object

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  
**Returns**: <code>[NetworkInformation](#NetworkInformation)</code> - Inner NetworkInformation object  
<a name="Heimdal.getSpeedTests"></a>
### Heimdal.getSpeedTests() ⇒ <code>[SpeedTest](#SpeedTest)</code>
getSpeedTests - Return the SpeedTest object

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  
**Returns**: <code>[SpeedTest](#SpeedTest)</code> - Inner SpeedTest object  
<a name="Heimdal.getUtilities"></a>
### Heimdal.getUtilities() ⇒ <code>[NetworkUtilities](#NetworkUtilities)</code>
getUtilities - Return the NetworkUtilities object

**Kind**: static method of <code>[Heimdal](#Heimdal)</code>  
**Returns**: <code>[NetworkUtilities](#NetworkUtilities)</code> - Inner NetworkUtilities object  
<a name="NetworkInformation"></a>
## NetworkInformation
Class who get the information of the client network

**Kind**: global class  

* [NetworkInformation](#NetworkInformation)
    * [new NetworkInformation()](#new_NetworkInformation_new)
    * [.getGoogleInfo(lat, lon)](#NetworkInformation.getGoogleInfo) ⇒ <code>undefined</code>
    * [.setInformation(readyMethod)](#NetworkInformation.setInformation) ⇒ <code>undefined</code>
        * [~getHtml5Geolocation(tail_method, callbackfunction)](#NetworkInformation.setInformation..getHtml5Geolocation) ⇒ <code>undefined</code>
        * [~getIpApiInformation(callbackfunction)](#NetworkInformation.setInformation..getIpApiInformation) ⇒ <code>undefined</code>
    * [.getAS()](#NetworkInformation.getAS) ⇒ <code>string</code>
    * [.getCity()](#NetworkInformation.getCity) ⇒ <code>string</code>
    * [.getCountry()](#NetworkInformation.getCountry) ⇒ <code>string</code>
    * [.getCountryCode()](#NetworkInformation.getCountryCode) ⇒ <code>string</code>
    * [.getIsp()](#NetworkInformation.getIsp) ⇒ <code>string</code>
    * [.getCoordinates()](#NetworkInformation.getCoordinates) ⇒ <code>Array</code>
    * [.getOrganization()](#NetworkInformation.getOrganization) ⇒ <code>string</code>
    * [.useProxy()](#NetworkInformation.useProxy) ⇒ <code>boolean</code>
    * [.getIp()](#NetworkInformation.getIp) ⇒ <code>string</code>
    * [.getRegion()](#NetworkInformation.getRegion) ⇒ <code>string</code>
    * [.getRegionName()](#NetworkInformation.getRegionName) ⇒ <code>string</code>
    * [.getReverseDNS()](#NetworkInformation.getReverseDNS) ⇒ <code>string</code>
    * [.isSuccessful()](#NetworkInformation.isSuccessful) ⇒ <code>boolean</code>
    * [.getTimezone()](#NetworkInformation.getTimezone) ⇒ <code>string</code>
    * [.isAndroid()](#NetworkInformation.isAndroid) ⇒ <code>boolean</code>
    * [.isMobile()](#NetworkInformation.isMobile) ⇒ <code>boolean</code>
    * [.checkConnectionType()](#NetworkInformation.checkConnectionType) ⇒ <code>string</code>
    * [.getOS()](#NetworkInformation.getOS) ⇒ <code>string</code>

<a name="new_NetworkInformation_new"></a>
### new NetworkInformation()
NetworkInformation - Class who get the information of the client network

<a name="NetworkInformation.getGoogleInfo"></a>
### NetworkInformation.getGoogleInfo(lat, lon) ⇒ <code>undefined</code>
getGoogleInfo - receive the data from google and set in the internal vars

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| lat | <code>number</code> | latitude |
| lon | <code>number</code> | longitude |

<a name="NetworkInformation.setInformation"></a>
### NetworkInformation.setInformation(readyMethod) ⇒ <code>undefined</code>
setInformation - Set all the information to the class. Requesting to the navigator, google and ip-api

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| readyMethod | <code>function</code> | function called when the information was setted |


* [.setInformation(readyMethod)](#NetworkInformation.setInformation) ⇒ <code>undefined</code>
    * [~getHtml5Geolocation(tail_method, callbackfunction)](#NetworkInformation.setInformation..getHtml5Geolocation) ⇒ <code>undefined</code>
    * [~getIpApiInformation(callbackfunction)](#NetworkInformation.setInformation..getIpApiInformation) ⇒ <code>undefined</code>

<a name="NetworkInformation.setInformation..getHtml5Geolocation"></a>
#### this.setInformation~getHtml5Geolocation(tail_method, callbackfunction) ⇒ <code>undefined</code>
getHtml5Geolocation - get the geolocalitation from the navigator

**Kind**: inner method of <code>[this.setInformation](#NetworkInformation.setInformation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| tail_method | <code>function</code> | next function to be called. |
| callbackfunction | <code>function</code> | callback function |

<a name="NetworkInformation.setInformation..getIpApiInformation"></a>
#### this.setInformation~getIpApiInformation(callbackfunction) ⇒ <code>undefined</code>
getIpApiInformation - get the network information from ip-api

**Kind**: inner method of <code>[this.setInformation](#NetworkInformation.setInformation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callbackfunction | <code>function</code> | callback function |

<a name="NetworkInformation.getAS"></a>
### NetworkInformation.getAS() ⇒ <code>string</code>
getAS - Get Autonomous system

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Autonomous system  
<a name="NetworkInformation.getCity"></a>
### NetworkInformation.getCity() ⇒ <code>string</code>
getCity - Get city

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - city  
<a name="NetworkInformation.getCountry"></a>
### NetworkInformation.getCountry() ⇒ <code>string</code>
getCountry - Get country

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - country  
<a name="NetworkInformation.getCountryCode"></a>
### NetworkInformation.getCountryCode() ⇒ <code>string</code>
getCountryCode - Get country code

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - country code  
<a name="NetworkInformation.getIsp"></a>
### NetworkInformation.getIsp() ⇒ <code>string</code>
getIsp - Get the ISP

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - ISP  
<a name="NetworkInformation.getCoordinates"></a>
### NetworkInformation.getCoordinates() ⇒ <code>Array</code>
getCoordinates - Get Latlong of client.

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>Array</code> - [Latitude, Longitude]  
<a name="NetworkInformation.getOrganization"></a>
### NetworkInformation.getOrganization() ⇒ <code>string</code>
getOrganization - Get organization (or ISP if didn't exists)

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - organization  
<a name="NetworkInformation.useProxy"></a>
### NetworkInformation.useProxy() ⇒ <code>boolean</code>
useProxy - Check if the user use a proxy

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>boolean</code> - True if the user use a proxy  
<a name="NetworkInformation.getIp"></a>
### NetworkInformation.getIp() ⇒ <code>string</code>
getIp - Get IP

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - IP  
<a name="NetworkInformation.getRegion"></a>
### NetworkInformation.getRegion() ⇒ <code>string</code>
getRegion - Get region

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Region  
<a name="NetworkInformation.getRegionName"></a>
### NetworkInformation.getRegionName() ⇒ <code>string</code>
getRegionName - Get region's name

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Region's name  
<a name="NetworkInformation.getReverseDNS"></a>
### NetworkInformation.getReverseDNS() ⇒ <code>string</code>
getReverseDNS - Get the reverse of the DNS

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Reverse of the DNS  
<a name="NetworkInformation.isSuccessful"></a>
### NetworkInformation.isSuccessful() ⇒ <code>boolean</code>
isSuccessful - Check if the connection was successful

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>boolean</code> - True if the connection was successful  
<a name="NetworkInformation.getTimezone"></a>
### NetworkInformation.getTimezone() ⇒ <code>string</code>
getTimezone - Get timezone

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Timezone  
<a name="NetworkInformation.isAndroid"></a>
### NetworkInformation.isAndroid() ⇒ <code>boolean</code>
isAndroid - Check if the device is Android

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>boolean</code> - True if the device is Android  
<a name="NetworkInformation.isMobile"></a>
### NetworkInformation.isMobile() ⇒ <code>boolean</code>
isMobile - Check if the device is mobile

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>boolean</code> - True if the device is mobile  
<a name="NetworkInformation.checkConnectionType"></a>
### NetworkInformation.checkConnectionType() ⇒ <code>string</code>
checkConnectionType - If its avalaible, check the connection type. (Only work on Android)

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Connection Type  
<a name="NetworkInformation.getOS"></a>
### NetworkInformation.getOS() ⇒ <code>string</code>
getOS - Get the OS of the client

**Kind**: static method of <code>[NetworkInformation](#NetworkInformation)</code>  
**Returns**: <code>string</code> - Operative System  
<a name="NetworkUtilities"></a>
## NetworkUtilities
Class with network utilities, as ping method. WARNING: This class is experimental, the methods contained here probably require a server.

**Kind**: global class  

* [NetworkUtilities](#NetworkUtilities)
    * [new NetworkUtilities()](#new_NetworkUtilities_new)
    * [.ping(url, callback)](#NetworkUtilities.ping) ⇒ <code>undefined</code>
    * [.getPings()](#NetworkUtilities.getPings) ⇒ <code>Array</code>
    * [.pingTops(callback)](#NetworkUtilities.pingTops) ⇒ <code>undefined</code>
    * [.checkNAT(url, callback)](#NetworkUtilities.checkNAT) ⇒ <code>undefined</code>

<a name="new_NetworkUtilities_new"></a>
### new NetworkUtilities()
NetworkUtilities - Class with network utilities, as ping method. WARNING: This class is experimental, the methods contained here probably require a server.

<a name="NetworkUtilities.ping"></a>
### NetworkUtilities.ping(url, callback) ⇒ <code>undefined</code>
ping - ping to a url. WARNING: THIS REQUIRED A SERVER TO CHECK IF A URL REALLY EXISTS. OTHERWISE THE PING SUCCESS WITH FALSE POSITIVE.

**Kind**: static method of <code>[NetworkUtilities](#NetworkUtilities)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | the url to be pinged |
| callback | <code>function</code> | Callback function when the specific ping as done. Receive a ping object with the time, the status and the url. |

<a name="NetworkUtilities.getPings"></a>
### NetworkUtilities.getPings() ⇒ <code>Array</code>
getPings - Get an array with pings.

**Kind**: static method of <code>[NetworkUtilities](#NetworkUtilities)</code>  
**Returns**: <code>Array</code> - Pings  
<a name="NetworkUtilities.pingTops"></a>
### NetworkUtilities.pingTops(callback) ⇒ <code>undefined</code>
pingTops - Make a ping to TOP_CL urls

**Kind**: static method of <code>[NetworkUtilities](#NetworkUtilities)</code>  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The callback function when the proccess finish. |

<a name="NetworkUtilities.checkNAT"></a>
### NetworkUtilities.checkNAT(url, callback) ⇒ <code>undefined</code>
checkNAT - Send a request to a specific server to check if the client is behind NAT. With callback function.

**Kind**: static method of <code>[NetworkUtilities](#NetworkUtilities)</code>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The url of the server. |
| callback | <code>function</code> | The callback function. Receive server answer as param. |

<a name="SpeedTest"></a>
## SpeedTest
Class in charge of make Speed Tests

**Kind**: global class  

* [SpeedTest](#SpeedTest)
    * [new SpeedTest(file_url)](#new_SpeedTest_new)
    * [.getDownloadSpeed()](#SpeedTest.getDownloadSpeed) ⇒ <code>number</code>
    * [.getLatency()](#SpeedTest.getLatency) ⇒ <code>number</code>
    * [.getLatencyType()](#SpeedTest.getLatencyType) ⇒ <code>string</code>
    * [.getThroughput()](#SpeedTest.getThroughput) ⇒ <code>number</code>
    * [.getThroughputType()](#SpeedTest.getThroughputType) ⇒ <code>string</code>
    * [.getTestTime()](#SpeedTest.getTestTime) ⇒ <code>number</code>
    * [.startSpeedTest(onprogress)](#SpeedTest.startSpeedTest) ⇒ <code>undefined</code>

<a name="new_SpeedTest_new"></a>
### new SpeedTest(file_url)
SpeedTest - Class in charge of make Speed Tests


| Param | Type | Description |
| --- | --- | --- |
| file_url | <code>string</code> | URL of the file used in the download speed test |

<a name="SpeedTest.getDownloadSpeed"></a>
### SpeedTest.getDownloadSpeed() ⇒ <code>number</code>
getDownloadSpeed - Get the download speed

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>number</code> - download speed  
<a name="SpeedTest.getLatency"></a>
### SpeedTest.getLatency() ⇒ <code>number</code>
getLatency - Get the latency

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>number</code> - latency  
<a name="SpeedTest.getLatencyType"></a>
### SpeedTest.getLatencyType() ⇒ <code>string</code>
getLatencyType - Get the equivalence of latency

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>string</code> - Latency speed class name  
<a name="SpeedTest.getThroughput"></a>
### SpeedTest.getThroughput() ⇒ <code>number</code>
getThroughput - Get the throughput

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>number</code> - throughput  
<a name="SpeedTest.getThroughputType"></a>
### SpeedTest.getThroughputType() ⇒ <code>string</code>
getThroughputType - Get the equivalenceof throughput

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>string</code> - Throughput speed class name  
<a name="SpeedTest.getTestTime"></a>
### SpeedTest.getTestTime() ⇒ <code>number</code>
getTestTime - Get the total time of the test

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  
**Returns**: <code>number</code> - duration of test  
<a name="SpeedTest.startSpeedTest"></a>
### SpeedTest.startSpeedTest(onprogress) ⇒ <code>undefined</code>
startSpeedTest - start the speed test

**Kind**: static method of <code>[SpeedTest](#SpeedTest)</code>  

| Param | Type | Description |
| --- | --- | --- |
| onprogress | <code>function</code> | on progress function |
