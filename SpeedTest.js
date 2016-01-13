/**
* @author Michel Llorens http://michotastico.github.io
* @version 1.0.0
*/

/**
 * SpeedTest - Class in charge of make Speed Tests
 * @class speed_test
 * @classdesc Class in charge of make Speed Tests
 *
 * @param  {string} file_url URL of the file used in the download speed test
 */
function SpeedTest(file_url){
  this.downloadSpeed = 0;
  this.testTime = 1;
  this.testResult = null;
  this.file = file_url;

  /**
   * getDownloadSpeed - Get the download speed
   *
   * @return {number}  download speed
   */
  this.getDownloadSpeed = function(){
    if(this.downloadSpeed === 0){
      var _MB = this.testResult.dataSizeKB/1000;
      var _speed = (_MB/this.testTime)*8;
      this.downloadSpeed = _speed;
    }
    return this.downloadSpeed;
  }

  /**
   * getLatency - Get the latency
   *
   * @return {number}  latency
   */
  this.getLatency = function(){
    return this.testResult.latency;
  }

  /**
   * getLatencyType - Get the equivalence of latency
   *
   * @return {string}  Latency speed class name
   */
  this.getLatencyType = function(){
    return this.testResult.latencySpeedClass.name;
  }

  /**
   * getThroughput - Get the throughput
   *
   * @return {number}  throughput
   */
  this.getThroughput = function(){
    return this.testResult.throughput;
  }

  /**
   * getThroughputType - Get the equivalenceof throughput
   *
   * @return {string}  Throughput speed class name
   */
  this.getThroughputType = function(){
    return this.testResult.throughPutSpeedClass.name;
  }

  /**
   * getTestTime - Get the total time of the test
   *
   * @return {number}  duration of test
   */
  this.getTestTime = function(){
    return this.testTime;
  }

  /**
   * startSpeedTest - start the speed test
   *
   * @param  {function} onprogress on progress function
   * @return {undefined} 
   */
  this.startSpeedTest = function(onprogress){
    var selfTest = this;
    callback = function(timings){
      var _time = (timings.end - timings.start)/1000;
      selfTest.testResult = timings;
      selfTest.testTime = _time;
      selfTest.getDownloadSpeed();
    }
    detectSpeed.startSpeedCheck(this.file, callback, onprogress);
  }
}
