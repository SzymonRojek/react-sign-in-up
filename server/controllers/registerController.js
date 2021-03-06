const { restart } = require("nodemon");
const Subscriber = require("../model/Subscriber");

const handleRegisterNewSubscriber = async (req, res) => {
  const { email } = req.body;

  const isSubscriberExist = await Subscriber.findOne({ email }).exec();

  if (isSubscriberExist) {
    return res
      .status(409)
      .json({ message: "This email already exist. Please log in" }); // Subscriber already exist!
  }

  try {
    const subscriber = new Subscriber({
      ...req.body,
      roles: { User: 2001 },
    });
    await subscriber.save();

    res
      .status(201)
      .json({ message: "Registered successfully - please log in" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong. Please register again" });
  }
};

module.exports = { handleRegisterNewSubscriber };
