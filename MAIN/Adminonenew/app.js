document.addEventListener('DOMContentLoaded', function () {
    // Handle Create Job Form Submission
    const jobForm = document.getElementById('jobForm');
    if (jobForm) {
        jobForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const jobTitle = document.getElementById('jobTitle').value;
            const jobDescription = document.getElementById('jobDescription').value;
            const jobLocation = document.getElementById('jobLocation').value;
            const jobType = document.getElementById('jobType').value;

            // Prepare job data
            const jobData = {
                jobTitle,
                jobDescription,
                jobLocation,
                jobType
            };

            // Save job data to localStorage
            let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
            jobs.push(jobData);
            localStorage.setItem('jobs', JSON.stringify(jobs));

            alert(`Job Created: ${jobTitle}`);
        });
    }

    // Handle Feedback Form Submission
    const feedbackForm = document.getElementById('feedbackFormElement');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const satisfaction = document.getElementById('satisfaction').value;
            const beneficial = document.getElementById('beneficial').value;
            const improvements = document.getElementById('improvements').value;

            const feedbackData = {
                name,
                email,
                satisfaction,
                beneficial,
                improvements
            };

            // Save feedback data to localStorage
            let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
            feedbacks.push(feedbackData);
            localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

            alert('Feedback Submitted!');
        });
    }

    // Handle Get All Forms (Display Created Jobs)
    const getAllFormsBtn = document.getElementById('getAllForms');
    const formsContainer = document.getElementById('formsContainer');
    if (getAllFormsBtn) {
        getAllFormsBtn.addEventListener('click', function () {
            formsContainer.innerHTML = '';

            // Retrieve stored jobs and feedbacks
            const jobs = JSON.parse(localStorage.getItem('jobs')) || [];
            const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

            // Display jobs
            if (jobs.length > 0) {
                const jobsTable = document.createElement('table');
                jobsTable.innerHTML = `
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Job Description</th>
                            <th>Location</th>
                            <th>Job Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${jobs.map(job => `
                            <tr>
                                <td>${job.jobTitle}</td>
                                <td>${job.jobDescription}</td>
                                <td>${job.jobLocation}</td>
                                <td>${job.jobType}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                `;
                formsContainer.appendChild(jobsTable);
            } else {
                formsContainer.innerHTML = '<p>No jobs available.</p>';
            }

            // Display feedbacks
            if (feedbacks.length > 0) {
                const feedbacksDiv = document.createElement('div');
                feedbacksDiv.innerHTML = '<h2>Feedbacks:</h2>';
                feedbacksDiv.innerHTML += feedbacks.map(feedback => `
                    <div class="feedback-item">
                        <strong>${feedback.name}</strong><br>
                        Email: ${feedback.email}<br>
                        Satisfaction: ${feedback.satisfaction}<br>
                        Beneficial: ${feedback.beneficial}<br>
                        Improvements: ${feedback.improvements}<br>
                    </div>
                `).join('');
                formsContainer.appendChild(feedbacksDiv);
            } else {
                formsContainer.innerHTML += '<p>No feedbacks available.</p>';
            }
        });
    }

    // Handle Close Forms Button
    const closeFormsBtn = document.getElementById('closeFormsBtn');
    if (closeFormsBtn) {
        closeFormsBtn.addEventListener('click', function () {
            formsContainer.innerHTML = '';
        });
    }

    // Simulate feedback submission (for testing)
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push({
        name: 'John Doe',
        email: 'john@example.com',
        satisfaction: 'Very Satisfied',
        beneficial: 'Great service!',
        improvements: 'More job opportunities.'
    });
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
});


