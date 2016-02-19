var redisUri = process.env.REDIS_URL ||
  '';
var sendgriduser = process.env.SENDGRID_USERNAME || '';
var sendgridpass = process.env.SENDGRID_PASSWORD || '';

module.exports = {
  redisDS: {
    url: redisUri,
    name: "redisDS",
    connector: "redis"
  },
  sendgrid: {
    name: "sendgrid",
    connector: "mail",
    transports: [{
         type: "smtp",
         host: "smtp.sendgrid.net",
         secure: false,
         port: 587,
         tls: {
           rejectUnauthorized: false
         },
         auth: {
           user: sendgriduser,
           pass: sendgridpass
         }
       }]
  }
};