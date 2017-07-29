var findTB = new Vue({
    el: '#findop',
    data: {
        baseClass: 'btn',
        statusClass: 'btn-primary',
        isDisable: false
    },
    methods: {
        searchData: function () {
            findTB.isDisable = true;

            this.$http.get('/analysis/getRes').then(
                function (response) {
                    console.log('response!')
                    listVM.items = response.data;
                    findTB.isDisable = false;
                },
                function (err) {
                    findTB.statusClass = 'btn-danger';
                    findTB.isDisable = false;
                    console.log('error!');
                    console.log(err);
                }
            )
        }
    }
});

var listVM = new Vue({
    el: '#findtable',
    data: {
        items: []
    }
});