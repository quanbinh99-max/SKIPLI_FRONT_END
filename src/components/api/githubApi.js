import axios from "axios";

export const searchGithubUsers = async (q, page, perPage) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/search-github-users`, { params: { q, page, perPage } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const findGithubUserProfile = async (id) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/find-github-user-profile/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


export const likeGithubUser = async (phoneNumber, likedIds) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/like-github-user`, { phoneNumber, likedIds });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getUserProfile = async (phoneNumber) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_KEY}/get-user-profile`, { params: { phoneNumber } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}