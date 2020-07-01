// On demande le consentement a l utilisateur d utiliser le micro
navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;
navigator.getUserMedia({
        audio: true
    },
    function (e) {
        // success     
    },
    function (e) {
        // error     
        console.error(e);
    });

// On lis le flux audio
navigator.getUserMedia({
            audio: true
        },
        function (e) {
            // creates the audio context  
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            context = new AudioContext();

            // creates an audio node from the microphone incoming stream     
            mediaStream = context.createMediaStreamSource(e);
            // https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createScriptProcessor     
            var bufferSize = 2048;
            var numberOfInputChannels = 2;
            var numberOfOutputChannels = 2;
            if (context.createScriptProcessor) {
                recorder = context.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
            } else {
                recorder = context.createJavaScriptNode(bufferSize, numberOfInputChannels, numberOfOutputChannels);
            }
            // On stocke le contenu lu ds un tableau
            var leftchannel = [];
            var rightchannel = [];
            var recordingLength = 0;
            recorder.onaudioprocess = function (e) {
                leftchannel.push(new Float32Array(e.inputBuffer.getChannelData(0)));
                rightchannel.push(new Float32Array(e.inputBuffer.getChannelData(1)));
                recordingLength += bufferSize;
                console.log("on audio progress");
            }
            // we connect the recorder with the input stream     
            mediaStream.connect(recorder);
            recorder.connect(context.destination);
        }