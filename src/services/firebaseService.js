import axios from 'axios';

const firebaseProj = 'yachts-1baaa';
let tableName;

const dataFolder = 'V9LbJ9iczsSCfCSq1UOUJQEBtAC2';

const firebaseService = (fbTable) => {
    tableName = fbTable;
    return {
        projId: firebaseProj,
        importFrom: async (url) => {
            const importedRecords = await axios.get(url);
            return importedRecords;
        },
        createRecord: async (user, record) => {
            const fbCustomer = await axios.post(`https://${firebaseProj}.firebaseio.com/${dataFolder}/${tableName}.json?auth=${user.idToken}`, record);
            return fbCustomer;
        },
        updateRecord: async (user, recordId, record) => {
            await axios.put(`https://${firebaseProj}.firebaseio.com/${dataFolder}/${tableName}/${recordId}.json?auth=${user.idToken}`, record);
            return { ...record, id: recordId };
        },
        deleteRecord: async (user, recordId, record) => {
            await axios.delete(`https://${firebaseProj}.firebaseio.com/${dataFolder}/${tableName}/${recordId}.json?auth=${user.idToken}`);
            return { ...record, id: recordId };
        },
        deleteTable: async (user) => {
            await axios.delete(`https://${firebaseProj}.firebaseio.com/${dataFolder}/${tableName}.json?auth=${user.idToken}`);
        },
        getRecord: async (user, recordId) => {
            const fbCustomer = await axios.get(`https://${firebaseProj}.firebaseio.com/${dataFolder}/${tableName}/${recordId}.json?auth=${user.idToken}`);
            return fbCustomer;
        },
        getRecords: async (user, limit) => { // TODO: implement limit on number of records returned 
            const result = await axios.get(`https://${firebaseProj}.firebaseio.com/${dataFolder}/${tableName}.json?auth=${user.idToken}`);
            return result;
        }
    }
}


export default firebaseService;
