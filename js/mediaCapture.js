let constraintObj = {
    audio: true,
    video: {
        facingMode: "user",
        width: {
            min: 640,
            ideal: 1280,
            max: 1920
        },
        height: {
            min: 480,
            ideal: 720,
            max: 1080
        }
    }
};
// width: 1280, height: 720  -- preference only
// facingMode: {exact: "user"}
// facingMode: "environment"

//gérer les anciens navigateurs qui pourraient implémenter getUserMedia d'une manière ou d'une autre
if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
    navigator.mediaDevices.getUserMedia = function (constraintObj) {
        let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
        }
        return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraintObj, resolve, reject);
        });
    }
} else {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            devices.forEach(device => {
                console.log(device.kind.toUpperCase(), device.label);
                //, device.deviceId
            })
        })
        .catch(err => {
            console.log(err.name, err.message);
        })
}

navigator.mediaDevices.getUserMedia(constraintObj)
    .then(function (mediaStreamObj) {
        //connecter le flux multimédia au premier élément vidéo
        let video = document.querySelector('video');
        if ("srcObject" in video) {
            video.srcObject = mediaStreamObj;
        } else {
            //ancienne version
            video.src = window.URL.createObjectURL(mediaStreamObj);
        }

        video.onloadedmetadata = function (ev) {
            //montrer dans l'élément vidéo ce qui est capturé par la webcam
            video.play();
        };

        //ajouter des écouteurs pour enregistrer la vidéo / l'audio
        let start = document.getElementById('btnStart');
        let stop = document.getElementById('btnStop');
        let close = document.getElementById('btnClose');
        let vidSave = document.getElementById('vidOutput');
        let vidInput = document.getElementById('vidInput');
        let mediaRecorder = new MediaRecorder(mediaStreamObj);
        let chunks = [];

        start.addEventListener('click', (ev) => {
            mediaRecorder.start();
            console.log(mediaRecorder.state);
            $(start).hide()
            $(stop).show()
        })
        stop.addEventListener('click', (ev) => {
            mediaRecorder.stop();
            mediaStreamObj.getTracks().forEach(function (track) {
                track.stop();
            });
            video.srcObject = null
            console.log(mediaRecorder.state);
             $(vidInput).hide()
             $(stop).hide()
             $(vidSave).show()
        });
        close.addEventListener('click', (ev) => {
            $('#myModalVideo .yellow').remove()
            $('#myModalVideo').hide()
        })
        mediaRecorder.ondataavailable = function (ev) {
            chunks.push(ev.data);
        }
        mediaRecorder.onstop = (ev) => {
            let blob = new Blob(chunks, {
                'type': 'video/mp4;'
            });
            chunks = [];
            let videoURL = window.URL.createObjectURL(blob);
            vidSave.src = videoURL;
            console.log(videoURL)
            $('#video-dl').attr("href", videoURL)
            $('#video-dl').show()
            window.URL.revokeObjectURL(objectURL);
        }
    })
    .catch(function (err) {
        console.log(err.name, err.message);
    });

/*********************************
getUserMedia returns a Promise
resolve - returns a MediaStream Object
reject returns one of the following errors
AbortError - generic unknown cause
NotAllowedError (SecurityError) - user rejected permissions
NotFoundError - missing media track
NotReadableError - user permissions given but hardware/OS error
OverconstrainedError - constraint video settings preventing
TypeError - audio: false, video: false
*********************************/