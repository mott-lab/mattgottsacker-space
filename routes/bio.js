var express = require('express');
var router = express.Router();

/* GET bio page. */
router.get('/', function(req, res, next) {
  res.render('bio', { title: 'matt gottsacker' });
});

module.exports = router;

// document.addEventListener('DOMContentLoaded', function() {
//           document.querySelectorAll('.timeline-details').forEach(function(details) {
//         const content = details.querySelector('.timeline-details-content');
//         if (!content) return;

//         // Set initial height
//         if (!details.open) {
//           content.style.height = '0';
//           content.style.overflow = 'hidden';
//           content.style.transition = 'height 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
//         }

//         details.addEventListener('toggle', function() {
//           if (details.open) {
//             content.style.display = 'block';
//             const height = content.scrollHeight + 'px';
//             content.style.height = height;
//             setTimeout(() => {
//               content.style.height = 'auto';
//             }, 400);
//           } else {
//             content.style.height = content.scrollHeight + 'px';
//             // Force reflow
//             void content.offsetHeight;
//             content.style.height = '0';
//           }
//         });
//           });
//         });