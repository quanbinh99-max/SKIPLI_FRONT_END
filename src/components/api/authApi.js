import axios from "axios";

export const createNewAccessCode = async (phoneNumber) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/create-new-access-code`,
      { phoneNumber }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

export const validateAccessCode = async (phoneNumber, otp) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/validate-access-code`,
      { phoneNumber, otp }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

export const reSendOtp = async (phoneNumber) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/resend-otp`,
      { phoneNumber }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};

export const getUserByPhoneNumber = async (phoneNumber) => {
  try {
    const response = await axios.get(
      "http://localhost:8080/get-user-by-phone-number",
      { params: { phoneNumber } }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message);
  }
};
