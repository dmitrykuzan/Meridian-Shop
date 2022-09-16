export const mobileFilter = () => {

  const triggerBtn = document.querySelector(".collection__trigger-btn");
  const filter = document.querySelector(".collection__navbar");

  if(filter) {
    const toggleFilter = () => {
      filter.classList.toggle('show');
    }

    triggerBtn.addEventListener('click', e => {
      e.stopPropagation();

      toggleFilter();
    });

    document.addEventListener('click', e => {
      const target = e.target;
      const its_filter = target == filter || filter.contains(target);
      const its_trigger = target == triggerBtn;
      const filter_is_show = filter.classList.contains('show');

      if (!its_filter && !its_trigger && filter_is_show) {
        toggleFilter();
      }
    });
  }
};

