const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");


router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


// router.route("/").get(getContacts);

// router.route("/").post(createContact);

// router.route("/:id").get(getContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);







// router.route("/").get((req,res) => {
//     res.status(200).json({ message : "Get all Contacts" });
// });

// router.route("/").post((req,res) => {
//     res.status(200).json({ message : "Created Contact"});
// });

// router.route("/:id").get((req,res) => {
//     res.status(200).json({ message : `Get contact for ${req.params.id}` });
// });

// router.route("/:id").put((req,res) => {
//     res.status(200).json({ message : `Update contact for ${req.params.id}` });
// });

// router.route("/:id").delete((req,res) => {
//     res.status(200).json({ message : `Delete contact for ${req.params.id}`}) 
// });

module.exports = router;
