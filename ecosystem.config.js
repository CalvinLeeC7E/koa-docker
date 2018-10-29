module.exports = {
  apps: [
    {
      name: 'koa-docker',
      script: 'bin/www.js',
      instances: 4,
      exec_mode: 'cluster',
      max_memory_restart: '512M',
      env: {
        PORT: '3000',
        NODE_ENV: 'production'
      }
    }
  ]
}
