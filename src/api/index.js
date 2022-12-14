import axios from "axios";
import { toast } from "react-hot-toast";

const client = axios.create({
  baseURL: "http://contract-test.pod.ir/api",
  headers: {
    "Content-Type": "application/json",
    "access-token":
      "64d17c3f38f118ef03885cdf6c24b2d4a17e8bff3e0fb1888dd1a6a98db95d98",
    "business-code": 2,
  },
});

export const getAllDocuments = async ({ pageNumber, pageSize }) => {
  try {
    const { data } = await client.get(
      `/interview/document/?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    return data;
  } catch (error) {
    toast(error.response.data.body.title);
  }
};

export const createNewDocument = async ({ description, fileUrl, title }) => {
  try {
    const { data } = await client.post(`/interview/document/`, {
      description,
      fileUrl,
      title
    });
    return data;
  } catch (error) {
    toast(error.response.data.body.title);
  }
};
