import { useState } from 'react';
import Swal from 'sweetalert2';
import './ScheduleForm.css';

const ScheduleForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    businessField: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, phoneNumber } = formData;

    if (!name || name.length < 3 || !/^[a-zA-Z\s]+$/.test(name)) {
      Swal.fire('Validation Error', 'Name must be at least 3 characters and letters only!.', 'error');
      return false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      Swal.fire('Validation Error', 'Please enter a valid email.', 'error');
      return false;
    }

    if (!phoneNumber || !/^[0-9]+$/.test(phoneNumber)) {
      Swal.fire('Validation Error', 'Phone number must contain only digits.', 'error');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    localStorage.setItem('scheduleFormData', JSON.stringify(formData));
    Swal.fire({
      title: 'Success!',
      text: 'Your information has been saved.',
      icon: 'success',
      confirmButtonText: 'Schedule Meeting'
    }).then(() => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: 'https://app.usemotion.com/meet/moataz-kotb/internal'
        });
      } else {
        console.error('Calendly script not loaded');
      }
    });
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      businessField: '',
      message: '',
    });
    e.target.reset();
  };

  return (
    <div className={`container schedule-form-container my-5 pt-5 position-relative ${darkMode ? 'dark-mode' : ''}`}>
      <div className="star-decoration star-1">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon"
        >
          <path
            d="M45.0898 28.8055C37.7285 28.0962 31.9038 22.2742 31.1953 14.9192L30 2.5L28.8047 14.9192C28.0962 22.2755 22.2715 28.0975 14.9102 28.8055L2.5 30L14.9102 31.1945C22.2715 31.9038 28.0962 37.7258 28.8047 45.0808L30 57.5L31.1953 45.0808C31.9038 37.7245 37.7285 31.9025 45.0898 31.1945L57.5 30L45.0898 28.8055Z"
            fill={darkMode ? '#ffffff' : '#2009AF'}
          />
        </svg>
      </div>
      <div className="star-decoration star-2">
        <svg
          width="86"
          height="86"
          viewBox="0 0 86 86"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon"
        >
          <path
            d="M66.1376 41.1684C54.8504 40.0809 45.9192 31.1538 44.8328 19.8761L43 0.833313L41.1672 19.8761C40.0808 31.1557 31.1496 40.0828 19.8624 41.1684L0.833336 43L19.8624 44.8316C31.1496 45.9191 40.0808 54.8462 41.1672 66.1238L43 85.1666L44.8328 66.1238C45.9192 54.8443 54.8504 45.9172 66.1376 44.8316L85.1667 43L66.1376 41.1684Z"
            fill={darkMode ? '#ffffff' : '#2009AF'}
          />
        </svg>
      </div>

      <div className={`text-center schedule-header-section ${darkMode ? 'dark-mode' : ''}`}>
        <h1 className={`schedule-title ${darkMode ? 'dark-mode' : ''}`}>Title</h1>
        <p className={`schedule-description mx-auto ${darkMode ? 'dark-mode' : ''}`}>
          Lorem ipsum dolor sit amet consectetur. Lectus nisi lectus maecenas morbi nisi. Turpis nulla elementum fringilla mi elit tempor gravida. Erat molestie cras lacinia quis dolor. Accumsan dapibus pharetra tortor aliquam vulputate tortor. Malesuada condimentum ipsum et ullamcorper venenatis diam in dolor. Nascetur vitae tristique nec elit. Amet et vulputate neque commodo quam in malesuada orci nisl. Fringilla ac malesuada proin dui porttitor et est. Eget consectetur sit nisl non vitae a enim mauris. commodo quam in malesuada orci nisl. Fringilla ac malesuada proin dui porttitor et est. Eget consectetur sit nisl non vitae a enim mauris.
        </p>
      </div>

      <div className="text-center arrow-container">
        {darkMode ? (
          <img src="./assets/images/formArrow_dark.svg" alt="Arrow" className="arrow-svg" />
        ) : (
          <img src="./assets/images/formArrow.svg" alt="Arrow" className="arrow-svg" />
        )}
      </div>

      <div className="schedule-form-section">
        <h2 className={`form-section-title text-center ${darkMode ? 'dark-mode' : ''}`}>Fill the form</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4 schedule-form-group">
            <label htmlFor="name" className={`form-label schedule-label ${darkMode ? 'dark-mode' : ''}`}>Name</label>
            <input
              type="text"
              className={`form-control schedule-input ${darkMode ? 'dark-mode' : ''}`}
              id="name"
              name="name"
              placeholder="type your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 schedule-form-group">
            <label htmlFor="email" className={`form-label schedule-label ${darkMode ? 'dark-mode' : ''}`}>Email</label>
            <input
              type="email"
              className={`form-control schedule-input ${darkMode ? 'dark-mode' : ''}`}
              id="email"
              name="email"
              placeholder="type your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 schedule-form-group">
            <label htmlFor="phoneNumber" className={`form-label schedule-label ${darkMode ? 'dark-mode' : ''}`}>Phone Number</label>
            <input
              type="tel"
              className={`form-control schedule-input ${darkMode ? 'dark-mode' : ''}`}
              id="phoneNumber"
              name="phoneNumber"
              placeholder="type your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 schedule-form-group">
            <label htmlFor="businessField" className={`form-label schedule-label ${darkMode ? 'dark-mode' : ''}`}>Business Field</label>
            <input
              type="text"
              className={`form-control schedule-input ${darkMode ? 'dark-mode' : ''}`}
              id="businessField"
              name="businessField"
              placeholder="Type your business"
              value={formData.businessField}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4 schedule-form-group">
            <label htmlFor="message" className={`form-label schedule-label ${darkMode ? 'dark-mode' : ''}`}>Message</label>
            <textarea
              className={`form-control schedule-input schedule-textarea ${darkMode ? 'dark-mode' : ''}`}
              id="message"
              name="message"
              rows="4"
              placeholder="Type Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="text-center mt-5">
            <button
              type="submit"
              className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} schedule-submit-btn`}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;
