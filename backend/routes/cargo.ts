import express from 'express';
import Cargo from '../models/Cargo';
import jwtMiddleware from '../middleware/jwt';

const router = express.Router();

// Apply JWT middleware to all routes below
// router.use(jwtMiddleware);

// POST /checkin – Add cargo to inventory
router.post('/checkin', async (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Unauthorized' });

  const cargo = new Cargo({
    ...req.body,
    status: 'checked-in',
    checkInDate: new Date(),
    handledBy: req.user.id,
  });

  await cargo.save();
  res.json(cargo);
});

// POST /checkout – Mark cargo as dispatched
router.post('/checkout', async (req, res) => {
  const { cargoId } = req.body;

  try {
    const cargo = await Cargo.findById(cargoId);
    if (!cargo) return res.status(404).json({ message: 'Cargo not found' });

    cargo.status = 'checked-out';
    cargo.checkOutDate = new Date();
    await cargo.save();

    res.json(cargo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error checking out cargo' });
  }
});


// GET / – List all cargo
router.get('/', async (req, res) => {
  const items = await Cargo.find()
    .sort({ checkInDate: -1 }) // Sort descending (newest first)
    .populate('handledBy', 'name email');

  res.json(items);
});

export default router;
