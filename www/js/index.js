/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        // this.receivedEvent('deviceready');

        var p = document.querySelector('#deviced');
        p.innerHTML = '<table>'
                    + '<tr><td>cordova</td><td>' + device.cordova + '</td></tr>'
                    + '<tr><td>platform</td><td>' + device.platform + '</td></tr>'
                    + '<tr><td>model</td><td>' + device.model + '</td></tr>'
                    + '<tr><td>uuid</td><td>' + device.uuid + '</td></tr>'
                    + '<tr><td>version</td><td>' + device.version + '</td></tr>'
                    + '<tr><td>manufacturer</td><td>' + device.manufacturer + '</td></tr>'
                    + '<tr><td>isVirtual</td><td>' + device.isVirtual + '</td></tr>'
                    + '<tr><td>serial</td><td>' + device.serial + '</td></tr>'
                    + '</table>';

      navigator.notification.confirm('Do you want to schedule a notification in 5 secs?', (num) => {
        if (num === 1) {
          cordova.plugins.notification.local.schedule({
            text: 'My first notification',
            at: new Date(new Date().getTime() + 5*1000)
          });
        }
      }, 'Confirm?');
    }

    // Update DOM on a Received Event
    // receivedEvent: function(id) {
    //     var parentElement = document.getElementById(id);
    //     var listeningElement = parentElement.querySelector('.listening');
    //     var receivedElement = parentElement.querySelector('.received');
    //
    //     listeningElement.setAttribute('style', 'display:none;');
    //     receivedElement.setAttribute('style', 'display:block;');
    //
    //     console.log('Received Event: ' + id);
    // }
};

app.initialize();
