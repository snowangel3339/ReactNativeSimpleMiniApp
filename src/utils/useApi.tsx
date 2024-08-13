import axios from './axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YjFlOTkzMDY2ZDg3MDAxNTJjNWJiOCIsImlhdCI6MTcyMjkzNTc1NywiZXhwIjoxNzI1NTI3NzU3fQ.fs9nU9mT5Dgs8LVN310fo37Mxrukndof2OBP4sbIG5o"
const appIdToFilter = "5ebd001991b7084528ebeb1a";
const questionIdsOrder = [
  "5f6d81eb8a388b6b805a0234",
  "5f6d81eb8a388b6b805a0235",
  "5f6d81eb8a388b6b805a0236",
  "5f6d81eb8a388b6b805a0237",
];
export const getQuestions = async (endpoint: any) => {
  try {
    const response = await axios.get(`${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = response.data.data;
    const filteredData = data.filter((item: any) => item.appId === appIdToFilter);
    const sortedData = questionIdsOrder.map(id => 
      filteredData.find((item: any) => item.categoryId === id)
    ).filter(item => item !== undefined);
    console.log('filteredData', sortedData);
    
    return sortedData;
  } catch (error) {
    console.log("================");
    console.log(error)
    throw error;
  }
};

export const postAnswer = async (endpoint: any, answerData: any) => {
  try {
    const response = await axios.post(`${endpoint}`, answerData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = response.data.data;
    // const filteredData = data.filter((item: any) => item.appId === appIdToFilter);
    // const sortedData = questionIdsOrder.map(id => 
    //   filteredData.find((item: any) => item.categoryId === id)
    // ).filter(item => item !== undefined);
    // console.log('filteredData', sortedData);
    
    return data;
  } catch (error) {
    console.log("================");
    console.log(error)
    throw error;
  }
};