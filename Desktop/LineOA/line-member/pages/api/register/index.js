import { session } from 'next-session';

export default async (req, res) => {
    const { method } = req;
    switch (method) {
      case "POST":
        try {
            let session = req.session
                session._id = "test";
                session.role = "admin";
            res.status(200).json({ success: true, data: "GLHF" });
        }
        catch (error) {
            res.status(400).json({ success: false });
          }
        break;
      case "GET":
        try{
            res.status(200).json({ success: true, data: "GLHF" });
        }
        catch (error) {
            res.status(400).json({ success: false });
          }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  };