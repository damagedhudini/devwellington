let registrationInfo = [];
let maxRegistrations = 150;

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let formData = new FormData(document.querySelector('form'));
  let isValid = true;

  // Check if all fields are filled
  Array.prototype.forEach.call(document.querySelectorAll('input, textarea'), (element) => {
    if (element.required &&!element.value) {
      isValid = false;
    }
  });

  if (isValid) {
    if (registrationInfo.length < maxRegistrations) {
      registrationInfo.push({
        name: formData.get('name'),
        idNo: formData.get('idNo'),
        passportUpload: formData.get('passportUpload'),
        email: formData.get('email'),
        countryOfResidence: formData.get('countryOfResidence'),
        currentSchool: formData.get('currentSchool'),
        otherSchool: formData.get('otherSchool'),
        whyScholarship: formData.get('whyScholarship')
      });
      console.log(registrationInfo);
      document.querySelector('form').reset(); // reset the form
    } else {
      alert("Maximum number of registrations reached. Please try again later.");
    }
  } else {
    alert("Please fill in all required fields.");
  }
});

// Display file path
//document.querySelector('input[type="file"]').addEventListener('change', (e) => {
  //let filePath = e.target