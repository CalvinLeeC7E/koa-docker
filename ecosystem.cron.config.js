module.exports = {
  apps: [
    {
      name: 'Project',
      script: 'crons/index.js',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}
