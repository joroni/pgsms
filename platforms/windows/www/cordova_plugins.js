cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-dialogs.notification",
    "file": "plugins/cordova-plugin-dialogs/www/notification.js",
    "pluginId": "cordova-plugin-dialogs",
    "merges": [
      "navigator.notification"
    ]
  },
  {
    "id": "cordova-plugin-dialogs.NotificationProxy",
    "file": "plugins/cordova-plugin-dialogs/src/windows/NotificationProxy.js",
    "pluginId": "cordova-plugin-dialogs",
    "runs": true
  },
  {
    "id": "cordova-plugin-sms.SMS",
    "file": "plugins/cordova-plugin-sms/www/SMS.js",
    "pluginId": "cordova-plugin-sms",
    "clobbers": [
      "window.SMS"
    ]
  },
  {
    "id": "cordova-sms-plugin.Sms",
    "file": "plugins/cordova-sms-plugin/www/sms.js",
    "pluginId": "cordova-sms-plugin",
    "clobbers": [
      "window.sms"
    ]
  },
  {
    "id": "cordova-sms-plugin.SmsProxy",
    "file": "plugins/cordova-sms-plugin/src/windows/SmsProxy.js",
    "pluginId": "cordova-sms-plugin",
    "merges": [
      ""
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-dialogs": "2.0.1",
  "cordova-plugin-sms": "1.0.5",
  "cordova-sms-plugin": "0.1.13"
};
// BOTTOM OF METADATA
});