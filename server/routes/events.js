import express from 'express'
import EventsController from '../controllers/events.js'
// import controllers for events and locations


const router = express.Router()

// define routes to get events and locations

router.get('/', EventsController.getEvents);


export default router