import express from 'express';
import Cargo from '../models/Cargo';
import jwtMiddleware from '../middleware/jwt';

const router = express.Router();
router.use(jwtMiddleware);

router.post('/checkin', async (req, res) => {
  const cargo = new Cargo({
    ...req.body,
    status: 'checked-in',
    checkInDate: new Date(),
    handledBy: req.user.id
  });
  await cargo.save();
  res.json(cargo);
});

router.post('/checkout', async (req, res) => {
  const { cargoId } = req.body;
  const cargo = await Cargo.findById(cargoId);
  if (!cargo) return res.status(404).json({ message: 'Cargo not found' });
  cargo.status = 'checked-out';
  cargo.checkOutDate = new Date();
  await cargo.save();
  res.json(cargo);
});

router.get('/', async (req, res) => {
  const items = await Cargo.find();
  res.json(items);
});

export default router;
