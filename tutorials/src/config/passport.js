const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("./config");

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    if (payload.type !== "access") {
      throw new Error("Invalid token type");
    }
    // TODO validate timestamp JWT
    // if (payload.timestamp)
    done(null, payload);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
