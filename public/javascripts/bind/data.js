var findTB = new Vue({
    el: '#findop',
    data: {
        quantity: 1,
        baseClass: 'btn btn-block',
        statusClass: 'btn-primary',
        isDisable: false
    },
    methods: {
        searchData: function () {
            findTB.isDisable = true;

            this.$http.get('/data/find?wordq=' + this.quantity).then(
                function (response) {
                    console.log('response!!!!!!!')
                    listVM.items = response.data;
                    findTB.isDisable = false;
                },
                function (err) {
                    findTB.statusClass = 'btn-danger';
                    findTB.isDisable = false;
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