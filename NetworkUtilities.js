/**
* @file Class with network utilities.
* @author [Michel Llorens]{@link http://michotastico.github.io}
* @version 1.0.0
* @license MIT
*/


/**
* NetworkUtilities - Class with network utilities, as ping method. WARNING: This class is experimental, the methods contained here probably require a server.
* @class NetworkUtilities
* @classdesc  Class with network utilities, as ping method. WARNING: This class is experimental, the methods contained here probably require a server.
*
*/
function NetworkUtilities(){

  this.pings = [];


  /**
  * ping - ping to a url. WARNING: THIS REQUIRED A SERVER TO CHECK IF A URL REALLY EXISTS. OTHERWISE THE PING SUCCESS WITH FALSE POSITIVE.
  *
  * @memberof! NetworkUtilities
  * @param {string} url the url to be pinged
  * @param {function} callback Callback function when the specific ping as done. Receive a ping object with the time, the status and the url.
  * @return {undefined}
  */
  this.ping = function(url, callback){
    var loop_iter = 4;
    var max_iter = 5;
    var loop_time = 1000;
    var counter = 0;
    var flag = 0;
    var total_times = [];
    var timeout = 9000;
    var timeout_error = 0;
    var selfUtilities = this;
    var _cb = callback;
    var pinged_url = url;

    var loop = setInterval(function(){
      _url = "http://" + url + "/" + Date.now() + Math.random().toString(36).substring(7);

      if(counter < max_iter){
        var ping = new XMLHttpRequest();

        counter ++;
        ping.seq = counter;
        flag++;

        ping.start_time = Date.now();
        ping.timeout = timeout;
        ping.onreadystatechange = function(){
          if (ping.readyState == 4 && timeout_error == 0) {
            flag--;
            if (ping.seq > 1) {
              delta_time = Date.now() - ping.start_time;
              total_times.push(delta_time);
            }
          }
        }
        ping.ontimeout = function(){
          timeout_error = 1;
        }
        ping.open("GET", _url, true);
        ping.send();
      }

      if ((counter > loop_iter) && (flag < 1)) {
        clearInterval(loop);
        var times = total_times.sort();
        times.pop();
        var total_time = 0;
        $.each(times,function() {
          total_time += this;
        });
        var avg_time = Math.round(total_time / times.length);
        var ping_object = new function(){
          this.time = avg_time;
          this.status = "SUCCESS";
          this.url = pinged_url;
        }
        selfUtilities.pings.push(ping_object);
        _cb(ping_object);

      }
      if (timeout_error == 1) {
        clearInterval(loop);
        var ping_object = new function(){
          this.time = 0;
          this.status = "FAILED";
          this.url = pinged_url;
        }
        selfUtilities.pings.push(ping_object);
        _cb(ping_object);
        return;

      }
    }, loop_time);
  }

  /**
  * getPings - Get an array with pings.
  *
  * @memberof! NetworkUtilities
  * @return {Array} Pings
  */
  this.getPings = function(){
    return this.pings;
  }

  /**
  * pingTestSecuentialVersion - Make a secuencial ping to TOP_CL urls
  *
  * @memberof! NetworkUtilities
  * @param  {function} earlycall The function called when an individual ping test was ready.
  * @param {function} callback The callback function when the process finish.
  * @return {undefined}
  */
  this.pingTopSecuentialVersion = function(earlycall, callback){
    var top_length = TOP_CL.length;
    var top = TOP_CL;
    var selfUtilities = this;
    function triggerCallback(_ping){
      earlycall(_ping);
      if(selfUtilities.pings.length == top_length){
        callback();
      }
      else{
        selfUtilities.ping(top.pop(), triggerCallback);
      }
    }
    this.ping(top.pop(), triggerCallback);
  }

  /**
   * pingTestConcurrentVersion - Make a concurrent ping to TOP_CL urls
   *
   * @memberof! NetworkUtilities
   * @param  {function} earlycall The function called when an individual ping test was ready.
   * @param {function} callback The callback function when the process finish.
   * @return {undefined}
   */
  this.pingTopConcurrentVersion = function(earlycall, callback){
    var top_length = TOP_CL.length;
    var selfUtilities = this;
    function triggerCallback(_ping){
      earlycall(_ping);
      if(selfUtilities.pings.length == top_length){
        callback();
      }
    }
    for(_url in TOP_CL){
      this.ping(TOP_CL[_url], triggerCallback);
    }
  }

  /**
  * checkNAT - Send a request to a specific server to check if the client is behind NAT. With callback function.
  *
  * @memberof! NetworkUtilities
  *
  * @param {string} url The url of the server.
  * @param {function} callback The callback function. Receive server answer as param.
  * @return {undefined}
  */
  this.checkNAT = function(url, callback){
    var information = "" + Date.now();
    $.ajax({
      type: 'POST',
      contentType: "application/json; charset=utf-8",
      url: url,
      data: information,
      success: function(resp){
        callback(resp);
      }
    });
  }
}
