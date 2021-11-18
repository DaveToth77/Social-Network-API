// Require express router
const router = require('express').Router();

// Set requirements (from thoughts-controller)
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');

// -- Directs to: /api/thoughts <GET>
router
.route('/')
.get(getAllThought);

// -- Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought); 

// -- Directs to: /api/thoughts/:userId <POST>
router
.route('/:userId')
.post(addThought);

// -- Directs to: /api/thoughts/:thoughtId/reactions <POST>
router
.route('/:thoughtId/reactions')
.post(addReaction);
 
// -- Directs to: /api/thoughts/:thoughtId/reactionId <DELETE>
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

// Export module router
module.exports = router;