import axios from 'axios';

class HospitalManagementSDK {
  constructor(apiKey) {
    this.baseURL = 'https://something.com/api'; // Replace with your API base URL
    this.apiKey = apiKey;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }

  // User authentication methods
  async login(username, password) {
    const response = await this.axiosInstance.post('/auth/login', {
      username,
      password,
    });
    return response.data;
  }

  async register(user) {
    const response = await this.axiosInstance.post('/auth/register', user);
    return response.data;
  }

  // Patient management methods

  async getPatients() {
    const response = await this.axiosInstance.get('/patients');
    return response.data;
  }

  async getPatientById(id) {
    const response = await this.axiosInstance.get(`/patients/${id}`);
    return response.data;
  }

  async addPatient(patient) {
    const response = await this.axiosInstance.post('/patients', patient);
    return response.data;
  }

  async updatePatient(id, patient) {
    const response = await this.axiosInstance.put(`/patients/${id}`, patient);
    return response.data;
  }

  async deletePatient(id) {
    const response = await this.axiosInstance.delete(`/patients/${id}`);
    return response.data;
  }

  // Doctor management methods

  async getDoctors() {
    const response = await this.axiosInstance.get('/doctors');
    return response.data;
  }

  async getDoctorById(id) {
    const response = await this.axiosInstance.get(`/doctors/${id}`);
    return response.data;
  }

  async addDoctor(doctor) {
    const response = await this.axiosInstance.post('/doctors', doctor);
    return response.data;
  }

  async updateDoctor(id, doctor) {
    const response = await this.axiosInstance.put(`/doctors/${id}`, doctor);
    return response.data;
  }

  async deleteDoctor(id) {
    const response = await this.axiosInstance.delete(`/doctors/${id}`);
    return response.data;
  }

  // Appointment management methods

  async bookAppointment(doctorId, patientId, appointmentDate) {
    const response = await this.axiosInstance.post('/appointments', {
      doctorId,
      patientId,
      appointmentDate,
    });
    return response.data;
  }

  // Hospital staff management methods

  async getHospitalStaff() {
    const response = await this.axiosInstance.get('/staff');
    return response.data;
  }

  async getHospitalStaffMember(id) {
    const response = await this.axiosInstance.get(`/staff/${id}`);
    return response.data;
  }

  async addHospitalStaffMember(staffMember) {
    const response = await this.axiosInstance.post('/staff', staffMember);
    return response.data;
  }

  async updateHospitalStaffMember(id, staffMember) {
    const response = await this.axiosInstance.put(`/staff/${id}`, staffMember);
    return response.data;
  }

  async deleteHospitalStaffMember(id) {
    const response = await this.axiosInstance.delete(`/staff/${id}`);
    return response.data;
  }

  // Payment management methods

  async makePayment(amount, cardNumber, expirationDate, cvv) {
    const response = await this.axiosInstance.post('/payments', {
      amount,
      cardNumber,
      expirationDate,
      cvv,
    });
    return response.data;
  }
}

module.exports = HospitalManagementSDK;
