const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const DEFAULT_WALLET_MONEY = 500;
const DEFAULT_ADDRESSS = "ADDRESS_NOT_SET";
const DEFAULT_PAYMENT_OPTION = "PAYMENT_OPTION_DEFAULT";

const evnVarsSchema = Joi.object().keys({
  NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
  PORT: Joi.number().default(3000),
  MONGODB_URL: Joi.string().required().description('Mongo DB url'),
  JWT_SECRET: Joi.string().required().description("JWT secret key"),
  JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
  JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire')
}).unknown()
const {value: envVars, error} = evnVarsSchema.prefs({errors: {label: 'key'}}).validate(process.env)
if(error){
  throw new Error(`Config validation error: ${error.message}`)
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  default_wallet_money: DEFAULT_WALLET_MONEY,
  default_address: DEFAULT_ADDRESSS,
  default_payment_option: DEFAULT_PAYMENT_OPTION,
  mongoose: {
    url: envVars.MONGODB_URL,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS
  }
};
