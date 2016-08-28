module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        watch: {
            livereload: {
                options: {
                    livereload: "<%= connect.options.livereload %>"
                },
                files: ["WebContent/index.html"
                    , "WebContent/manifest.json"
                    , "WebContent/**/*.js"
                    , "WebContent/**/*.xml"
                    , "WebContent/**/*.properties"
                    , "!node_modules/**"]
            }
        },

        open: {
            root: {
                path: "http://<%= connect.options.hostname %>:<%= connect.options.port %>",
                app: "Chrome",
                options: {
                    delay: 500
                }
            }
        },

        connect: {
            options: {
                port: 9090,

                livereload: 35729,

                hostname: "localhost",
                base: "./WebContent"
            },

            proxies: [
                {
                    context: "/proxy/bla",  // When the url contains this...
                    host: "bla.example.org", // Proxy to this host
                    changeOrigin: false,
                    port: 8000,
                    rewrite: {
                        '^/proxy/bla': ''
                    }
                }
            ],

            livereload: {
                options: {
                    middleware: function (connect, options) {
                        if (!Array.isArray(options.base)) {
                            options.base = [options.base];
                        }

                        // Setup the proxy
                        var middlewares = [require('grunt-connect-proxy/lib/utils').proxyRequest];

                        // Serve static files.
                        options.base.forEach(function (base) {
                            middlewares.push(connect.static(base));
                        });

                        // Make directory browse-able.
                        var directory = options.directory || options.base[options.base.length - 1];
                        middlewares.push(connect.directory(directory));

                        return middlewares;
                    }
                }
            }
        }

    });


    // load provided tasks
    grunt.loadNpmTasks("grunt-open");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-connect-proxy");

    /**
     * Task to serve UI5 WebApp w/ livereload feature
     */
    grunt.registerTask("serve", function () {
        grunt.task.run(["configureProxies", "connect:livereload", "open", "watch"]);
    });
    
};