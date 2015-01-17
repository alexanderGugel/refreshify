;(function() {
    var devHostnames = ['localhost', '', '0.0.0.0'];
    if (devHostnames.indexOf(location.hostname) === -1) return;

    var date = new Date();
    console.log('%c Reloaded ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(), 'color: green; font-size: 1.5em;');

    function notifyError(errorMessage) {
        console.error('%c ' + errorMessage, 'color: red; font-size: 1.5em;');
    }

    if (window.BUNDLE_ERROR_MESSAGE) {
        notifyError(window.BUNDLE_ERROR_MESSAGE);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', window.REFRESH_SERVER_URL, true);
    xhr.onload = location.reload.bind(location);
    xhr.onerror = function () {
        notifyError('%c Couldn\'t connect to reload server', 'color: red; font-size: 1.5em;');
        notifyError('%c Trying again in 3 seconds', 'color: red; font-size: 1.5em;');
        setTimeout(function () {
            location.reload();
        }, 3000);
    };

    xhr.send(null);
}());
