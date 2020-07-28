module.exports = {
    apps : [{
      name: 'app',
      cwd: '../client/src/index',
      script: 'npm',
      args: 'start',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    },{
      name: 'server',
      cwd: './server',
      script: 'node',
      args: 'start server.compiled.js',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }]
  };