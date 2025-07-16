module.exports = {
  apps: [
    {
      name: "mm-smart-app",
      script: ".output/server/index.mjs",
      env: {
        NODE_ENV: "production",
      $env:MAIL_USER = "matko.matus22@gmail.com"
        $env:MAIL_PASS = "kdps ztyy bjxf hpdp"
        $env:MAIL_TO   = "matko.matus22@gmail.com"

      }
    }
  ]
}