

// Initialize subscription counts
const currentSubs = 50;
const goalSubs = 100;

// Calculate progress percentage
const progressPercentage = (currentSubs / goalSubs) * 100;

// Update progress bar width
document.getElementById('progress').style.width = progressPercentage + '%';

// Update text content
document.getElementById('currentSubs').textContent = currentSubs;
document.getElementById('goalSubs').textContent = goalSubs;