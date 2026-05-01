panel.plugin("samrm/rtl-panel", {
    created(vm) {
        vm.$watch(
            function () {
                return vm.$panel.language;
            },
            function (newValue, oldValue) {
                if (oldValue && oldValue.direction) document.body.classList.remove(oldValue.direction);
                if (newValue && newValue.direction) document.body.classList.add(newValue.direction);
            },
            {
                immediate: true,
                deep: true
            }
        );
    }
});
