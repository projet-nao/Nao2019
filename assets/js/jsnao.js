console.log('Loading Js NAO...');
var jsnao = {
  t : null,
  sname : null,
  coords : { x: 0, y: 0},
  session : null,
  al_sys : null,
  al_behavior : null,
  al_tts : null,
  al_video : null,
  al_motion : null,
  al_posture : null,
  log_listener : null,
  log_level : 4,
  error : function(data) { console.log(data) },
  connect : function(address) {
    console.log('Create Session to : '+address);
    jsnao.session = new QiSession(address);
    jsnao.session.socket().on('connect', jsnao.connected);
    jsnao.session.socket().on('disconnect', jsnao.disconnected);
  },
  connected : function() {
    console.log('Session Connected.');
    jsnao.session.service("ALSystem").done(jsnao.init_system);
    jsnao.session.service("ALMotion").done(jsnao.init_motion);
    jsnao.session.service("ALVideoDevice").done(jsnao.init_video);
    jsnao.session.service("ALTextToSpeech").done(jsnao.init_tts);
    jsnao.session.service("ALRobotPosture").done(jsnao.init_posture);
    jsnao.session.service("ALBehaviorManager").done(jsnao.init_behavior);
  },
  init_tts : function(data) {
    jsnao.al_tts = data;
    jsnao.al_tts.getLanguage().done(function(data) {});
    console.log('Text To Speech Initialized.');
  },
  init_behavior : function(data) {
    jsnao.al_behavior = data;
    console.log('Behavior Initialized.');
  },
  init_system : function(data) {
    jsnao.al_sys = data;
    jsnao.al_sys.robotName().done(function(data) {});
    jsnao.al_sys.systemVersion().done(function(data) {});
    jsnao.al_sys.robotIcon().done(function(data) {});
    console.log('System Initialized.');
  },
  init_motion : function(data) {
    jsnao.al_motion = data;
    console.log('Motion Initialized.');
  },
  init_posture : function(data) {
    jsnao.al_posture = data;
    console.log('Posture Initialized.');
  },
  init_video : function(data) {
    jsnao.al_video = data;
    console.log('Video Initialized.');
  },
  display_video : function() {
    jsnao.al_motion.setStiffnesses('Head', 1.0).fail(jsnao.error);
    jsnao.t = [];
    for (var i = 0; i < 1024; ++i) {
      jsnao.t[String.fromCharCode(i)] = i;
    }
    var z = Math.floor((Math.random()*10000)+1);
    jsnao.al_video.subscribeCameras("test_z" + z, [0,1], [0,0], [11,11], 30).done(jsnao.subscribed_video).fail(jsnao.error);
  },
  subscribed_video : function(sname) {
    jsnao.sname = sname;
    jsnao.al_video.getImagesRemote(jsnao.sname).done(jsnao.image_remote).fail(jsnao.error);
  },
  image_remote : function(data) {
    if (data.length > 0) {
      var imgData = data[0];
      if (imgData.length > 6) {
        var idCanvas = "cameraT";
        var imgWidth = imgData[0];
        var imgHeight = imgData[1];
        var imgBase64 = imgData[6];
        jsnao.display_image(idCanvas, imgWidth, imgHeight, imgBase64);
      }
    }
    if (data.length > 1) {
      var imgData = data[1];
      if (imgData.length > 6) {
        var idCanvas = "cameraB";
        var imgWidth = imgData[0];
        var imgHeight = imgData[1];
        var imgBase64 = imgData[6];
        jsnao.display_image(idCanvas, imgWidth, imgHeight, imgBase64);
      }
    }
    jsnao.al_video.getImagesRemote(jsnao.sname).done(jsnao.image_remote).fail(jsnao.error);
  },
  display_image : function(idCanvas, imgWidth, imgHeight, imgBase64) {
    var imgBin = atob(imgBase64);
    var x = 0;
    var w = imgWidth * imgHeight * 4;
    var canvas = document.getElementById(idCanvas);
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, imgWidth, imgHeight);
    for (var p = 0; p < w; ) {
      imageData.data[p++] = jsnao.t[imgBin[x++]];
      imageData.data[p++] = jsnao.t[imgBin[x++]];
      imageData.data[p++] = jsnao.t[imgBin[x++]];
      imageData.data[p++] = 255;
    }
    context.putImageData(imageData, 0, 0);
  },
  disconnected : function() {
    console.log('Session Disconnected.');
  }
}
console.log('Js NAO is loaded.');
