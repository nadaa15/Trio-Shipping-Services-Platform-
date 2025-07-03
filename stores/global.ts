import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", () => {
  const services = ref([]);
  const uniqueServices = ref([]);
  const subServices = ref([]);
  const selectedService = ref(null);

function getServices() {
  useAppFetch()
    .fetchServices()
    .then(({ data }) => {
      services.value = data.map((item) => item.parent);
      uniqueServices.value = Array.from(
        new Map(services.value.map((item) => [item.id, item])).values()
      );
      selectedService.value = uniqueServices.value[0];
      getSubServices(selectedService.value.id);
    })
    .catch((err) => {
      console.log(err);
    });
    }
    
    function selectService(service) {
      selectedService.value = service;
      getSubServices(service.id);
    }

  const getSubServices = (id) => {
    useAppFetch()
      .fetchSubServices(id)
      .then(({ data }) => {
        subServices.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    services,
    subServices,
    uniqueServices,
    selectedService,
    getServices,
    getSubServices,
    selectService,
  };
});
