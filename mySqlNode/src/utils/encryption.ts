import bcrypt from "bcrypt";

export const getHashedText = async (text: string) => {
  const salt = await bcrypt.genSalt(15);
  const hashedText = await bcrypt.hash(text, salt);

  return hashedText;
};
