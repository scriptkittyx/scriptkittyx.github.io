            var myVideo = document.getElementById('myVideo');
            var playButton = document.getElementById('playButton');

            var myVideo2 = document.getElementById('myVideo2');
            var playButton2 = document.getElementById('playButton2');

            var myVideo3 = document.getElementById('myVideo3');
            var playButton3 = document.getElementById('playButton3');

            playButton.addEventListener('click', function () {
                if (myVideo.paused) {
                    if (myVideo.requestFullscreen) {
                        myVideo.requestFullscreen();
                    }
                    else if (myVideo.msRequestFullscreen) {
                        myVideo.msRequestFullscreen();
                    }
                    else if (myVideo.mozRequestFullScreen) {
                        myVideo.mozRequestFullScreen();
                    }
                    else if (myVideo.webkitRequestFullScreen) {
                        myVideo.webkitRequestFullScreen();
                    }
                    myVideo.play();
                }
                else {
                    myVideo.pause();
                    myVideo.show();
                }
            }, false);



            playButton2.addEventListener('click', function () {
                if (myVideo2.paused) {
                    if (myVideo2.requestFullscreen) {
                        myVideo2.requestFullscreen();
                    }
                    else if (myVideo2.msRequestFullscreen) {
                        myVideo2.msRequestFullscreen();
                    }
                    else if (myVideo2.mozRequestFullScreen) {
                        myVideo2.mozRequestFullScreen();
                    }
                    else if (myVideo2.webkitRequestFullScreen) {
                        myVideo2.webkitRequestFullScreen();
                    }
                    myVideo2.play();
                }
                else {
                    myVideo2.pause();
                    myVideo2.show();
                }
            }, false);


            playButton3.addEventListener('click', function () {
                if (myVideo3.paused) {
                    if (myVideo3.requestFullscreen) {
                        myVideo3.requestFullscreen();
                    }
                    else if (myVideo3.msRequestFullscreen) {
                        myVideo3.msRequestFullscreen();
                    }
                    else if (myVideo3.mozRequestFullScreen) {
                        myVideo3.mozRequestFullScreen();
                    }
                    else if (myVideo3.webkitRequestFullScreen) {
                        myVideo3.webkitRequestFullScreen();
                    }
                    myVideo3.play();
                }
                else {
                    myVideo3.pause();
                    myVideo3.show();
                }
            }, false);