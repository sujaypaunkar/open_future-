document.addEventListener('DOMContentLoaded', function() {
    const filterForm = document.getElementById('job-filter-form');
    const jobListings = document.querySelectorAll('.job-listing');

    // Event listener for form submission
    filterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get filter values
        const jobTitle = document.getElementById('job-title').value.toLowerCase();
        const location = document.getElementById('location').value.toLowerCase();
        const experience = document.getElementById('experience').value.toLowerCase();

        // Loop through job listings and apply filters
        jobListings.forEach(function(job) {
            const jobTitleText = job.querySelector('h3').textContent.toLowerCase();
            const jobLocation = job.getAttribute('data-location').toLowerCase();
            const jobExperience = job.getAttribute('data-experience').toLowerCase();

            // Check if the job matches the filter criteria
            const matchesTitle = jobTitle ? jobTitleText.includes(jobTitle) : true;
            const matchesLocation = location ? jobLocation.includes(location) : true;
            const matchesExperience = experience ? jobExperience.includes(experience) : true;

            // Show or hide job listing based on the criteria
            if (matchesTitle && matchesLocation && matchesExperience) {
                job.style.display = 'block';  // Show the job
            } else {
                job.style.display = 'none';   // Hide the job
            }
        });
    });
});
