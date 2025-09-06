import { ref } from "vue";

const useDataTable = () => {
  return {
    dataTable: ref([]),
  };
};

export default useDataTable;
