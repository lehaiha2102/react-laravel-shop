import '../AxiosClient'
import axiosClient from '../AxiosClient';

const CategoryApi = {
    getAll(pageNumber = 1) {
      const url = `/categories?page=${pageNumber}`;
      return axiosClient.get(url);
    },

    addCategory(data){
        const url = '/categories/add';
        return axiosClient.post(url, data)
    }

}

export default CategoryApi;