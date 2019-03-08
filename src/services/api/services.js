import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

export default {


    
    /** Save status to db */
    
    taskSaveApi(description,percentage_completion,completed_date,manager_name,date_created,project_name) {
       this.statusId ++ ;
        const body = {
                description:description,
                percentage_completion:percentage_completion,
                completed_date:completed_date,
                manager_name:manager_name,
                date_created:date_created,
                project_name:project_name
          };
        const url = "http://localhost:3000/addname";
        return axios.post(url,body)
        .then(response => {
            return response.data;
        })
    },
        /** Add Project to db by admin */

    projectDetailsApi(username) {
        console.log(username);
        const url = `http://localhost:3000/getprojectdata/${username}`;
        return axios.get(url)
        .then(response => {
            console.log(response);
            return response;
        })
    },

    /** get status by date on load**/
    getStatusbyDate(project_name) {
        const url = `http://localhost:3000/getallData/${project_name}`;
        return axios.get(url)
        .then(response => {
            return response;
        })
    },

    /** update fields */

    updateStatusById(_id,description,percentage_completion,completed_date) {
        const url = `http://localhost:3000/${_id}/updatestatus`;
        const body ={
            _id:_id,
            description:description,
            percentage_completion:percentage_completion,
            completed_date:completed_date
        }
        return axios.put(url,body)
        .then(response => {
            return response.data;
        })
    },

    /**
     * delete status
     */

    deleteStatusById(_id) {
        console.log("StatusId" + _id);
        const url = `http://localhost:3000/${_id}/deleterecord`;
        return axios.delete(url)
        .then(response => {
            return response;
        })
    },
    /** upload song to s3 api call */
    uploadSongtoS3(fileSong) {
        const url = `${BASE_URL}/upload`;
        const body = fileSong;
        return axios.post(url,body);
    },
    /** upload image to s3 api call */
    uploadImagetoS3(imageFile) {
        const url = `${BASE_URL}/upload`;
        const body = imageFile;
        return axios.post(url,body);
    },
    /** upload api call from front end */
    uploadFiletoDatabase(media_file,media_name,media_file_thumbnail,media_genre,media_artist_name,media_album_name,media_release_date) {
        const url = `${BASE_URL}/addmusic`;
        const body = {
            media_file: media_file,
            media_name:media_name,
            media_file_thumbnail:media_file_thumbnail,
            media_genre:media_genre,
            media_artist_name:media_artist_name,
            media_album_name:media_album_name,
            media_release_date:media_release_date
        }
        return axios.post(url,body)
        .then(response => {
            return response.data
        })
    }
   
}
