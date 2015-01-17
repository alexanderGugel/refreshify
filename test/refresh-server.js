var test = require('tape');
var refreshServer = require('../lib/refresh-server');
var http = require('http');

var PORT = 31419;

test('refreshServer', function(t) {
    t.test('API', function(t) {
        t.plan(5);
        t.ok(refreshServer instanceof http.Server);
        t.ok(refreshServer.refresh instanceof Function);
        t.ok(refreshServer.listen instanceof Function);
        t.ok(Array.isArray(refreshServer.pendingResponses));
        t.equal(refreshServer.pendingResponses.length, 0);
    });

    t.test('networking', function(t) {
        t.plan(3);
        t.doesNotThrow(function() {
            refreshServer.listen(PORT, function(error) {
                t.pass();
                t.equal(error, undefined);
                refreshServer.close();
            });
        });
    });

    t.test('pendingResponses length', function(t) {
        t.plan(6);
        t.equal(refreshServer.pendingResponses.length, 0);

        refreshServer.listen(PORT, function(error) {
            t.equal(error, undefined);
            t.equal(refreshServer.pendingResponses.length, 0);

            var refreshed = false;

            var req = http.request({
                hostname: 'localhost',
                port: PORT,
                path: '/',
                method: 'GET'
            }, function() {
                t.equal(refreshed, true);
                t.equal(refreshServer.pendingResponses.length, 0);

                req.connection.destroy();
                refreshServer.close();
            });

            req.end();

            setTimeout(function() {
                t.equal(refreshServer.pendingResponses.length, 1);

                refreshed = true;
                refreshServer.refresh();
            }, 100);
        });
    });
});
