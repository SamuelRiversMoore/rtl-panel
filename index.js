panel.plugin("samrm/rtl-panel", {
    created(vm) {
        vm.$watch(
            function() {
                return vm.$store.state.languages.current;
            },
            function(newValue, oldValue) {
                if (oldValue) document.body.classList.remove(oldValue.direction);
                if (newValue) document.body.classList.add(newValue.direction);
            },
            {
                immediate: true,
                deep: true
            }
        );
    }
});
