
Html5Qrcode.getCameras().then(cameras => {
    /**
      * devices would be an array of objects of type:
      * { id: "id", label: "label" }
     */
     if (devices && devices.length) {
         var cameraId = devices[0].id;
          // .. use this to start scanning.
      }
 }).catch(err => {
      // handle err   
});