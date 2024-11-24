$(function () {
    "use strict";
    var $sec = $("#second");
    var $min = $("#minute");
    var $hour = $("#hour");
    // This is the audio in base64 URI
    // Tool for conversion: http://portraptor.johanpaul.net/2016/05/base64-audiovideo-converter.html
    var uso = "data:audio/mp3;base64,SUQzAwAAAAAfdlBSSVYAAAAOAABQZWFrVmFsdWUA/n8AAFBSSVYAAAARAABBdmVyYWdlTGV2ZWwAkicAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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JEeBvT5xkWdEoF/asrq3xbePjW6v965r0jpZwxSOZkHJW2t6i29vr3i8FRGICBwHAAomU1lxsDsclCRRbBEKn5dj/rDx6bYcsXtkQAAkJEpEpUXGw5Xkpj49JVG0oA+1rmNesuW9ztqj03ZiIzC+eRMoUBHBYTPAjTjAo6lr5NDNE49p1aswlT1JY1u3ur2NU9lQAQAiJqpcwyK8tj86RAVbrebCRgLDJ3B/cfm4n4nu2tRuMhcjScbrLSAmS7Vsz/n9+5mW+ZLzup6sNAH0BaZpprwXyYrLmMwqm3ef8///vlmKk//95jkQCAiRKRKUFh9OwkhHwdSqgIys6KVlR6Ps1t/L88/7ld7fIrfl0cPQ4CPDm0gtB1pWt0Elu40Xpegm629lUsL2L4j35WpARAhJCq6mK2EEVaQh3av/oQK+MkEeJJNTGLbLQVosnUpFfQI/QCW7MFEjO6OlZWFIBEx0EKwynXJ0HCiMNdavkff/+pNEchJvgAKxKVTx6zLaRiM6jzFmSQsE20nGNGthMwzpfJYhJFNiOGhwwoBCpJQZCbA0eyK+RqW60teKqgJGRptpt4JNgqSWDwSshJCdoEXbNUerOLstOrM0j0mtrANgXM9MrE9mnSY8YFDYUBpq9YTSdEQGnVBVy8Kiz26JVxIGNT/VmRFLcXwECm1VKAfbihWB9DifuGNH8c4CSBomrd6+s+nexYL3Va6smFQRM1GKqFlUUsqopWqzaEs+1pw2NXGVLImrzygRItNy7LCuKKwhsJ435QX///yf53Gkz7fwKaUaAJJKSRMYGfWcDoRoWSUkU4BmPMtqEtzl7Zi+uvHxxE8hZWRIc0qGWbjG49VCk1v955fLVkHQFPK+Isi3Cgdyvhzlixv///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////qTRMOQjIAC1CZLYe9KWkSkCU0x6UgAAAEuAAAAIAAAJcAAAAT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/6k0R6YfqAC5AAS4AAAAgAAAlwAAABAAABLgAAACAAACXAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUQUcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDA==";
    var audio;
    var ct = -1;
    function run(e) {
        // This one is the clock value from your computer's time n date
        function getTime() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            return [h, m, s];
        }
        function needleAnimation() {
            // Init the clock display
            if ($("#off").css("display") === "none") {
                $("#off").fadeIn(300, function () {
                    if (!e && $("#note").css("display") === "none") {
                        $("#note").fadeIn(300);
                    }
                });
            }
            var time = getTime();
            if (!e) { // Run with audio
                ct += 1; // ct is the index of created "Audio" object
                if (ct > 4) {
                    ct = 0;
                }
                //otettu äänet pois päältä audio[ct].play();
            }
            var s_value = time[2] * 6 + 90;
            var m_value = time[1] * 6 + 90;
            var h_value = (time[0] % 12) * 30 + 90 + (time[1] / 60) * 30;
            var secS = ((Math.cos(s_value / 180 * Math.PI)) * 3) + "px " + ((Math.sin(s_value / 180 * Math.PI)) * 3) + "px 3px rgba(0, 0, 0, 0.25)";
            var minS = ((Math.cos(m_value / 180 * Math.PI)) * 2) + "px " + ((Math.sin(m_value / 180 * Math.PI)) * 2) + "px 2px rgba(0, 0, 0, 0.8)";
            // This is for the needles rotation
            $sec.css({transform: "rotate(" + s_value + "deg)", "box-shadow": secS});
            $min.css({transform: "rotate(" + m_value + "deg)", "box-shadow": minS});
            $hour.css({transform: "rotate(" + h_value + "deg)"});
        }
        // 1000 ms = 1 s interval period
        setInterval(needleAnimation, 1000);
    }
    // For mute and changing the color
    function clickOff() {
        function turnOn(v) {
            v.volume = 0.2;
        }
        function turnOff(v) {
            v.volume = 0;
        }
        if (audio[0].volume === 0) {
            audio.forEach(turnOn);
            $("#off").css({
                "background-image": "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgo8cmFkaWFsR3JhZGllbnQgaWQ9ImczNzMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iNTAlIiBjeT0iNTAlIiByPSIyMDAlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIwIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzg4OCIgb2Zmc2V0PSIxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyZWN0IHg9Ii01MCIgeT0iLTUwIiB3aWR0aD0iMTAxIiBoZWlnaHQ9IjEwMSIgZmlsbD0idXJsKCNnMzczKSIgLz4KPC9zdmc+)",
                "background-color": "#ddd"
            });
            $("#note").html("<small><!-- Valitse kello laittaaksesi sen äänettömälle --></small>");
            $(".tn").css("color", "#888");
        } else {
            audio.forEach(turnOff);
            $("#off").css({
                "background-image": "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPgo8cmFkaWFsR3JhZGllbnQgaWQ9Imc1MTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjeD0iNTAlIiBjeT0iNTAlIiByPSI1MCUiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBvZmZzZXQ9IjAiLz48c3RvcCBzdG9wLWNvbG9yPSIjODdjZWZhIiBvZmZzZXQ9IjEiLz4KPC9yYWRpYWxHcmFkaWVudD4KPHJlY3QgeD0iLTUwIiB5PSItNTAiIHdpZHRoPSIxMDEiIGhlaWdodD0iMTAxIiBmaWxsPSJ1cmwoI2c1MTUpIiAvPgo8L3N2Zz4=)",
                "background-color": "lightskyblue"
            });
            $("#note").html("<small style='color:brown;letter-spacing:1px;font-weight:bold;'><!-- MUTED --></small>");
            $(".tn").css("color", "#555");
        }
    }
    /*
    ABOUT REPEATEDLY PLAYING AUDIO
    ---------------------------
    A. Using audio file:
    ---------------------
    1. The trick to play over and over the same (short) audio is to create more than 1 "Audio" object. Then repeat the play() invocation for each different object.
    2. Or use 1 object, attach a listener (ended event), then chain that to your other trigger if the app something stuff nanana. This one is less efficient. You'll have no "buffer".
    ---------------------
    B. Using web audio API:
    ---------------------
    Synthesize it using web audio API. That takes superposition of multifrequency, phase and oscillation types and maybe filter(s) to mimic the ticking sound. Boy that's something.
    */
    (function () {
        var i = 0;
        if (Audio !== undefined) {
            audio = new Audio(uso);
            if (audio.canPlayType("audio/mp3") !== "") {
                $("#off").click(clickOff); // Muting trigger
                audio = [];
                // Here, I create 5 "Audio" objects
                while (i < 5) {
                    audio.push(new Audio(uso));
                    audio[i].volume = 0.2;
                    i += 1;
                }
                run(0); // Run with audio
            } else {
                run(1); // Run without audio
            }
        } else {
            run(1); // Run without audio
        }
    }());
});