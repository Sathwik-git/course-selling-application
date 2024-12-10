const z = require("zod");

const UserSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

const auth = (req, res) => {
  const result = UserSchema.safeParse(req.body);
  if (result.success) {
    res.json({ msg: "success" });
    return;
  } else {
    res.json({ msg: "Pleaser enter valid details" });
    return;
  }
};

module.exports = auth;
