function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
    const jobOptions = document.getElementsByName("job");
    let selectedJob = null;
    for (let job of jobOptions) {
        if (job.checked) {
            selectedJob = job.value;
            break; 
        }
    }

    if (selectedJob) {
        alert("Thank you for applying to be a " + selectedJob + "!");
    } else {
        alert("Please select a job!");
    }
}