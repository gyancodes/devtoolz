// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../middleware/mongoose";
const handler = async (req, res) => {
  res.status(200).json({ name: 'DevTOOLZ' })
}
export default connectDb(handler);
